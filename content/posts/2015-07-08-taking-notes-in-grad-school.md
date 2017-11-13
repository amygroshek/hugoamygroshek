---
author:
  display_name: Amy G
  email: amygroshek@gmail.com
  first_name: Amy
  last_name: Groshek
  login: admin
categories: []
comments: true
date: 2015-07-08T00:00:00Z
excerpt:
  options: {}
meta:
  _edit_last: "1"
published: true
status: publish
tags:
- graduate
- school
- notes
- notetaking
- ipad
- goodnotes
- git
- box.com
- markdown
- icloud
- zotero
- github
- bitbucket
- evernote
title: Taking Notes in Grad School
type: post
url: /2015/07/08/taking-notes-in-grad-school/
---

## Notes on Notes

I have taken a lot of notes—on print media, bound books, Web sites, and PDFs. I have also taken notes during work meetings and graduate seminars. I have had to think hard about what I *need*, and what I most expressly don't *want*, in notetaking tools. This last year I have been back in school, as a full time graduate student in the humanities. This post is intended to point out some of the issues I found with electronic notetaking within the academic milieu, and to detail my solutions. 

### [GoodNotes](http://www.goodnotesapp.com "GoodNotes") 

For much of last semester I used GoodNotes to write notes by hand. The notes were then exported as **searchable PDFs** to the Box.com account provided by the university I attend. The searchable/indexed aspect of the PDFs was very important. Some of the notetaking apps on the market export non-indexed PDFs or image files. There's no need to waste the money on a notetaking app if the exported content won't be searchable. If your exports aren't in a universal file type, and aren't searchable, you're basically writing paper notes, except that instead of a $3 notepad and a $0.50 pen, you're writing them with a $500 tablet and a $50 stylus. You might look rich but you won't look smart.

When shopping for a notetaking app, I ruled out many of the apps my classmates were using for:

