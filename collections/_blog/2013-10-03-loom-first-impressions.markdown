---
title: "Loom: First Impressions of a Unity3D Developer"
layout: post
categories: tech
date: 2013-10-03
---

After launching last week, the Loom Engine made quite a splash.  A cross-platform engine, that promises absurdly fast prototyping, live editing of code, and cool language features couldn't do anything BUT make a splash on the indie scene.  

The indie license is also free for the first month, which probably helped with their great success.  You can sign up on their website now.

After fiddling with Loom for this first week in the spare time I have after work, I've encountered a number of interesting things.  I'll post the results of my fiddling separately, but for now I wanted to go over the quirks, strengths, and weaknesses of the engine as I've seen them thus far.

Keep in mind I'm coming from being a primarily Unity3D developer, so all of my opinions are based on that.

<!--more-->
## The Good
__Responsive Team:__ Right now, after launching, the 5-man team at The Engine Co. have been highly responsive and supportive.  Their forums are teeming with questions and bug reports, and they have been strongly communicating with all of their new licensees.  Likewise, their website has a nifty feature that allows you to chat live with any of the team members, assuming they're online of course.  It's almost like having the team in your favorite IM client's buddy list.

This live support lasts only 1 year for the currently free indie license, after which you need to renew at the (presuming it stays the same) $500 price point.  Still, it's a great service, and is free for a whole year.  A definite major plus in Loom's camp.

__Live Reloading:__ This is one of the more interesting features that Loom has going for it - live reloading.  It's explained fairly well in their intro video, but the basic idea is that you can run the app on multiple devices at once, and all of the apps launched thusly from the Loom CLI will automatically update and re-deploy as soon as they detect changes to the project (namely when you save any changes).  This allows for easy fast prototyping across multiple devices and form factors - you can see what your changes are doing in almost real-time on a bunch of different devices.

Of course, this isn't the end-all be-all of live-editing - the app doesn't simply pause where it is, load the new code, and then resume within the app.  It DOES restart the app - which means if the screen you're editing isn't the *first thing* the user sees you'll need to navigate to it on all of the devices you're running on.  A quick work-around to this issue would be to design your app to load any of your scenes immediately on launch, and just set it so that whichever one you're working on happens to be the one that gets loaded first.

__Concise Powerful CLI:__ Normally I'm not much of one to enjoy using any CLI.  I often find their commands archaic and nonsensically named, their options equally mystifying, and the formatting of a command to, in general, make zero fucking sense.  However, the Loom CLI is a real treat to use.  Often I don't find myself typing no more than 3 or even as few as 2 words for a command.  Compiling, building and deploying an app is as simple as navigating to be at the root directory and executing
```
loom run
```
And if you want to run on  multiple devices plugged in?  Not an issue, simply add an option for each extra device you want to compile and run on:
```
loom run --iOS --android --mac
```
Similarly, most of loom's commands use this simple and fairly easy to remember method - simply, instead of having archaic  -v -a -t -whatever, they use real words to describe the command option.  Imagine that!

Also, it appears that the loom CLI allows you to tie directly in (in a read-only fashion of course) to the GIT repository for loom.  By running:
```
loom use latest
```
you download the latest stable version of loom from theengine.co.  Likewise if you want the latest unstable version, you can add --firehose to the command (ok, this one makes less sense to me, but is unique enough to easily remember).  Of course, before updating any of this you need to login.  How do you do that?   Well, you simply run:
```
loom login
```

Wow.  Just...wow.  The fact that I find this all to be an amazing CLI experience tells me something about the CLI programs I've been using...

__Cocos2D:__  Loom provides access, via Loomscript, their custom language, to a familiar API for many mobile developers: Cocos2D.  Cocos2D has been in use for years now, and as a result has a strong community, lots of tutorials, and tons of real-world knowledge backing it.  Likewise, developing in Loom should be a really easy transition for anyone used to the Cocos2D framework.

Of course, coming from a Unity3D background it doesn't help a huge amount, but the fact that there's lots of information on the internet about it does.  Then again, the information out there isn't *exact*, as none of it is regarding Cocos2D in Loomscript - just Objective-C or HTLM5/JS.  In that regard, you can't copy-paste any code from tutorials you find, and some things they use in the tutorial that are unique to that language won't help you out with your learning.

