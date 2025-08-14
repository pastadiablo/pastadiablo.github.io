---
title: Cult Horror Jam Submission and Retrospective
layout: post
categories: design devlog gamejam
date: 2024-06-17 22:30:00
image_src: /assets/secret-cult-horror-jam/BaseCultist-Ritual.gif
image_alt: An animated pixel-art cultist with a dancing animation.
image_title: Pick me, cult-leader-senpai!
---

PHEW! I did it! This is the first game jam I've done since, well, I think college. My final build didn't have everything I wanted, had a few bugs, and there are some *definite* conveyance issues, but I am still super proud of what I accomplished in the 9 days of this jam. You can find it on itch.io here:

[The Summoning](https://pastadiablo.itch.io/the-summoning)

I also had a friend join this jam along with me, working separately on his own project. It's awesome, and you should check it out here:

[Ritual: Blood Summon](https://imstealth.itch.io/ritual)

I think he's gonna take best-in-show. It's easily the scariest of the submitted games that I've played.

<!--more-->

### Changes
So, let's talk about everything that's changed, since the last post, huh? (Warning, it's a lot. I meant to do a post in between this and the last, but time got away from me and I needed to focus on jammin' rather than postin').

#### Emotion Cards
In the end I only had three cards, one to convert a single cultist to each basic emotion. I chose to go for more levels and entities rather than more cards. I think I could have dropped the He Who Hungers entity type, which only appears in the final level, and spent the time drawing and animating that (about 2-3 hours) putting in the tech needed for 2 or 3 more card types. Ah, well, that is the power of hindsight.

#### User Interface
The UI got a complete overhaul. I added a special CardFanoutContainer (I may post this to the Godot Asset Library at some point, so I can use it in future jams). I created a draw pile and a discard pile (they never ended up being implemented, but they look cool). I added the Offering Requirements in the top right, so the player knew what they needed to do for any given level. And then I added a dialogue box that can serve as both a tutorial / information box, and also a way for the Entity to taunt and talk to the player. There is also a slider box that informs the player of the current Turn, that the Entity is acting, and/or that the player has Won or Lost.

#### Entities
I created two visual types of entities, although each of the 5 levels in game is a distinct "Entity" as I have it in my code. The Entity is defined not only by its visual type, but also by how it speaks to you, the player, as you attempt to summon it. Each one has a greeting, things it says randomly during the gameplay, something it says after your binding begins to take hold, something it says once the binding has fullen taken hold and it is under your control, and lastly, something it says when/if it defeats you by killing all your cultists. They also have different offering requirements.

The animations on these guys were simple, but fun to do. You can see my most common entity visual type in the animated gif associated with this post! That is the visual for the Watcher, Seer, Eye of the Past, and Lidded One entity types.

#### Soul Offerings
As I described in my last post, I modified cards to work on an individual Cultist basis, rather than an entire crowd. Changing the emotion of one cultist consumes a soul. Then sacrificing an emotional cultist creates an Offering of the correct emotion type. But the player has to be careful and deliberate! The Offering can be consumed just like any other soul when playing a card. The game prefers non-Offering souls over Offering souls whenever it can.


#### Music & Sound
On the final day I scrambled to add Music and Sound effects to the game. This ended up actually being pretty straightforward, and I grabbed a few free to use sounds from [zapsplat.com] for this purporse. Music, of course, came from the OG of free music, [Kevin MacLeod](incompetech.com).

#### The Rest of the Fucking Owl
I had to set up a system so I could slam out levels quickly (this came in handy as I created the set of all 5 levels within the last hour before the game was submitted), get Victory & Defeat working, create a menu and Credits, and just in general finish the rest of the game!


### Retrospective
#### Perspective, or Lack Thereof
Thursday was a bad day for me. My last post here went up Wednesday. There's a reason for that. I spent 8+ hours on stupid math that was completely unimportant to the game on Thursday, and by the time it was Friday I felt the time pressure enough that a mid-jam blog post no longer made sense.

You see, I'd downloaded a perspective shader that I used to make the cards react and tilt as you dragged them around (probably also a waste of time as that was one of the first things I did on like, Day 1, but I may be able to use that in other games so - meh). Then when I started drawing out the Summoning Circles, I felt like to be consistent it would be better if I could draw them as circles purely from a top-down perspective in Aseprite, and then translate them into a circle on the ground in the game using code. To do this, I used the shader. Easy, right?

Well, for that texture, yeah. However, arranging the cultists correctly around it? Not so much. 

They needed to be aligned with it using a similar formula to the texture, but the texture was being modified by a shader, not by base godot code, and it was doing a couple of other things too. I needed to calculate the Cultists original position on the circle, rotate it back around the X axis by 60 degrees, and then perspective project it to a new point in 2D space based on its current 3D position. Oh yeah, and then Scale it so that it actually looked like it was further back.

At least, that's what I convinced myself I needed to do. At that point though, as a friend pointed out, it would be easier to just build the game in 3D and use billboards. But I got stuck. I wanted it to work so BADLY. And I just couldn't get it. No matter how much I massaged the starting position Z value, the Perspective Projection, the matrix math, the trigonometry, I just couldn't get it to line those stupid cultists up along that stupid circle edge. 

You know what though? Even if I DID get it to work, I'm pretty sure it would have looked like ass.

I ended up going to sleep defeated, resigned, and ready to basically try anything else in the morning.

So what did I do instead? Simple. I applied the isometric approach. I scaled the Y value of the textures by 0.5 and then basically did the same for the positions of the Cultists on the circle. All-in-all, it took me MAYBE 20 minutes to do.

I learned a lot about myself from that mistake. And how to not make it again in future jams. Time is a luxury, even if it feels like it is abundant. That was on Thursday, with the Jam submission being on Sunday at 8. I had time, I thought. If only I'd known...

#### The Final Day -or- My Most Productive Day -or- Crunch Sucks
This was the build the night before the final day:

[Penultimate Build](https://www.pastadiablo.com/assets/secret-cult-horror-jam/dev3/)

It was close, but not quite complete. I needed to add Music & Sound. I needed to add Victory and Defeat checks. I needed to actually create Entities in the code (they did not yet exist), animate them, have them act, and have them talk to you. And I needed to create levels with different layouts, cultist counts, and behaviors. I woke up at 8am that day, and worked pretty much straight through until submission time at 8pm (I did take a break to make banana pancakes with my wife for breakfast, around noon. Yum.). 

I also ordered Pizza Hut for dinner, hoping it held up to my childhood memories. It did not. I couldn't finish the third slice. But we all make bad decisions when we're sleep deprived and crunching, amirite?

The thing I regret most about this day is creating the He Who Hungers sprite. Don't get me wrong, it's cool and creepy, and perfect for the game. But the time lost spent on that could have been easily spent on making different cards and card types to make the game more strategic and fun, rather than just having a slightly different (ok, very different, but still) enemy on the final level. 

With that time I probably could have implemented a deck-drawing and discarding/shuffling feature, to help with balance and make sure that within a certain number of draws you're always guaranteed some of the cards. As it is you get totally random cards, which means you can have REALLY bad draws multiple hands in a row, to the point that your run is ruined. It's baaaaad. 

A working draw/discard mechanic would have been much better for the game. And I'd built card nodes so that animating it *decently* would have been super simple. They all have a "target position" and drift back towards it when no longer being dragged. Animate a flip (because the draw pile cards ARE real cards, just flipped over), reparent to the CardFanoutContainer, tell the container to refresh, and boom, its target position is updated and it slides on into position. 

A deck/discard pile with shuffling and basic animations probably could have been added in about 1 to 2 hours, tops. And that is my non-optimistic estimate.

In the end, the build I submitted had a couple of bugs that I was allowed to fix the next day, but was pretty much complete (though beating level 4 was actually mathematically impossible):

[Submission Build](https://www.pastadiablo.com/assets/secret-cult-horror-jam/dev4/)

### Conclusions
My takeaways on things to improve on so far are standard stuff that I know, intellectually, but think I need to learn viscerally, via practice. I'm hopeful I will improve on each of these points in future jams:
* Try to get to a fun minimal prototype FAST. Like, first day, if you can, first few hours depending on jam time. Even if it is not fun, it is probably better to follow through and make juice / light gameplay tweaks to get it more fun later rather than doing a big design pivot.
* Try to avoid high concept initial ideas. My original idea, of a crowd of people's emotions being manipulated by a leader with cards was, well, convoluted. There isn't clear "fun" in it. Ideallly start with an existing basic game design and put a twist on it, or do a bit more thinking before diving into code. Getting the initial idea right to avoid a pivot is crucial, but you can't waste too much time on it either. A tight balance to achieve
* Do NOT get stuck on complicated visual implementation pieces unless that is the entire point of your game. Like, if the game uses complex matrix math to create unique visual shaders because the purpose of the game is to look pretty and not much else, go for it. But if you want actual mechanics and code and objects and systems interacting, keep the visuals *basic*
* When up against the wall with choices, prefer things that increase gameplay diversity/strategy over things that add to the game via more *content*. This is the OPPOSITE of how you may approach a real game release, in which lots of content may trump new systems and designs if you're already fun. In a jam, though, the only people judging your game are other devs. They're exhausted, having just built their own game over the course of the jam, and they will likely have a somewhat short attention span. They probably will not play through your long and complicated game before rating it. So make it fun, fast, and keep it SHORT (or at least make sure they get the gist in a short time).
* Don't order Pizza Hut again. Ever. Just don't.

Of course, those are my learnings and self-critiques. For my strengths and moments of pride, I've got a nice list for that, which I'm happy with:
* Code
 * I'm so pleased that my cobbled-together "level design" system of entities and summoning circles worked well enough for me to slam 5 levels out in less than an hour before submitting.
 * The CardFanoutContainer in particular is a great re-usable component that I'm looking forward to making an extension of and using in future jams (assuming I do more card games, which is safe to assume cause I like building them).
 * I was actually very happy with how my TurnManager handles the different phases of a Turn, and how easy it was near the end to add more phases as I needed them, and transition between the old phases and new phases. It was one of the last pieces of large code I added to the game, and it turned out great!
* Art
 * I'm not an artist, but I think the Cultists and their Souls are some of the best pixel-art animations I've made. They're simple, easy to read, and super-cute. I've gotten lots of comments about how cute they are, and also how fun it is to kill them. That's all on the art. Also, the entities were good fun, but I was on a tighter timeline then, so I didn't enjoy drawing them as much.
 * The Cursors were fun to make. I basically took a picture of my hand in different positions, sized it down to pixel size, cleaned it up a bit, and then impoted it into Aseprite with my limited color palette. It translated each pixel to the closest color in my palette. This was a super-fast and great way to make some creepy looking hand cursors.
 * The writing of the different Entities in each level was a lot of fun. I slammed them out fast, but I think I kept them pretty consistent and on-theme, while still remaining creepy and alien.

 In spite of my misses and critiques, I'm very happy with how it turned out, and I'm proud to call this game my own. Be sure to check it out (if you haven't already) and let me know what you think on its itch.io page! I've had lots of thoughts about it myself, and while I'm not sure if I'll ever revisit and update this particular game, I learned so much doing it, and am so grateful I had this opportunity to participate in this jam.

