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
    this.canvas = null;
    this.context = null;
    this.windowwidth = null;
    this.windowheight = null;

    /**
     * Animate individual line movement.
     * @type {[type]}
     */
    this.animateline = function(line) {

    };

    /**
     * Init the canvas and store it in an object.
     * @return Boolean true/false on success/failure of initializing canvas
     */
    this.initcanvas = function() {
        // TODO: Switch this to raphael.js so we can animate objects more easily.
        console.log('initcanvas');
        $('#'+that.target).attr({'height':that.windowheight,'width':that.windowwidth});
        // Init the canvas and store it in an object.
        that.canvas = document.getElementById(that.target);
        that.context = that.canvas.getContext("2d");
        if ((that.canvas).length > 0) {
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
        console.log('putline');
        if (that.canvas && that.context) {
            // Canvas and context objects exist so we can continue.
            // Generate a random direction of travel.
            // Apply the bounce.
            var x = that.windowwidth - that.windowwidth * 0.90; // Insert in lower left.
            var y = that.windowheight - that.windowwidth * 0.05; // Insert in lower left.
            (that.context).font = 'bold 20px courier';
            (that.context).fillStyle = '#173d59';
            (that.context).shadowColor = '#adadad';
            (that.context).shadowBlur = 2;
            (that.context).shadowOffsetX = 1;
            (that.context).shadowOffsetY = 1;
            var canvasline = (that.context).fillText(line, x, y);
            console.log(canvasline);
            var animated = that.animateline(canvasline);
        } else {
            console.error('There was a problem initializing the canvas object. Triggering init function again.');
            that.initcanvas();
        }
    };

    /**
     * Animate the lines.
     * @param  Array lines Array of lines of randomized length.
     * @return none
     */
    this.insert = function() {
        console.log('animate');
        console.log(that.lines);
        var tryinit = that.initcanvas();
        var timer = setInterval(function(){
            if ((that.lines).length < 1) {
                clearInterval(timer);
            } else {
                console.log('have lines, inserting');
                var line = (that.lines).splice(0, 1);
                line = line + '';
                line = line.replace(/,/g, ' ');
                // TODO: This needs to be pushed to canvas handling,
                // and inject these objects so they can float and bounce.
                // $('#fuckslattery').append('<p>' + line + '</p>');
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
        console.log('randomize');
        // console.log('the data is ' + data);
        var split = data.split(' ');
        console.log(split);
        // var lines = [];
        while(split.length > 0) {
            // Generate a random number between 3 and 10.
            var random = Math.random() * (10 - 3) + 3;
            // Push those items into the lines array as a line,
            // and out of the split array, until the split array
            // is empty
            (that.lines).push(split.splice(0, random));
        }
        console.log(that.lines);
        that.insert();
    };

    /**
     * AJAX call for the text file.
     * @param  string source Path to source txt file.
     * @return none
     */
    this.fetch = function(source) {
        console.log('fetch');
        $.ajax({
            url: that.txtpath,
            dataType: 'text'
        }).done(function(data) {
            console.log('fetch done');
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
        console.log('init');
        that.target = target;
        that.source = source;
        that.windowwidth = $(window).width();
        that.windowheight = $(window).height();
        // Building a new path to request the txt file.
        var pathArray = location.href.split( '/' );
        console.log(pathArray);
        var protocol = pathArray[0];
        var host = pathArray[2];
        that.txtpath = protocol + '//' + host + '/js/' + that.source;
        console.log('that.txtpath is ' + that.txtpath);
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
        console.log('the div exists, proceeding with request');
        var fs = new Fuckslattery();
        // Set a 1 minute time out.
        setTimeout(function(){
            $('#fuckslattery').css({
                "position": "fixed",
                "background": "transparent",
                "top": "0",
                "left": "0",
                "width": "100%",
                "height": "100%",
            });
            fs.init(source, target);
            // TODO: increase the timeout interval to 60,000 when done coding.
        }, 1000);
    }
});