## The Bad
__Undeveloped Community:__ Currently the Loom community is really really really new.  It appears that it's been in Beta for a bit of time, but the closed beta was small enough that there doesn't appear to be a huge amount of "cloud knowledge" regarding Loom - yet.  There is a distinct lack of tutorials, posts, and general information regarding Loom right now.  These things always come with time, but if you're looking to jump ship from Unity3D, which is on the opposite end of the spectrum, this is something to keep in mind.  Maybe you should wait a few months if you don't want to be doing a lot of the heavy lifting in learning a new engine.

__New Language:__  This issue is similar to the one above, which is that Loomscript is a completely new language.  When a new language comes out, it's bound to have all sorts of annoying little bugs and errors, simply because there's no way for it to have been completely and thoroughly tested.  This is mostly a speculative issue, of course, but this is another "maybe wait until they work out the kinks" issue.

__Lacking Deployment Options:__  Currently Loom can only deploy to iOS, Android, Windows and Mac.  Of course, this is an impressive list - except for someone coming from an engine like Unity3D.  There is a distinct lack of ability to deploy to Flash or any major consoles - currently this engine is really only intended for mobile apps.  Then again, this is the engine's main claim, that it's intended as a mobile engine.  Still, the ability to deploy to other platforms will be a nice addition when it arrives.

## The Ugly
__No IDE:__  Right now Loom lacks an IDE.  They recommend using a powerful text-editing tool, such as Sublime 2, and even offer syntax highlighting packages for a few tools that you can use.  A user on the Loom forums even figured out how to bind the basic run and compile commands to a menu in Sublime 2 so you don't have to run from the CLI.  

However, lacking the ease of discovery that Intellisense offers is a major major drawback in my opinion.  Auto-completing code features opened entirely new worlds to me as a programmer - I was able to have access to the entire API at my fingertips while I was coding.  Missing this feature means that the intrepid Loom programmer has to look through the API docs offered.

Another feature of IDEs that will be missed is a built-in debugger.  The Loom CLI does provide a debugging option, however I've always found these paled in comparison to a debugger built in to the IDE.

An IDE is one of the planned features on Loom's 2013 roadmap, so it will be coming.  Like other mentioned issues above this is a "wait and see" concern.  Will the devs release a useful, bug-free IDE, and how soon will it arrive?  Will it be both powerful and streamlined?  Or will it be an Eclipse Plug-In?  Only time will tell.

__Buggy:__  If you had visited the forums upon release, you wouldn't have seen the "Troubleshooting & Issues" subforum.  It didn't exist.  However, so many errors and issues were being reported in the first week they decided to make a subforum for it.  And while they've been really responsive to all bugs reported, and fast to fix a few of the critical ones, the deluge has them, if not swamped, then at least busy.  They're going to be busy for a while.  

In my first attempt at simply using the Live Reloading feature on *their own* tilemap example project, I encountered and reported 2 bugs.  Keep in mind this is one of the examples they provide to showcase their engine.  Once again, given time this concern will disappear, or at least become less of a concern.  However, right now, if you try and do something with the Loom engine, you're likely to encounter a bug.  Of course you should report any bugs you DO find, but if you're considering picking up a hassle-free engine which does exactly what it says it does, well, you should hold off on taking the plunge.

## Conclusions
Loom, right now, isn't the strongest pick of engine for doing full-time development of a game.  However, it has the potential to be extremely powerful.  All it needs is a core dedicated group of users and developers to forge the path ahead.  It won't be easy or painless for them, but they'll be rewarded by having the first Loom Engine games available for consumption, and will have a step up on competitors when Loom finally does reach that critical mass of better usability and stability.  

If you're looking for an engine for your company to switch to on a really tight development timeline, Loom isn't for you.  However, if you have a lot of time to work on your game, or if you have a lot of free time on your hands and want to learn something new, working in Loom will be a great experience and a wonderful tool to add to your development toolbox.  Because when it's ready, Loom is going to be a very powerful addition to the market.