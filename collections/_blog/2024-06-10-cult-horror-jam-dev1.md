---
title: "Cult Horror Jam - Design and Dev1 Build"
layout: post
categories: design devlog gamejam
date: 2024-06-10 10:30:00
date_edited: 2024-06-12
image_src: /assets/secret-cult-horror-jam/BaseCultist.gif
image_alt: An animated pixel-art cultist
image_title: He's just standing there! Staring! Menacingly!
---

Me and a friend of mine both decided recently to join one of the many game jams running on itch.io - the [Secret Cult Horror Jam](https://itch.io/jam/the-secret-cult-horror-jam)! We're each joining as a solo team, mostly as a way to keep our dev muscles in practice as we are both on the job hunt right now.

We've each been itching to make a horror game recently, and now the opportunity has arisen! This is a weeklong jam, so I decided to take my time and pace myself. I'm not going to be spending insane nights pulling this out - I just wanted an opportunity to build something cool.

<!--more-->

To get started, I first listed out things about Cults that are scary. And the things that cult horror is NOT about.  Here's my early list:

### Why are cults scary?
* they do squicky things
* they can secretly be anyone
* religion can be scary
* the things they worship are scary
* they are fanatical

### Types of Cults
* Demonic
* Eldritch
* Personality

### Vibes
* human / animal sacrifice
* self-mutilation
* body horror
* cannibalism
* insanity
* summoned entities
* possession
* ritualistic any of the above
* underground
* cells / prisoners
* ritual implements, candles
* sigils, circles
* robes
* stranger in a small-town 

### What is Cult Horror NOT about?
* monsters (werewolves, vamps, etc)
* ghosts
* aliens (usually, eldritch walks the line)
* gothic
* slasher

From here I started to list out some early ideas.

### Early Ideas
* papers please cult member identification / detective work - alternative: similar mechanics to recruit members to ur own cult of personality.  prey in the weak
* listen to white noise and looking at static to find hidden sounds and images. become a prophet of that which lives in the static. game needs two parts, one where you listen and watch and another where you do.. other stuff. not sure what. maybe the papers please gameplay
* side-scrolling platformer under a lighthouse - lovecraftian ocean / water / new england vibes.  something has frown into the basement from the ocean
* isometric demonic cult slayer action rpg (basically diablo)
* game where a summoned entity is hunting you as a sacrifice in a maze. gotta escape!
* sneaking through a cultists lair to free prisoners. stealth / horror
* game where you remove body parts to gain power / temp boosts. its a shame you only have so many to give…

That said, as I fell asleep and woke up in the morning I focused in on the idea of a cult of personality, and began imagining a game in which a politician manipulated the emotions of a crowd using demagoguery tricks. It would be a POV card game - you'd look out at the crowd and see them with your arms settled on a podium below you. Based on the cards you played, different phrases would appear near to the top of the screen until a full speech was formed.

I toyed with the idea for a bit more, before re-imagining it with a more traditional "Horror Cult" vibe, that is to say, a cult leader performing a summoning ritual. I kept the idea of the Leader manipulating the emotions of a crowd however. Now the goal of the game was to have the crowd of cultists achieve a particular emotional state within a certain amount of turns, while the Entity you seek to summon also manipulates the crowd in an attempt to avoid being summoned (it just wants to snooze).

My simple Game Design Doc looked vaguely like this:

### Cult of Personality
#### Overview
The game places the player in the role of a cult leader delivering a speech to influence a crowd. The player and an opposing Entity are both trying to manipulate the crowd’s emotions to achieve their respective goals. The player must strategically use emotion cards to sway the crowd while countering the Entity’s influence.
#### Core Gameplay Loop
1. **Speech Preparation**
 * The player is dealt a hand of cards representing different speech segments
 * Each card is associated with one of three emotions: Fear, Anger, or Despair
1. **Speech Delivery**
 * The player plays cards to manipulate the crowd's emotional state
 * Each card increases or decreases a specific emotion, and may modify the effectiveness of the next card played for a different emotion
1. **Crowd Reaction**
 * The crowd's state changes based on the emotions influenced by the cards
 * The entity also plays its own influence actions, attempting to counterac the player's efforts

#### Emotions and Crowd States
* Fear: Creates instability and makes the crowd more susceptible to changes.
* Anger: Drives the crowd towards aggressive and proactive behaviors.
* Despair: Leads to a sense of hopelessness, making the crowd less responsive.

#### Mechanics and Effects
1. **Emotion Multipliers:** Cards can increase or decrease the multiplier of the next card of a different emotion.
1. **Emotional State Increase/Decrease:** Each card increases or decreases the corresponding emotion in the crowd.
1. **Entity Actions:** The Entity plays its own influence actions, attempting to counter the player's efforts.

#### Win/Lose Conditions
1. **Win Conditions**
* Target Crowd State: The player must push the crowd into a specific emotional state defined by different entities.
* *Example*: An entity might require "Fear > 5 but < 8, Anger > 1, Despair < 6" to be successfully summoned.
1. **Lose Conditions**
* The player fails to reach the target emotional state within the given number of turns.

#### Strategic Considerations
1. **Card Order:** Players must carefully choose the order in which they play cards to maximize their influence and counter the Entity’s actions.
1. **Emotion Management:** Balancing the increase and decrease of emotions is crucial to achieving the target crowd state.
1. **Entity Counteractions:** The player must anticipate and react to the Entity's moves to maintain their advantage.


I began actual work on Saturday. I spent lots of time learning about viewports and subviewports so that I could have realistic skewing for card animations using a shader, so that cards can look like the lean, flip, and do other things correctly. This tech will be very useful in Curator. I also spent a bit of time figuring out a color palette and creating custom cursors that are of sufficient creepitude, I feel, for the horror theme. On Sunday I focused on getting most of the actual gameplay pieces in place. 

You can see the build as it stands in the link below! Right now there are 12 cards, and you can manipulate the emotions of the crowd of cultists. At this point, there was no victory condition, and no entity fighting back against the crowd! Crowd modifiers also don't clear. Basically, there isn't a game here, just a UI. 

I wasn't far into this build before I realized a change was needed. The tug-of-war mechanic was not going to be in any way tactically satisfying. Even though it's a game jam game, it's supposed to be fun! More on that in my next post!

<a href="/assets/secret-cult-horror-jam/dev1/" target="_blank">Link to the Build</a>
