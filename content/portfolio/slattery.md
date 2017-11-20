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

I made the argument, in comments on Hayes's blog, that plagiarizing long-dead and already-famous poets is a very different thing that plagiarizing struggling no-name poets who do not have books and awards and faculty appointments of their own. Hayes responded (from, he claimed, a Marxist perspective) that because of digital media we need to stop caring about creative origin. Hayes misses the fact that the Internet has already produced a brilliant technology for tracking creative contributions. He obviously knows nothing about open source software licensing and nothing about the versioning software used by developers. Most of the open source licenses allow reuse but require that the original author be credited. Consider the following passage from [the GNU public license](https://www.gnu.org/licenses/gpl.txt):  

> You may convey verbatim copies of the Program's source code as you
> receive it, in any medium, provided that you conspicuously and
> appropriately publish on each copy an appropriate copyright notice;
> keep intact all notices stating that this License and any
> non-permissive terms added in accord with section 7 apply to the code;
> keep intact all notices of the absence of any warranty; and give all
> recipients a copy of this License along with the Program.

Add to this the fact that versioning software like git and subversion make tracking lines of code very easy. Even if a project is [forked](https://help.github.com/articles/fork-a-repo/), any line you wrote is tagged with your name, and the complete history of that line, including anyone else who altered that line, stays with the codebase. So that you can be praised or blamed for that line's failings at a later date. This isn't a new problem, and programmers solved it decades ago when they first adopted subversion. And who solved this problem? Programmers working on open source code. Programmers working, most of them, for free, contributing features and bug fixes to satisfy their own altruism, creativity, or utilitarian self-interest. Once we place Hayes's argument in the context of the phenomenon of OS licensing, copyleft, and creative commons it becomes clear that even when intellectual labor is digital and free&mdash;maybe especially when it is digital or free&mdash;it still matters who did what. Further, if you're going to call yourself a Marxist, and call for the complete erasure of copyright law (not a retreat to something like the GPL, but a complete erasure) because of digital media, you'd better first secure socialized medicine and basic income for everyone in the world. Because appropriation without citation mostly hurts those who lack any recognition or connections&mdash;any cultural capital&mdash;of their own. It hurts working-class creatives.  

I am serving the [University of South Australia's released award announcement PDF containing Slattery's award-winning plagiarized assemblage](../../static/img/MHA-poems.pdf) from my domain as well, so that no one on the webs can ever surreptitiously get rid of it. If anyone from the University of South Australia is brash enough to come after me with copyright infringement, they'd better have a brilliant story about their sick sense of humor. And Slattery: please do threaten me with copyright infringement. I'd love to hear from you.  

In addition, I am going to animate the lines of Slattery's plagiarized assemblage. To permanently dissolve those garish line breaks, to restore some the original vitality and craftsmanship to the lines of the great and unknown poets who butressed Slattery's claim to national repute. For the record, I am no Seamus Heaney. I am still struggling to publish. I am queer, crip, and working class. I cannot apply for fellowships or residencies because I have a chronic illness and in the United States the only way to get health insurance with a pre-existing condition is to work full time. So I have spent the last 10 years (during which, at some point, Slattery lifted those lines from my poem) working jobs and losing time. I don't share these details to ask for sympathy. I share them to make it clear how the material conditions of real live creatives are affected by our response to copyright violations.

For the record, I'm not in favor of large corporations suing teenagers who bittorrent the latest Taylor Swift release. The real concern, in my mind, is that those who do intellectual labor be materially supported and appropriately credited. And once we take care of that, it matters a lot less that code, eBooks, DVDs, MP3s and other media can be pirated so easily. It shows a dire lack of imagination that our idea of providing material support to creatives involves suing bittorrenting teenagers. Rather, **because** it is possible to bittorrent, we need new models. Better models. More creative models which are appropriately addressed to Internet technologies. But none of those models should ever allow that we stop recognizing (or, you know, housing and feeding) the people who do the work.

Andrew Slattery, this is what you do with found things. You transform them. You produce a brilliant, original composition. Something unmistakable. Something which puts the petty theft of plagiarism to shame. **Aaaaand**, you credit your sources. You aren't afraid to credit your sources because what you've done is so utterly distinct from those works. In addition, you **want** to credit your sources, because you respect the artists you emulate. You respect your interlocutors, and you want them to be recognized.  

Look, it's so easy. See &uarr; how I've done it? It's the easiest thing in the world!  

What's happening on this page?  

1. On button click, a JavaScript query verifies a special SVG element in the page, then initializes a function.
2. This function fetches a TXT file containing the words to Slattery's "Grandmother Going Gone" with line breaks removed.
3. The data from the TXT file is split into an array of lines, each containing a random amount of words between 3 and 10.
4. The special SVG element in the page is expanded to overlay the entire browser viewport.
5. Each line in the array is inserted into the SVG and animated.
6. Lines are animated to move at a random angle from the lower left, and bounce off of any border they encounter. (I modified a prototype by [Mike Heavers](http://mikeheavers.com/tutorials/collisions_proximity_detection_in_snap/) to implement the bounce. Though I'd like to come back to this and make the bounce angles more realistic.)
7. In keeping with the attributes of Slattery's assemblage, the lines and line breaks lack any meaningful relationship to one another.

<button id="startfuckslattery" class="btn btn-ghost">Start the show!</button>

<svg id="fuckslattery" width="800" height="600" style="background:transparent;width:0;height:0;"></svg>

<div id="clickresponse" style="height:0;width:0;"></div>
