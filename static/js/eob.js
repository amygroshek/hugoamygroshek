/**
 * Randomly injects combination of found and original lines.
 */
$(document).ready(function() {
    // console.log('document ready');
    var that = this;
    this.target = $('#eob_target');
    // If the div exists, we start the script.
    if ((that.target).length >= 1) {
        // console.log('we have the target');
        // Add the body class to content area for CSS hooks.
        $('.content-column-content').addClass('style-eob');
        console.log('Blank lines improve readability by setting off sections of code that are logically related.' );
        var counter = 0;
        var max = 35;
        var lineArray = [
            '<blockquote class="commerce">Let there be commerce between us.</blockquote>',
            '<p class="lyric">Dear Amy, A new explanation of benefits (EOB) from UnitedHealthcare is ready for you at myuhc.com showing:</p>',
            '<p class="lyric">Each group of statements <br />(except the default) should <br />end with break,<br /> return,<br /> or <br />throw. <strong><br />Do not fall through.</strong></p>',
            '<p class="zombie" style="">75% of respondents favor zombie apocalypse to the current state of affairs. Favorable feelings about zombie apocalypse were strongly correlated with a total educational loan debt greater than annual parental income. Racial minorities, homosexuals, and those with pre-existing conditions also favored zombie apocalypse by a factor of 2:1.</p>',
            '<span class="lyric">Being a liberal, I told her, is a bit like being <br />a mother. Year after year you emote</span>',
            '<span class="lyric"> after the proles, you analyze their malaise,<br />you adapt the old texts <br />to new juxtapositions: <br />not malnutrition <br />but obesity, not dusty cross-continental<br /> migrations but work for cash<br />in order to stay below',
            '<span class="lyric"> the $17,000 annual income cutoff for Badgercare. Here</span>',
            '<span class="lyric">I stepped off<br />the porch into the dark.</br />Half a mile to the north, ATVs<br />raged in the aspen regen their drivers<br />could not identify. Is it,<br /> I asked <i>Quercus rubrus</i>, is it so?</span>',
            '<p class="lyric">&lt;script src=\"filename.js\"&gt; tags<br />should be placed as<br /><strong>late in the body</strong> <br />as possible.</p>',
            '<p class="lyric">Make comments <br />meaningful. <br />Focus <br />on what is not immediately visible.</p>',
            '<p class="lyric">We\'ll get you the mockups by EOD Tuesday.</p>',
            '<span class="lyric">Two hours in the trail\'s <br />heat and flies, the Gatling cries <br />of the kingfisher, and here<br /> are your trilliums, white and wide, <br />in the ditch beside Wannebo Road.</span>'
        ];
        var citations = '<div class="citations"><h2>Citations</h2><ul><li>Douglas Crockford, "Code Conventions for the JavaScript Programming Language," http://javascript.crockford.com/code.html, Accessed 14 June 2012.</li><li>Ezra Pound, "A Pact," http://www.poemhunter.com/poem/a-pact/, Accessed 15 June 2012.</li><li>United Healthcare, "myuhc Notifications." Email to Amy Groshek, 14 March 2012.</ul></citations>';

        var runSwitch = function() {
            var randomLine = Math.floor((Math.random()*12));
            (that.target).append(lineArray[randomLine]);
            counter++;
        };

        var ifThenRun = function() {
            // console.log('ifThenRun');
            var iterationString = '';
            if (counter > 0 && counter%10 === 0) {
                iterationString = '<p class="iteration">You have reached ' + counter + ' iterations. <a href="http://facebook.com" target="_blank" title="F*&% you!">Select this link</a> to give your data to vendors for free.</p>';
                (that.target).append(iterationString);
            }

            if (counter < max) {runSwitch();}

            if (counter === max) {
                (that.target).append(citations);
                clearInterval(pageTimer);
            }
        };

        var pageTimer = setInterval(ifThenRun, 200);
    }
});
