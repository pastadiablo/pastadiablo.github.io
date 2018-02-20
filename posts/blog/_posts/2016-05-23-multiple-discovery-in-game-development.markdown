---
title: Multiple Discovery In Game Development
layout: post
categories: design prototyping
date: 2016-05-23 19:04:13
---

It has happened to almost all of us.  You have that flash of insight.  That great idea.  Your very own 'Jump To Conclusions' Mat.  

And so you start working on it, maybe tell your friends about it.  You are fueled by the fire of your discovery and push through long hours, trying to put together a prototype or a vertical slice, something to PROVE that your idea is great, both to yourself and everyone else.  Then one of your friends casually drops the bomb: "Haven't they already done that?"

Your immediate response is "What, no, impossible, I'm a genius and this was MY idea, all on my own!"  But with a niggling sensation of doubt you head over to your old friend google, and what do you find...but someone else has already had your idea and started making it.  

Next sets in the crushing disappointment and the irrational anger.  You feel like something was stolen from you, something precious, and the worst part is that the half-wit who did it isn't even aware.  At this point, most people drop their idea and try to move on with their lives, feeling a slight tinge of bitterness.

I was one of those people for a long time.  But this time I'm going to push through.


> "And so," he said, "in the end, what must we determine?  Is it the *intellect* of a genius that we revere?  If it were their artistry, the beauty of their mind, would we not laud it regardless of whether we'd seen their product before?
>
> "But we don't.  Given two works of artistic majesty, otherwise weighted equally, we will give greater acclaim to the one who did it *first*.  It doesn't matter what you create.  It matters what you create *before anyone else*.
>
> "So it's not the beauty itself we admire.  It's not the force of intellect.  It's not invention, aesthetics, or capacity itself.  The greatest talent that we think a man can have?"  He plucked one final string.  "Seems to me that it must be nothing more than novelty."
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ~ Hoid, in *The Way of Kings*


### The Past

The past is the past, many people say, but lets talk about it anyway.

[Multiple discovery][1] is a well-known phenomenon in the scientific and mathematical communities, but I've heard similar situations described in game development for years - both my own experiences and those of others that I knew.  I can only really think of two times in specific where I've encountered a game idea that was unique when I first heard about it and remained unique for the years to follow (this is only about games ideas I've heard pitched from the developers mouths, not games I've encountered in the wild).  One had a crazy cool mechanic to work from, and the other had a really cool overall idea that didn't have any particular mechanic tied down to it (great examples of Fission & Fusion games, something to be discussed in a different post).

I remember my very first run-in with my own game being made by someone else.  It was called Impact, and it was, well, it was basically [World of Tanks][2], with maybe a bit more of a sci-fi spin on it.  I could get into more details but that was sort of it - a Tank MMO.  We didn't get much farther than a proof of concept.  I was in college at the time, working with other undergrads in the Student Game Developers organization, and when my team discovered that World of Tanks was going to be releasing in a couple of months, well, it sort of killed all of our motivation.  We ended up barely getting something together by the End of Semester Expo, and even then it wasn't that great.

My second run-in was with a game that I'm still planning on working on eventually, it's sort of my white whale.  I had this idea back in the fall of 2014, and when I first looked it up no one else had done anything like it.  Then, because of life, the universe, and everything, I ended up not working on it until I sat down and started working through the design again.  Because it had been so long, (now the middle of 2015) I decided to look up the general idea once more.  "Museum Tycoon" I typed into *the google*, laughing to myself at the hilarious-but-apt name describing the museum management and simulation game that I had started to lovingly call "Curator".  And there, lo and behold, was [Museum Tycoon][3], a project being worked on by an indie studio that has since, apparently, been put on hiatus.  Which is a shame, because it looked like lots of fun.  

It also looked VERY different from the game I wanted to make.  While Impact and World of Tanks were basically everything alike, Museum Tycoon and Curator were miles different, despite both being about museum management.  Their game was a very cheeky take on the genre, and discussed "exposing the seedy underbelly of the museum industry".  It was very tongue-in-cheek, and the graphcis extremely cartoonish.  It was about pumping as much money out of your guests as possible, much like all of the other wildly successful Tycoon games of the past.

And that was great, to me.  It was great because my vision for Curator was so different.  Not necessarily better, just different.  I wanted it to be ACTUALLY about running a museum: what are the challenges, the difficulties, where do museum curators receive their greatest joys?  It was going to be less about pumping guests for money, and more about having them leave feeling happy & fulfilled with their visit.  Different types of museum-goers are all looking for different things.  Hell, actual curators even have [GUIDES][4] that break people down into different visitor types!  The whole thing is BEGGING to be gameified.

But, enough about Curator.  I could spend an entire post on that game.  I probably will at some point.

### Kaiju

