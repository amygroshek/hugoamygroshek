---
author:
  display_name: Amy G
  email: amygroshek@gmail.com
  first_name: Amy
  last_name: Groshek
  login: admin
categories: []
comments: true
date: 2015-08-19T00:00:00Z
excerpt:
  options: {}
meta:
  _edit_last: "1"
published: true
status: publish
tags:
- DRM
- digital
- rights
- management
- digital rights management
- iBooks
- app
- Kindle
- Adobe Digital Editions
- Project Gutenberg
- epub
- PDF
- txt
- highlight
- note
- annotation
- intellectual property rights
title: Annotations (Notes and Highlights) in DRM eBooks
type: post
url: /2015/08/19/annotations-and-DRM-ereaders/
---

## But My Notes are My Own! 

> scottfillmer: I have just recently started to use iBooks more heavily to take notes and highlights, but I cannot figure out how to export the notes taken? If there is a way to do this, or a workaround, I would appreciate some help... if there isn't, this is a major feature that needs to be added to iBooks, one that Kindle long since made available (even though taking notes on a Kindle is about impossible, at least you can get them). Thanks, Scott

> Mykll0: Right now you cannot do this. 

[These entries](https://discussions.apple.com/thread/2487232?start=0&tstart=0) were written in 2010. And as of August 2015, this problem is still not fixed. Although it is somewhat better in iBooks than it was. You are now allowed to:

- copy short passages from iBooks books and paste them into other applications,
- view a list of all your notes and highlights, which can be copied and pasted,

This is still, in my opinion, not ideal. What you should be able to do is select a menu item and export all of your notes and highlights **out of** iBooks for preservation wherever you like. You should be able to export in a variety of file formats. At the very least, you should be able to export to CSV, TXT, and HTML. 

Kindle is even worse. In order to get your Kindle notes and highlights out of Kindle, you have to go to your own special subdomain of Amazon's Kindle Web site. This process is described on [many other sites](http://techcrunch.com/2009/05/26/kindle-notes-and-highlights-now-accessible-on-the-web/), most of them praising Kindle for generously providing us access to our own intellectual property. I have found that logging in to that site and then using the [Bookcision Chrome extension](http://www.norbauer.com/bookcision/) works well for extracting notes. (If you're still allowing Kindle to crowdsource your notes, stop and think for a minute about whether or not you want to be a reading tutor for strangers for **no wages**. I personally find it kind of creepy to see others' highlights and notes while reading. Until they prove me otherwise, my opinion is that most strangers read like idiots, and I **do not** want idiot stranger thoughts intermingling with my own thoughts as I read.) 

It's interesting to note that these restrictions are there whether the text you are reading is DRM or not. Whether you bought it for $9.99 or you downloaded it from the public domain off of [Project Gutenberg](https://www.gutenberg.org/wiki/Main_Page), you have the same restritions, and the same difficulty getting your own notes and highlights out of the application. And while it makes some sense that users cannot copy the entire text of a DRM book and paste it into another application, it makes **no sense** that I cannot do exactly that for resources in the public domain. 

I am not oppposed to cloud-based solutions. There's nothing wrong with having your data in the cloud. The issue no one talks about, however, is the diffusion of personal data and intellectual work across various and ever-increasing—and all too often proprietary—servers. If some of my work is in Apple's cloud, and some my work is in Amazon's cloud, and some of my work is in my Dropbox account, and some of my work is on Box.com, then how can I possibly keep track of it all efficiently for a project? How can I quickly collect it in the event that I need to change institutions? Some of this data is mined, and some is not. Services change their privacy policies without much prior notice. In short: more control, less diffusion, and more universality of formats is good.

So just use an open source eReader, right? Sure, except that most of them are bloated, don't do quite what I want, or... aren't open source and cost some money. Stanza, which I used to use and loved, is no longer available. [Calibre](http://calibre-ebook.com/) is way more monster than I need for reading, highlighting, and taking notes. And there isn't really much else out there. iBooks really **does** have a great interface. It's just a hassle to get stuff out of it. It (like many OSX apps) has become so tied to its own cloud solution that it offers no other options, and also offers no straight export. 

The truth, however, is that our lives just aren't like that. You cannot spend your entire email, calendar, e-reader, programmer, etc life in a single, proprietary cloud unless your usage is extremely unimaginative and you pay constantly for apps. And why, for the love of god, would you want to do that? 

## But We're Not All Programmers

Right. You're not. As you've so graciously pointed out to me before. Sophisticated developers, it should be noted, are already fully aware of these issues and have made their own strategic decisions about how much privacy and control they're willing to give up, and to whom. It's you, you non-programmers, you black-box-the-computer-is-magic users, to whom I am speaking. Especially those of you who are studying or working in academia and producing highlights, notes, and ideas as you read that you really should be preserving in a central location. So here are a few suggestions for you:

1. Export your notes from Kindle, iBooks, Google eBooks eReader, whatever, as soon as you finish the book. Get into the habit. If you must work in one of these eReaders, at least export your notes as a part of your reading process. 
2. Store **all of your reading notes from all of these applications** in one place (cloud-managed or not), so that when you need your notes for a project, they're there. I have mine in a [git-managed repo]({% post_url 2015-07-18-taking-notes-part-2 %}), but if that's beyond your skill level, thats ok.
3. **Name** all of the exported files according to an easily understood convention. I use the following:
    
    `lastname-firstname-book-or-article-title.md`

3. Be sure that you export to a universally-understood language and file format. HTML and TXT are good candidates. PDF is a good candidate **only** if it's [indexed with OCR and searchable]({% post_url 2015-08-08-OCR-with-tesseract %}).
4. Know when the text you are reading is in the public domain and when it's not. (Also, **don't pay money** for things that are in the public domain. Before you shell out for a *Moby Dick* ebook on Amazon, go and search for it on [Project Gutenberg](https://www.gutenberg.org/wiki/Main_Page).) Do not voluntarily give up rights you have in the public domain. If you can obtain the text from [Project Gutenberg](https://www.gutenberg.org/wiki/Main_Page), as an unrestricted EPUB, TXT, or PDF file, then you should have just as much functionality in your eReader as you have with a TXT editor or PDF reader. 

Your annotations are **your own** intellectual property, and you have a right to control their location and access. Go forth into the eReader ecosystem and prosper. You've got this. 































