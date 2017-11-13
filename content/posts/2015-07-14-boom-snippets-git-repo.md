---
author:
  display_name: Amy G
  email: amygroshek@gmail.com
  first_name: Amy
  last_name: Groshek
  login: admin
categories: []
comments: true
date: 2015-07-14T00:00:00Z
excerpt:
  options: {}
meta:
  _edit_last: "1"
published: true
status: publish
tags:
- boom
- snippets
- command line
- terminal
- git
- repository
title: Put Your Boom Snippets in a Git Repo!
type: post
url: /2015/07/14/boom-snippets-git-repo/
---

## Boom! But... Only on This One Machine...?

Holy flaming angels was I excited when I discovered [boom](http://zachholman.com/boom/ "boom"). I installed it on my Macbook Air. I installed it on my Macbook Pro. I boomed the crap out of boom. But at some point, I tried to use a snippet I'd added while using the other machine. No boom. Fizzle and sigh. Bummer.

It should be a simple thing to put your boom snippets into a git repo, except that the snippets are stored in a JSON file at `~/.boom`, and are not in their own directory. But there is a very, very, stupidly simple solution involving a symlink.

First, create a repo on Github or Bitbucket or wherever.

Next move your `.boom` file to a folder that we are going to init as your git repo:

    cd ~
    mv .boom boomsnippets/.boom


Now create a symlink to point `~/.boom` to `~/boomsnippets/.boom`:


    ln -s ~/boomsnippets/.boom ~/.boom


You can check to make sure the snippets JSON is still being found by running `boom`. You should see your lists and the snippet count in each list.

    As-MacBook-Air:~ macair$ boom
      goto (3)
      jekyll (2)
      pandoc (2)
      shell (1)
      git (1)
      general (1)
      phpunit (1)

Now `cd ~/boomsnippets` and follow the instructions provided by your git host to init the git repo, set the remote url, and push.

On a *second machine* where you want your snippets (I know: **awesome**), install boom if you haven't already.

    gem install boom

Clone your boom repo

    cd ~
    git clone -b master git@yourgitrepo.git boomsnippets

Then set another symlink:

    ln -s ~/boomsnippets/.boom ~/.boom

Add some snippets. Push your changes. Pull them down onto another machine. Laugh like an evil genius. Eat some leafy greens. Life at the keyboard can be hard, but not just now, Darling, not just now.





