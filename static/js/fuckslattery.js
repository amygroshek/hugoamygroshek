/**
 * Fuck Andrew Slattery.
 * For being the dick that he is.
 */

// 1. Get the file.
// 2. Split the file up into an array of random-length Lines
// between 3 and 10 words long.
// 3. Inject each line into the page at a delay.
// 4. Animate the lines (maybe CSS will handle this).

function Fuckslattery() {
    // Set scope so we can call it when nested.
    var that = this;
    // Set some in-scope globals.
    this.target = '';
    this.source = '';
    this.txtpath = '';
    this.lines = [];
    this.svg = null;
    this.context = null;
    this.windowwidth = null;
    this.windowheight = null;
    this.linegroup = null;
    this.linearray = [];
    this.animating = false;
    this.showedobj = false;
    this.clickcounter = 0;
    this.clickresponse = {};

    /**
     * Set click response.
     * @return null
     */
    this.initclicklistener = function() {
        console.log('initclicklistener');
        if (that.clickcounter == 0) {
            that.clickresponse = $('#clickresponse');
        }
        $('svg').click(function(e) {
            that.clickcounter++;
            var offset = $('svg').offset();
            var mouseX = e.pageX; // - offset.left;
            var mouseY = e.pageY - offset.top;
            var v = '';
            if (that.clickcounter > 3) {
                v = "<p>I guess we should still reward persistence. Bye!</p>";
            } else {
                v = "<p>What, someone plagiarized your work and you don't like it? Too bad.</p>";
            }
            (that.clickresponse).html(v);
            var styles = {
                'font-size': 25,
                'color': 'purple !important',
                'font': 'bold 15px ComicSans,Helvetica',
                'border': '2px solid pink',
                'border-radius': '5px',
                'padding': '10px',
                'background': 'white',
                'min-width': '250px',
                'min-height': '100px',
                'height': 'auto',
                'z-index': '3000',
                'position': 'fixed',
                'top': mouseY,
                'left': mouseX
            };
            (that.clickresponse).css(styles);
            if (that.clickcounter > 3) {
                (that.clickresponse).show();
                setTimeout(
                    function() {
                        $('svg').unbind('click');
                        // Stop animations.
                        (that.linearray).forEach(function(el) {
                            el.line.stop();
                        });
                        // Fade out SVG.
                        setTimeout(function() {
                            (that.clickresponse).hide();
                            (that.svg).animate({'opacity':0}, 2000, mina.easeout, function() {
                                // Remove svg.
                                // (that.svg).remove();
                                $('svg g').remove();
                                that.target = '';
                                that.source = '';
                                that.txtpath = '';
                                that.lines = [];
                                that.svg = null;
                                that.context = null;
                                that.windowwidth = null;
                                that.windowheight = null;
                                that.linegroup = null;
                                that.linearray = [];
                                that.animating = false;
                                that.showedobj = false;
                                that.clickcounter = 0;
                                that.clickresponse = {};
                                $('svg').css({
                                    'background':'transparent',
                                    'width': 0,
                                    'height':0
                                });
                            });
                        }, 3000);
                    },
                9);
            } else {
                (that.clickresponse).show();
            }
        });
    };

    /**
     * Helper function to set random incline.
     * @return object Object with incline x and incline y.
     */
    this.setIncline = function(){
        return {
            incX: this.randomNumber(-5,5),
            incY: this.randomNumber(-5,5)
        };
    };

    this.randomNumber = function(min,max){
        return Math.floor(
            Math.random() * (max - min + 1) + min
        );
    };

    this.getBounds = function(shape){
        shapeBox = shape.node.getBoundingClientRect();
    };

    this.move = function(shape, curX, curY){
        // console.log('move');
        curX = Number(curX);
        curY = Number(curY);
        // Get shape width and height.
        var dimensions = shape.line.node.getBoundingClientRect();
        curwidth = dimensions.width;
        curheight = dimensions.height;
        if (curX >= that.windowwidth - curwidth || curX <= 0) { //if we're outside of the boundaries of our svg canvas...
            shape.incline.incX = -shape.incline.incX; //reverse the slope so it heads the opposite direction
        }
        if (curY >= that.windowheight - curheight || curY <= 0) {
            shape.incline.incY = -shape.incline.incY;
        }
        curX = curX + shape.incline.incX;
        curY = curY + shape.incline.incY;

        if (curX >= that.windowwidth - curwidth) {
            // curX = (that.windowwidth - curwidth - 1);
            curX--;
            shape.incline = this.setIncline();
        } else if (curX <= 0) {
            // curX = 0;
            curX++;
            shape.incline = this.setIncline();
        }

        if (curY > that.windowheight - curheight) {
            // curY = (that.windowheight - curheight) - 1;
            curY--;
            shape.incline = this.setIncline();
        } else if (curY <= 20) {
            curY++;
            shape.incline = this.setIncline();
        }
        shape.line.attr({x: curX, y: curY}); //set the position
    };

    /**
     * Animate individual line movements.
     * @return none
     */
    this.animate = function() {
        // console.log('animate');
        that.animating = true;
        // Animate each line in the line group array.
        for (var i = 0; i < that.linearray.length; i++) { //for each shape on screen...
            // console.log('inside the animate loop, index = ' + i);
            var l = (that.linegroup)[i];
            // console.log(l);
            // Get current position.
            // var lineX = l.node.x.animVal.value;
            var lineX = l.attr('x');
            var lineY = l.attr('y'); // l.node.y.animVal.value;
            that.move(that.linearray[i], lineX, lineY);
        }
        // Timeout to run update every 10 ms.
        setTimeout(
            function() {
                // console.log('timeout triggered');
                that.animate();
            },
        9);
    };

    /**
     * Init the canvas and store it in an object.
     * @return Boolean true/false on success/failure of initializing canvas
     */
    this.initsvg = function() {
        // console.log('initsvg');
        $('#'+that.target).attr({'height':that.windowheight,'width':that.windowwidth});
        // Init the svg and store it in an object.
        that.svg = Snap('#'+that.target);
        that.linegroup = that.svg.g();
        if (that.svg) {
            that.initclicklistener();
            return true;
        } else {
            return false;
        }
    };

    /**
     * Insert a single line into the canvas and animate it.
     * @return Boolean true/falses on success of insert
     */
    this.putline = function(line) {
        // console.log('putline');
        if (that.svg) {
            // Original placement is always lower left.
            var x = that.windowwidth - that.windowwidth * 0.90;
            var y = that.windowheight - that.windowwidth * 0.05;
            var t = (that.svg).text(x, y, line);
            t.attr({
                'font-size':100,
                'font': 'bold 25px courier',
                'stroke': '#173d59'
            });
            // Set the trajectory of the ball.
            var incline = that.setIncline();
            // Create an object which will hold the line element and keep track of its incline.
            var lineobj = {incline: incline, line: t};
            // Add text and object to linegroup and array.
            // console.log(t.node.cx);
            that.linegroup.add(t);
            that.linearray.push(lineobj);
            // If animation hasn't already started, start it.
            if (!that.animating) {
                that.animate();
            }
        } else {
            console.error('There was a problem initializing the canvas object. Triggering init function again.');
            that.initsvg();
        }
    };

    /**
     * Animate the lines.
     *
     * @param  Array lines Array of lines of randomized length.
     * @return none
     */
    this.insert = function() {
        // console.log('animate');
        // console.log(that.lines);
        var tryinit = that.initsvg();
        var timer = setInterval(function(){
            if ((that.lines).length < 1) {
                clearInterval(timer);
            } else {
                // console.log('have lines, inserting');
                var line = (that.lines).splice(0, 1);
                line = line + '';
                line = line.replace(/,/g, ' ');
                that.putline(line);
            }
        }, 3000);
    };

    /**
     * Split into line breaks of random length.
     * @param  text data Text object of data from AJAX request.
     * @return none
     */
    this.randomize = function(data, animate) {
        // console.log('randomize');
        // console.log('the data is ' + data);
        var split = data.split(' ');
        // console.log(split);
        // var lines = [];
        while(split.length > 0) {
            // Generate a random number between 3 and 10.
            var random = Math.random() * (10 - 3) + 3;
            // Push those items into the lines array as a line,
            // and out of the split array, until the split array
            // is empty
            (that.lines).push(split.splice(0, random));
        }
        // console.log(that.lines);
        that.insert();
    };

    /**
     * AJAX call for the text file.
     * @param  string source Path to source txt file.
     * @return none
     */
    this.fetch = function(source) {
        // console.log('fetch');
        $.ajax({
            url: that.txtpath,
            dataType: 'text'
        }).done(function(data) {
            // console.log('fetch done');
            // console.log(data);
            if (data) {
                that.randomize(data);
            }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log('An error occurred. Text status ' + textStatus + ', and error ' + errorThrown);
        });
    };

    /**
     * Save values passed in, build path to txt file, and init AJAX request.
     * @param  String source Name of the txt file.
     * @param  String target ID of the div of the canvas element
     * @return none
     */
    this.init = function(source, target) {
        console.log('Init fs script. No thank you Andrew Slattery!');
        that.target = target;
        that.source = source;
        that.windowwidth = $(window).width();
        that.windowheight = $(window).height();
        // Building a new path to request the txt file.
        var pathArray = location.href.split( '/' );
        // console.log(pathArray);
        var protocol = pathArray[0];
        var host = pathArray[2];
        that.txtpath = protocol + '//' + host + '/js/' + that.source;
        // console.log('that.txtpath is ' + that.txtpath);
        var callback1 = this.fetch();
    };
}
/**
 * When document ready, check for presence of div.
 * If it's there, then we init the fs object.
 * @return none
 */
$(document).ready(function() {
    var target = 'fuckslattery';
    var source = 'grandmagoinggone.txt';
    if ($('#'+target).length >= 1) {
        // console.log('the div exists, proceeding with request');
        var fs = new Fuckslattery();
        // Set a 1 minute time out.
        //
        $('#startfuckslattery').click(function() {
            $('#fuckslattery').css({
                "position": "fixed",
                'background': 'rgba(52, 100, 85, 0.71)',
                "top": "0",
                "left": "0",
                "width": "100%",
                "height": "100%",
                "opacity": '1'
            });
            fs.init(source, target);
        });
    }
});
