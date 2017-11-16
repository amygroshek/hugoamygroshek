+++
showonlyimage = false
draft = false
image = "img/slattery.png"
date = "2017-11-12"
title = "No Thank You, Andrew Slattery"
weight = 1
+++


In 2013 Andrew Slattery was awarded the The Max Harris National Poetry Award. You can still see [his ~~poem~~ plagiarized assemblage, "Grandmother Going Gone"](http://www.unisa.edu.au/PageFiles/37321/MHA%20poems.pdf "PDF"), along with those of  those of other contest winners from that year, on the University of South Australia web site. Slattery's ~~poem~~ plagiarized assemblage [contains lines from Sylvia Plath and Seamus Heaney](https://www.theguardian.com/commentisfree/2013/sep/23/australian-poetry-plagiarism). And from my poem "Single Life 18," which was published in an online journal [Contrary Magazine](http://contrarymagazine.com/2011/single-life-18/) in 2011.

My lines:

> Every spring, in this city, another woman, not
> beautiful, not advantageously educated or employed,
> crouches on the 16 square feet of concrete
> outside the patio doors of her studio apartment,
> to plant mint and basil in the pot opposite the pot
> of marigolds which the rabbits do not eat.

My lines in "Grandma Going Gone":

> Mint and basil in
> the pot opposite the pot of marigolds which the rabbits do not eat.

An academic in a philosophy department in Canberra named Anthony Hayes (no, not the actor) discovered my poem by Google searching lines of Slattery's ~~poem~~ plagiarized assemblage. [And blogged about it](https://thesinisterquarter.wordpress.com/2013/10/03/plagiarism-for-all-not-just-boring-poets/). No one bothered to tell me. I found Hayes's blog post in 2014 while doing a random Google search of my name.

I am serving the [University of South Australia's released award announcement PDF containing Slattery's award-winning plagiarized assemblage](../../static/img/MHA-poems.pdf) from my domain as well, so that no one on the webs can ever surreptitiously get rid of it. If anyone from the University of South Australia is brash enough to come after me with copyright infringement, they'd better have a brilliant story about their sick sense of humor. And Slattery, well, heh. Yeah please do threaten me with copyright infringement. I'd love to hear from you.

In addition, I am going to animate the lines of Slattery's plagiarized assemblage. To permanently dissolve those garish line breaks, to restore some the intensity, interest, and agency of the lines of the great and unknown poets who butressed Slattery's claim to national repute. For the record, I am no Seamus Heaney. I am still struggling to publish. I am queer, crip, and working class. I cannot apply for fellowships or residencies because I have a chronic illness and in the United States the only way to get health insurance with a pre-existing condition is to work full time. So I have spent the last 10 years (during which, at some point, Slattery lifted those lines from my poem) working jobs and losing time. Andrew Slattery, this is what you do with found things. You transform them. You produce a brilliant, original composition. Something unmistakable. Something which puts the petty theft of plagiarism to shame. **Aaaaand**, you credit your sources. You aren't afraid to credit your sources because what you've done is so utterly distinct from those works. In addition, you **want** to credit your sources, because you respect the artists you emulate. You respect your interlocutors, and you want them to be recognized.

Look, it's so easy. See &uarr; how I've done it? It's the easiest thing in the world!

What's happening on this page?

1. A timer counts down 2 minutes (during which, presumably, you're reading the diatribe above).
1. A JavaScript query detects a special SVG element in the page, and initializes a special function.
2. This function fetches a TXT file containing the words to Slattery's "Grandmother Going Gone" with line breaks removed.
3. The data from the TXT file is split into an array of lines, each containing a random amount of words between 3 and 10.
4. The special SVG element in the page is expanded to overlay the entire browser viewport.
5. Each line in the array is inserted into the SVG and animated.
6. Lines are animated to move at a random angle from the lower left, and bounce off of any border they encounter. (I modified a prototype by [Mike Heavers](http://mikeheavers.com/tutorials/collisions_proximity_detection_in_snap/) to implement the bounce. Though I'd like to come back to this and make the bounce angles more realistic.)
7. In keeping with the attributes of Slattery's assemblage, the lines and line breaks lack any meaningful relationship to one another.

<button id="startfuckslattery" class="btn btn-ghost">Start the show!</button>

<svg id="fuckslattery" width="800" height="600" style="background:transparent;width:0;height:0;"></svg>

<div id="clickresponse" style="height:0;width:0;"></div>
