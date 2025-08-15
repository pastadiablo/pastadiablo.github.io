---
title: Black Cat Game Jam Retrospective
layout: post
categories: design devlog gamejam
date: 2025-02-01
image_src: /assets/count_the_voids/cat.gif
image_alt: A pixel-art animated black cat sitting and looking at you.
image_title: Meow, I do say, sir. Meow.
---

Fresh off of the Cult Horror Game Jam, I was addicted. I wanted to do another. I was feeling good. So I looked around and found the [Black Cat Game Jam](https://itch.io/jam/black-cat-jam-1). Sadly I had to do this one without my friend, as it wasn't his jam (haha).

If you take a peak at the [results](https://itch.io/jam/black-cat-jam-1/results) page, you'll see that my submission, Count the Voids, took first place in this jam, out of 128 other games submitted.  Not too shabby!

<!--more-->

### Ideation and Scope

I had discovered during the Cult Horror Jam a form of lighting in Godot that would allow something completely black to perfectly blend in with darkness and remain largely unlit, except for any color points on it. I felt like that sort of mechanic was perfect for a game about black cats, so I toyed with a number of thoughts on stealth and platforming and the like.

For this jam, I focused HEAVILY on discarding anything I didn't need (the [perspective issue](https://www.pastadiablo.com/blog/cult-horror-jam-submission-and-retrospective/#retrospective) from [The Summoning](https://pastadiablo.itch.io/the-summoning) was still fresh on my mind). This also meant that I decided quickly that a game where you control a character directly had to be out. I wanted a simple (almost single button) control scheme if I could get it. But then, how could matching darkness with black cats work if not with a stealth platformer?

After noodling on it some, I realized that one of my favorite Mario Party mini-games sort of matched the energy of a bevy of black cats running around causing chaos (matching the energy I wanted for the game) and also featured creatures mixed in with visual elements that disguise and hide them (like darkness). It's had a few names through the different iterations of Mario Party, but the one I knew it best as was from Mario Party 2: [Roll Call](https://www.youtube.com/watch?v=-2rO6rK99EE).

I decided I would implement a game like Roll Call but with black cats, and have lighting/darkness elements to make it more interesting.

Cool, great. So the game idea is in place. You count black cats. Awesome.

Now what?

### Planning

After selecting my game idea, I then scoped out the work I thought I would need on Trello. I used Trello back in the day (2011 vibes) for managing projects at SRRN Games, and I figured it would still be pretty good for what I needed. 

And it was! I scoped out everything I had imagined for the game. As I went, each day I would cut scope by yeeting features to a "Stretch Goals" column at the end (the PMs out there might recognize a P1, aka never-gets-done task, when they see it) to account for delays or lack of time due to a feature being too complex.

Focusing on such a tight gameplay concept help me keep scope way down as I went, which was helpful. While the jam was 9 days (nice and roomy but not too long), I had to take it a bit easy this jam. I got sick and had to have a procedure, and so lost a few days. 

I also had gone WAY too hard on the Cult Horror Jam and basically let all my responsibilities fall to the wayside. Not ideal. I promised myself (and my wife) this time I would be more circumspect and focus on not burning ALL my hours working the jam. Except for maybe a little crunch on the last day or two.

Because this was a Jam, I also estimated by the hour. I was semi-accurate, as developers tend to be. Some of my guesses were spot on, some were way off in both directions, though primarily I was too optimistic. My wife always says that programmers are all eternal optimists who think they're pessimists - tot prove it just look at their estimates!

### Asset Selection

As a part of my earliest commit I included assets from the [Szadi SideScroll Worlds tileset](https://itch.io/s/156276/side-scroll-bundle). I picked the SideScroll Worlds (Sets1-7, Village, and Castle) a while ago as a part of a super cheap bundle, and I felt like it would work well for my game.

I also downloaded a free UI SFX bundle. It wasn't a perfect match but it was good enough. For the music I had previously gotten a great bundle deal on an ELVGames music bundle which included a set of songs called "Cute Loops". They sounded perfect, and had a duration that matched my gameplay well (short).

I tried looking for various black cat sprite assets but nothing matched what I wanted. I specifically wanted the cats to be almost entirely black, almost a pure silhouette, so that I could play with lighting and darkness effects. I also wanted them to be from a pure side perspective, to match with the gorgeous tileset I was planning on using.

Eventually I played with Aseprite a bit and decided I could make the cats myself!

### Coding
Coding this game was actually super simple. I discarded anything I didn't need aggressively. I largely built component focused, and each little piece had its own tiny script that barely interconnected with others at all. My largest code sections were on animations, which I focused heavily on. Being well-polished was, I think, a huge boon to the game in the jam. I'm most proud of the code animation work I did for the Scoring Screen at the end of the levels. It's very satisfying.


You can play it both on [itch.io](https://pastadiablo.itch.io/count_the_voids), and also here, on my website! Here's my jam version of the game, [Alpha1](https://pastadiablo.com/assets/count_the_voids/alpha1)