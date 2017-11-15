---
author:
  display_name: Amy G
  email: amygroshek@gmail.com
  first_name: Amy
  last_name: Groshek
  login: admin
categories: []
comments: true
date: 2015-07-13T00:00:00Z
excerpt:
  options: {}
meta:
  _edit_last: "1"
published: true
status: draft
tags:
- OSX
- mac
- keyboard
- shortcut
- safari
- settings
- reader
- reader mode
- show reader
title: What, What?! Apple Got Rid of My Favorite Keyboard Shortcut...
type: post
url: /2015/07/13/wait-what-keyboard-shortcuts/
---

## The Shortcuts You Love Will Date You

That's right. If you use computers like a grown-up for more than 15 years, eventually some far-younger-than-you developer will drop a keyboard shortcut from one of your go-to apps. And when you complain about it...

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/amygroshek">@amygroshek</a> You weren’t able to reassign the keyboard shortcut in System Preferences &gt; Keyboard &gt; Shortcuts &gt; App Shortcuts &gt; +?</p>&mdash; Ricky Mondello (@rmondello) <a href="https://twitter.com/rmondello/status/619763804449079296">July 11, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

what you get from the user community is a very helpful *meh*... Back in the day, when I took my first Web design course, hard refresh was the first thing we learned. Hard refresh was suuuuper important in those days, or, it was more transparently important because sites didn't do things like force or manage caching on the (usually helpful) sly. Hard refresh was necessary, not just for the developer but for the **casual user**. Also, it worked. On every. browser. out. there. Subsequently, it's a tick that I have:

1. I'm working on some code.
2. I want to see how it looks.
3. I open various browsers.
4. I hit CMD + SHIFT + R.

Seems simple, right? Yes! No...

Not anymore. Because **CMD + SHIFT + R** is now the Safari shortcut for **Show Reader**. What is **Show Reader**? Basically, the normal browsing experience is replaced by a stripped-down, hyper-accessible version of what the site should look like, if it has implemented responsive technologies. **Only** Safari doesn't check to see how accessible the site is to begin with. Nope. Just throws up Reader. "Here... You want this? 'Cuz I know you're over that old hard refresh thing. That's sooooo 90s." Yes. It is.

I **can** configure my way out of this. Others have [covered](http://blog.remibergsma.com/2012/07/29/overriding-default-keyboard-shortcuts-in-mac-osx-mountain-lion/ "covered")  [this](http://lifehacker.com/5720087/how-to-remap-any-keyboard-shortcut-in-mac-os-x "this") [territory](http://stackoverflow.com/questions/15719135/how-to-disable-keyboard-shortcuts-in-mac-os-x "territory") [before](http://jacobsingh.name/content/disabling-or-changing-mac-keyboard-shortcuts-menu-minimize-all "before"). But why are we interfering with good old power refresh  (CMD + SHIFT + R)? Why are we replacing it with two commands: ALT + CMD + E to clear caches, then CMD + R to reload? Why has Apple suddenly and arbitrarily lengthened my workflow for the convenience of people who read poorly designed Web pages by stripping out all the color and styling? Apple is calling this an accessibility feature. That's great. We need accessibility. But we, the **Users of the Intenet**, should **demand** that the **whole Internet** be accessible. **Without** recourse to madical-thinking application taffy like **Show Reader**. Also, if all browsers implement a reader mode, and users actually **use** them, what's the incentive to make your site fully responsive and accessible?

Enough complaining. Let's get on to reconfiguring. This part of the article is nothing new (only the rant about Show Reader and the obliteration of hard refresh are new, maybe). I navigate to **System Preferences > Keyboard > Shortcuts > App Shortcuts**, and look for my shortcut. But (not funny) it's not there... I've never altered a shortcut before that *wasn't listed when I went to configure it*. I'm sure someone can set me straight here. Is this a new thing for OSX? Have application shortcuts always been configurable-but-not-listed? It seems... *interesting*.

Here's how we make it work:

1. Navigate to **System Preferences > ...**
![Navigate to System Preferences](/img/1keyboard.png "Navigate to System Preferences")
**Keyboard > ...**
![Select Shortcuts](/img/2shortcuts.png "Select Shortcuts")
**Shortcuts > App Shortcuts**. DO NOT be upset by the **lack** of shortcuts listed.
![App Shortcuts](/img/3app.png "App Shortcuts")
2. Select **+**. This opens a little dialog to add your shortcut.
3. Leave this settings dialog open and navigate to the application in question. Browse the menu (or use the **Help > Search** functionality) to find the shortcut you want to change. Note the **title** of the shortcut in the menu.
4. In the shortcut dialog, select the application from the dropdown.
![Shortcut dialog](/img/4dialogapp.png "Shortcut dialog")
5. For **Menu Title** enter the textual title that appeared in the menu beside the shortcut.
![Menu Title](/img/5menutitle.png "Menu Title")
6. Now, here's where we work our magic. In the **Keyboard Shortcut** field, enter an insanely long and obscure combination of characters. Something you will never randomly type. **Especially** not when you're trying to refresh the page.
![Enter yer shortcut, yeah!](/img/6shortcutcombo.png "Enter yer shortcut, yeah!")
7. Grin (alternatively, laugh like a maniac) and select **Add**.
