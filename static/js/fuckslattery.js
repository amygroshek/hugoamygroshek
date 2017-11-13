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

    var target = '';

    /**
     * Animate the lines.
     * @param  Array lines Array of lines of randomized length.
     * @return none
     */
    this.animate = function(lines) {
        console.log('animate');
        console.log(lines);
        var timer = setInterval(function(){
            if (lines.length < 1) {
                timer.clearInterval();
            } else {
                console.log('have lines, inserting');
                var line = lines.splice(0, 1);
                line = line + '';
                // line = line.replace(',', ' ');
                line = line.replace(/,/g, ' ');
                $('#fuckslattery').append('<p>' + line + '</p>');
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
        var lines = [];
        while(split.length > 0) {
            // Generate a random number between 3 and 10.
            var random = Math.random() * (10 - 3) + 3;
            // Push those items into the lines array as a line,
            // and out of the split array, until the split array
            // is empty
            lines.push(split.splice(0, random));
        }
        console.log(lines);
        animate(lines);
    };

    /**
     * AJAX call for the text file.
     * @param  string source Path to source txt file.
     * @return none
     */
    this.fetch = function(source) {
        console.log('fetch');
        // Set scope so we can call it when nested.
        var randomize = this.randomize;
        var animate = this.animate;
        $.ajax({
            url: source,
            dataType: 'text'
        }).done(function(data) {
            console.log('fetch done');
            // console.log(data);
            if (data) {
                randomize(data, animate);
            }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log('An error occurred. Text status ' + textStatus + ', and error ' + errorThrown);
        });
    };
    
    /**
     * [description]
     * @param  {[type]} source [description]
     * @param  {[type]} target [description]
     * @return {[type]}        [description]
     */
    this.init = function(source, target) {
        console.log('init');
        this.target = target;
        var pathArray = location.href.split( '/' );
        console.log(pathArray);
        var protocol = pathArray[0];
        var host = pathArray[2];
        var getpath = protocol + '//' + host + '/js/' + source;
        console.log('getpath is ' + getpath);
        var callback1 = this.fetch(getpath);
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
        }, 1000);
    }
});