Lastly, my latest encounter with Multiple Discovery inspired me to write this blog post.  Last week I was happy to finally receive my [Vive][5] (ahead of my originally scheduled June delivery date, which I'm over the moon about).  I marvelled at [The Lab][15], fiddeled with the headset straps and comfort and "sweet spot" for hours, played [Tilt Brush][6], [Fantastic Contraption][7], [Job Simulator][8] & [Vanishing Realms][9].  And then, on Friday evening, less than a week after I got it, I went to work.  

Every night since it had arrived I went to bed with some new idea for VR.  I even worked out what control schemes and ideas would work best in Curator (again, in another post).  But then I had my "killer app" idea, my Jump To Conclusions Mat.  What if you built a game where you were a giant monster, a kaiju, destroying a city?  Tanks & helicopters attack, people run screaming, buildings crumble, all to a scale that makes you seem huge.  I even toyed with the idea that if you had four controllers, you could strap two to your feet and STOMP on stuff.  I talked about the idea with my wife, Briana Satchell, with whom I incessantly talk about MANY ideas (and who often reminds me how infrequently I follow through with them to help keep me grounded), and she said "Yes.  That sounds awesome.  Make it."

And so, last weekend, I did.  I built a "working prototype" in [Unreal Engine 4][11], my first foray into that engine ever (I've been a [Unity][12] guy for a long time now).  And other than one particularly difficult day in which a single check-box kept my virtual fists from interacting with destructible meshes properly, it was a complete blast.  It's the first time in a long time that I've been that driven to work on something.

On Friday night I had a destructible mesh you could punch.  It didn't interact well with the controllers, nor did it behave like a building, but you could punch it and it fell apart.

On Saturday I scaled the world up so that objects would fall and fly more slowly, as if they had mass.  Working on the order of 10s of meters instead of just meters, things started to feel better, more complete.  I was still tweaking settings with the destructibles, they still didn't feel right.  Often the buildings would go flying away on the first punch and not stand there and take a beating a bit first, which is key to being satisfying.

On Sunday I really dug into the Destructible Mesh options and found the ability to set them so that they "attach" to each other and the ground.  Then I started to make modular building pieces (corners, floors, and glass walls) and put them together.  By Sunday Evening I had a simple building as tall as the player with glass walls, solid floors, and solid corners.  And breaking it apart felt GLORIOUS.  It was awesome.  My wife in particular enjoyed making dinosaur noises while stomping through it, and I gleefully watched.  This was it.  I'd found something cool, something powerful, a unique experience.

It was the best I'd felt in a long time.

### The Other Shoe

Today, I chatted with some former co-workers who are now over at [Root76][13], a game studio working on Clash Cup Turbo, a super cool game you should absolutely check out.  And then came the dreaded "hasn't someone already done that?".

"No," I thought, "It can't be.  Not this, don't take away this!"

But my never-failing-to-disappoint-friend Google decided to show me what I already, in my heart-of-hearts, knew.  [Maximum Override][14], a game about city destruction as an alien race, has already started porting their game over to VR.

And it looks EXACTLY how I imagined mine would in the end.  The hands, the grabbing, hell, they even took the FEET.  I was enraged, and impotent, and sad, all at once.  Whirlwind of emotions.  And I just have to sit here and TAKE this.

Or so I thought.  My friends, thank god for them, just told me "Do it anyway Dan.  Don't let this get you down."

When I threw a version of that quote from *The Way of Kings* at them, they said "Who cares what the internet thinks."

"Just do yours better."

"All you have to do is be LOUDER than them."

And so on.  A litany of encouragement.

So I watched the video again.  And again.  I searched for more to see what I could find.  I absorbed all the media I could about this OTHER game, this NOT-MINE game.

And I discovered the differences.  I found the distinguishments.  I now know what separates my game from theirs.  I have mechanics planned that they don't.  My city will look different, will BE different, and was different, in my head.  Theirs doesn't have you EATING people like the doughnuts in Job Simulator (that I've seen).  Things here and there, small differences, hidden by my initial horror.

This time, I'm going to keep going.  This time, I'm going to fight for my idea.

[1]: https://en.wikipedia.org/wiki/Multiple_discovery
[2]: http://worldoftanks.com/
[3]: https://www.youtube.com/watch?v=FGHC5g4znEg
[4]: https://jolifanta.wordpress.com/2009/09/19/5-types-of-user-experience-by-john-falk/
[5]: https://www.htcvive.com
[6]: http://www.tiltbrush.com/
[7]: http://fantasticcontraption.com/
[8]: http://jobsimulatorgame.com/
[9]: http://www.vanishingrealms.com/
[11]: https://www.unrealengine.com/
[12]: https://unity3d.com/
[13]: http://root76.io/
[14]: https://www.youtube.com/watch?v=ldQDa-IMo7I
[15]: http://store.steampowered.com/app/450390/