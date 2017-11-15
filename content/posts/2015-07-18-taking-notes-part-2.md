---
author:
  display_name: Amy G
  email: amygroshek@gmail.com
  first_name: Amy
  last_name: Groshek
  login: admin
categories: []
comments: true
date: 2015-07-18T00:00:00Z
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
title: Taking Notes in Grad School, Part 2
type: post
url: /2015/07/18/taking-notes-part-2/
---

## More Notes on Notes

This post follows up on a [previous post]({% post_url 2015-07-08-taking-notes-in-grad-school %} "previous post") in which I outlined my new notetaking workflow using Markdown and Box.com. I've modified the workflow to use Markdown and git instead. And explored various options for linking to and embedding PDFs (grad school == lots of friggin' PDFs).

### StackEdit

First off, a shout-out to [@jfilip](https://twitter.com/jfilip) his for [recommendation](http://amygroshek.com/2015/07/08/taking-notes-in-grad-school/#comment-2126534231) of [StackEdit](https://stackedit.io/). Excellent web-based solution for Markdown notetaking. Two awesomenesses that StackEdit provides that I do not have working on my Atom markdown setup are Math and UML diagram support. Had. seriously. no. idea.

### Away from Box.com for text file versioning

I love the Box.com storage provided by the university. But I'm not too psyched about Box Sync. It's really annoying to manage what gets synced and what doesn't, and the result is often a lot of huge PDFs syncing onto my hard drive (which someone else dropped into a shared folder) when I really need the bandwidth for other things.

Also, and I know this isn't a huge deal, but **Box.com's app has a space in the directory name**! Seriously. Who even does that? Who?! It annoys me to no end to have to add that forward slash every time I `cd` into the directory.: `cd ~/Box\ Sync`. It annoys me because I **cannot change the folder name using the application's preferences**. That's right. The app has a space in its folder name, AND I cannot rename it. I know how, but am **still** reduced to extra typing or the simplistic, patronizing workflow of people who click on folder icons in Finder.

![Box.com sync app with space in file name](/img/box-space-file-name.png "Box.com's sync app with space in file name")

Finally, why would I have Box Sync versioning my text files if I could just have git do it, and control and automate it in my own way?

### Markdown Meets Git

Instead I have set up a directory synced to a private git repo. Housed within `~/notebook` are several directories which correspond to my various use cases. Generally, I'm either journaling, writing, working, or taking reading notes.

![Notebook directory setup](/img/md-notebook-directories.png "Notebook directory setup")

This has the advantage of being easily updated (and not dependent upon the whims of Box Sync) on all of my machines. When I'm about to go to work on a new journal entry, a new work note, whatever, I just update the repo locally using the command line:

    cd ~/notebook
    git pull origin master

A couple of times I've gotten tangled when I forgot to push some changes, and I had to run a merge. But guess what: git merge on some markdown is **way easier** than git merge on a complicated PHP or JavaScript file. Big smiles all around.

If you're not yet a git user, and want to learn how, you can head on over to [GitHub's Excellent Documentation](https://help.github.com "Github Docs") to learn about it. For free private repos, [BitBucket.org](https://bitbucket.org "Bitbucket.org") is a great place to start.

### Versioning for academic papers and manuscripts

The additional awesomeness of [Pandoc](http://pandoc.org/demos.html) and [LibreOffice](https://www.libreoffice.org) now become part of the workflow. I can draft a paper in markdown, save it, then convert it to `.odt` format to continue in LibreOffice.

    pandoc test.md -f markdown -t odt -s -o test.odt --reference-odt=/Users/macair/.pandoc/reference.odt

(I haven't yet gotten into bibliography generation using Zotero and Pandoc. More to come on that.)

The ODT file format cannot be versioned line-by-line with git, but the [FODT XML format](http://blog.riemann.cc/2013/04/23/versioning-of-openoffice-libreoffice-documents-using-git/#comment-951298408 FODT XML format) can. So I can save my documents in this file format and then git **can** do line-by-line versioning on them:

![Save as FODT](/img/fodt.png "Save as FODT")

And when I'm ready to turn in the paper, LibreOffice can export the PDF or DOCX file I need.

### Embedding PDFs and Images in Notes

Many, **many** times, I want to embed the PDF I'm mentioning in my notes, as I refer to it. This was a real hangup for me for a while, and it actually did make me look back over my shoulder at Scrivener and Evernote. What was the natural way to do this using Atom and Markdown Preview?

The solution is disgustingly simple. After all, I don't want these files cluttering up my repo at all. I just want to link to them, and if possible link to them such that they can be seen, casually scrolled and scanned, and retrieved from a source available in my notes when I need them for additional writing or thinking. Because Markdown accepts HTML markup, all I have to do is leverage the **Share** functionality provided by Box.com, Dropbox, or Google Drive.

In Google Drive, `Alt + click` on an asset to open the menu:

![Drive share menu](/img/drive-share1.png)

Copy and paste the provided URL as necessary. I'm using the "Anyone on the Internet" for these assets. But be aware that this does make the asset findable on the Web.

![Drive share URL access](/img/drive-share2.png)

Box.com gives me an *extremely* convenient `<iframe>`.

Select the **Share** link:

![Drive share link](/img/box-share1.png)

Select the **Embed** button:

![Drive share embed modal](/img/box-share2.png)

The resulting embedded files are sweet little reminder of what I'm referencing. It's just enough, and keeps my cloud assets centrally documented in searchable, versioned notes. Here's a screencap of a Box.com `<iframe>` embed as rendered in Atom's Markdown Preview:

![Box iframe](/img/md-iframe.png)