* Being platform specific (I'm talking to you, [Scrivener](https://www.literatureandlatte.com/scrivener.php).)
* Using proprietary file formats (Yeah, pretty much everyone in the industry.)
* Not providing integrations with sync services like Google Drive, Dropbox, and Box (Usually comes along with, "And we provide this nice syncing service for only $9.99 a month.")

[Evernote](https://evernote.com "Evernote") didn't appeal to me because I don't like the idea of having to pay a <a href="https://evernote.com/pricing/">fee</a> just to sync my own thoughts. iCloud integration sketches me out a little, because I don't like the idea of sending my academic work out into ProprietaryAppleServerLand. What if I wanted to use my very own syncing service, or if my department wanted my research to stay on their servers? Evernote also uses its own special file format. I don't care how awesome your export tech is, I need a format I'll be able to open five or six year from now, and one that can be edited without a proprietary application (which is equally likely to become outdated).

GoodNotes doesn't have a desktop appliation at all, but the combination of Box.com integration *and* the searchable PDF export won me over. I could download a PDF into GoodNotes from Box, read and annotate the PDF, and the resulting file with annotations was automatically exported back onto Box.com. The other neato (yes, "neato") thing about GoodNotes was that I could hand-sketch my slides for presentations, export them to Box.com, and have unique, non-PowerPoint slides for a conference. I worked with GoodNotes contentedly until summer.

<iframe src="https://drive.google.com/file/d/0B6uUxH4YD92KcFRxRjVJOHYwNFk/preview" width="640" height="480"></iframe>

### iPad Summer

Planning on using your iPad in the sun? [You](http://www.imore.com/ipad-direct-sunlight) [might](https://discussions.apple.com/thread/3807489) [have](http://ipadpilotnews.com/2013/05/an-ipad-glare-reduction-filter-that-actually-works/) to [rethink](https://www.kickstarter.com/projects/hoodivision/hooditm-magnetic-shades-for-the-ipad-and-ipad-mini) that. Summer, in case you haven't noticed, is the time of year when your iPad becomes inconveniently useless in pretty much any nice outdoor space (unless you love to sit in cool, sunless outdoor spaces). My iPad overheated in the sun. The glare was so strong I couldn't see what I was writing. Eventually I gave up on outdoors electronic notetaking and went back to pen and paper. But I found that I wanted to capture those notes in a searchable, backed-up, shareable format. So I was back where I'd started. This is when I turned to Markdown. 

### Markdown

I kept asking myself why there wasn't a simple solution for the masses, one that didn't lock the user into proprietary GUIs or file formats, or monthly cloud fees to syncing services. One that I could set down on my Macbook Air and take up on my Macbook Pro, or my Eee PC running Ubuntu, or any random Windows computer on campus. Why not <a href="http://whatismarkdown.com">Markdown</a> + <a href="https://en.wikipedia.org/wiki/Git_(software)">git</a>? 

I discovered that there were some beautiful Markdown applications for OSX. [Write](http://writeapp.net/mac/), for example. But what kind of a monster do you have to be, seriously, to charge even a paltry $10 for a code editor (in an albeit beautiful OSX wrapper) that only highlights in one syntax? In the development world, we have words for these sorts of products, the meanings of which usually combine "useless" with some form of expletive. I can write `.md` format files with [Sublime Text](http://www.sublimetext.com), [Atom](https://atom.io), [TextMate](https://macromates.com), even TextEdit. As a general rule, we should not be encouraging people to continue their magical computerbox thinking with pretty, flawlessly-designed, essentially useless wrappers for universal file types. Far better to put up a Web site telling people to **<a href="https://www.libreoffice.org">GET OFF WORD</a>, <a href="http://markdowntutorial.com">LEARN MARKDOWN</a>, AND EAT LEAFY GREENS**. 

I already have Sublime Text for development work, but I preferred Atom (ahem, **free**) for this workflow. I installed a few nice, dark-background themes, and discovered the Markdown Preview plugin. I'm authoring the `.md` files in a folder synced to Box.com. If I weren't, I would be using <a href="https://git-scm.com/documentation">git</a> to commit and push my changes to <a href="https://github.com">Github</a> or <a href="https://bitbucket.org">Bitbucket</a>. 

![Atom with Markdown Preview Plugin]({{ site.url }}/img/atom-preview.png "Atom with Markdown Preview Plugin")

When I write notes by hand, I sketch. I circle words. I draw arrows from one idea to another. I think this is an important aspect of kinesthetic learning. As much as I like plain text, I miss my arrows when I'm typing. So I used Atom's `snippet.cson` file to create a collection of different stars and arrows. (I'm using the cardinal directions for arrow orientation, rather than up/down/left/right.) I also added snippets for Markdown link and image boilerplate.

    '.source.gfm':
      'Circle Star':
        'prefix': 'cstar'
        'body': '&#10026;'
      'Black Star':
        'prefix': 'bstar'
        'body': '&#9733;'
      'White Star':
        'prefix': 'wstar'
        'body': '&#9734;'
      'Markdown Link':
        'prefix': 'link'
        'body': '[an example](http://example.com/ "Title")'
      'Markdown Image':
        'prefix': 'img'
        'body': '![Alttext](/path/to/img.jpg "Optional title")'
      'Black Smiley':
        'prefix': 'smiley'
        'body': '&#9787;'
      'Box with dropshadow':
        'prefix': 'box'
        'body': '&#x2751;'
      'Check':
        'prefix': 'check'
        'body': '&check;'
      'East arrow':
        'prefix': 'earr'
        'body': '&#8594;'
      'Southeast arrow':
        'prefix': 'searr'
        'body': '&#8600;'
      'South arrow':
        'prefix': 'sarr'
        'body': '&#8595;'
      'East West arrow':
        'prefix': 'ewarr'
        'body': '&#8596;'
      'North arrow':
        'prefix': 'narr'
        'body': '&#8593;'
      'Northeast arrow':
        'prefix': 'nearr'
        'body': '&#8599;'
      'space':
        'prefix': 'sp'
        'body': '&nbsp;'

The final bit of awesomeness that comes from doing all this writing in Markdown is that I can use <a href="http://pandoc.org">Pandoc</a> to generate a `.docx`, `.pdf`, or other file format as needed for final editing and paper submission. So while I may have to open Word or another clunky text editor while writing my papers, I *won't* have to do it until the very, very end. 

    // Basic pandoc command converting MD 
    // format into DOCX formatted file
    pandoc test.md -f markdown -t docx -s -o test.docx
    // Command I use, which uses a preformatted DOCX 
    // file as a style reference
    pandoc reynolds*.md -f markdown -t docx -s -o reynolds_ernst-haeckel.docx --reference-docx=/Users/macair/.pandoc/reference.docx

I also hear rumors that <a href="https://bitbucket.org/egh/zotxt">Pandoc and Zotero can work together</a>. I haven't played around with this much, but even if I have to export from Zotero and then run Pandoc with a special flag to utilize the exported bibliography, that's still faster than assembling a bibliography by hand. 

It's easy to get obsessed with Pandoc and decide that you will never have to touch Word again. But I have found that some formatting is just beyond the scope of Pandoc. Poetry manuscripts, for example, are just not within its purview. Yet. If anyone's figured this out, please comment and let me know. 

~

If you like, continue to [my second post]({% post_url 2015-07-18-taking-notes-part-2 %} "previous post") on Markdown notes. 









