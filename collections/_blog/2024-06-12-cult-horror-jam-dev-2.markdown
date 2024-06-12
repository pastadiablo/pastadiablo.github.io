---
title: Cult Horror Jam - Re-Design and Dev 2
layout: post
categories: design devlog gamejam
date: 2024-06-12 10:30:00
---

One of the things I realized pretty quickly was that the "tug of war" gameplay I had designed didn't really offer many meaningful choices to the player. There was almost always an optimal set of play which was very easy to figure out. Player skill and strategization did not factor in much, meaning there was not much fun to be had. And seeing as my game is less about "horror" in the jumpscare sense, and more about "horror" in the "well look at this fucked up shit going on" sense, I need to rely more heavily on fun than *vibes*. (That said, *vibes* are still super important, and factored heavily into this re-design!)

<!--more-->

I sort of went back to the drawing board and considered a few things:
1. Costs & Energy Curves: costs and energy curves, which are standard conceits in modern card games and deckbuilders, were completely lacking in my purported deckbuilder. 
1. Strategic Decisions: I needed to look more closely at how to add meaningful choice to the game - as it stood there really wasn't any form of skill and/or creative expression for the player. 
1. Supportive Core Mechanics: I realized that I will need core mechanics that fit the *vibes*. I came to this realization because of [Inscryption](https://store.steampowered.com/app/1092790/Inscryption/)

### Inscryption & Core Mechanics

In some of my downtime I decided to explore other "deck-building horror" games, to try and get a feel for how to blend these two seemingly quite different genres. To do so, I finally got around to playing Inscryption, a game that I'd been meaning to play for at this point years, but never gotten around to.

I'm not going to fully enumerate its design here, but I will discuss the importance of how some of the core mechanics fit with the horror *vibe*. 

#### Inscryption Premise
Even though these aren't precisely core mechanics yet, they are an important component of the *vibes*, so bear with me.

In Inscryption you are held captive in a mysterious cabin in the woods, by a frankly insane antagonist whose face you can never see - only his eyes, and occasionally hands. He is forcing you to play a card game with him, and if you lose, well, he kills you and turns you into a card. This is relevant, as a few of the cards are sentient and talk with you. They want to escape, and they want your help. 

#### Inscryption Costs, Strategic Decisions, and Core Mechanic

In the game you have a deck of creatures. These creatures all have a cost to summon onto the board. They cost blood (other resources are added later, but for now blood is the important thing to analyze). In order to generate blood, you must sacrifice other creatures. Every turn you can draw one card - a single free-to-play squirrel whose sacrifice generates 1 blood, or a card from your deck, for a more powerful choice that may cost more blood than you can afford to generate that turn.

If you don't see it yet, I'll point it out. This basic core mechanic welds costs, decisions, and *vibes* all together. At it's **fundamental level** the game is about sacrificing woodland creatures out in the dark woods. Which is a horror staple. This core mechanic is also how you generate "mana" or "energy" like you do in other card games. And lastly, because you only draw one card per turn, and most cards in your deck cost blood, you have to effectively balance the risk of drawing a card that you can't play that turn, or the risk of drawing a squirrel you CAN play, but still taking enough damage to die.

Now, Inscryption, like most rogue-like deckbuilders, is a game that is a mixture of perfect information and imperfect information. That is to say, as [Slay the Spire](https://store.steampowered.com/app/646570/Slay_the_Spire/) first taught us, the player knowing what the enemy will do on their turn, a form of Perfect Information, adds a huge amount of strategic depth to the game. It allows players to anticipate enemy moves, and allows designers to place in preventative and defensive cards without them feeling like a waste. It is also a game of imperfect information. Beyond the next turn, you don't know precisely what cards are in the entities deck. You don't know what new mechanics you will see on cards. And you don't know what new mechanics the entity will randomly introduce (it does that a LOT, at least early on, keeping you well off-balance).

So, a lot to unpack there. Suffice it to say, I had lots of thinking to do.

### Types of Card Games

I turned to my old friend Chat-GPT to give me a hand with enumerating the different types of card games. I like to use it as a tool to help gather together concepts I'm not familiar with so I can research them myself (much like I often use Wikipedia). I gave examples of a few types of Energy core mechanics that I knew of, and asked it if I had missed any. It gave me back this list (including my examples with further detail):

> **Common Energy Cost Approaches in Deckbuilders**
>
> 1. Developing the Board with Energy Resources (MTG, Inscryption):
>     * Mechanic: Players build up resources (e.g., mana, blood, bones) over time by playing specific cards or through game actions. These resources are then used to play other cards.
>     * Example: Magic: The Gathering uses lands to generate mana, which is used to play cards. Inscryption uses blood (from sacrifices) and bones (gained when creatures die) as resources.
> 
> 1. Fixed Energy per Turn (Slay the Spire):
>     * Mechanic: Players receive a set amount of energy each turn, which resets at the beginning of the next turn. Unused energy does not carry over.
>     * Example: Slay the Spire gives players 3 energy each turn to spend on playing cards.
> 
> 1. Cumulative Energy (Across the Obelisk):
>     * Mechanic: Players gain a set amount of energy each turn, and any leftover energy carries over to the next turn, often with a cap on how much can be stored.
>     * Example: Across the Obelisk allows energy to accumulate, with a cap to prevent excessive hoarding.
> 
> 1. Decay or Draining Energy (Gloomhaven):
>     * Mechanic: Players start with a full energy bar that gradually decreases over time or with each action taken. Energy can be replenished through specific actions or cards.
>     * Example: Gloomhaven uses a stamina system where cards are "lost" and can only be recovered under certain conditions.
> 
> 1. Randomized Energy (Hearthstone):
>     * Mechanic: Each turn, the amount of energy available is randomized within a certain range, adding an element of unpredictability.
>     * Example: Hearthstone sometimes features cards that grant random amounts of mana crystals temporarily.

After looking into it I'm not really sure if Gloomhaven fits the "Decay or Draining Energy" approach as well as Chat-GPT thought, but I was intrigued. It was an idea I hadn't run into, and it seemed like a good fit for a horror-style game. So, bearing this in mind, I re-conceptualized my Secret Cult Horror game into something a bit more...draining.

### Re-Design

The key elements of the re-design were thus:

**Offerings:** Each "level" of the game is summoning a different entity. Each Entity has a different set of "Offerings" that it requires to be summoned and bound effectively. Offerings are achieved when Cultists are Sacrificed by the player with a particular emotion (eg: an Anger Offering, a Fear Offering, and a Despair Offering). The summoning completes successfully once all Offerings are completed. Note that Souls and Offerings are distinct - a Cultist with multiple Souls within them will not complete multiple Offerings upon sacrifice.

**Cultists:** Every summoning starts with a pre-set amount of cultists. More complex summonings will have more cultists available. If the player loses too many cultists, the ritual fails to contain the Entity and it escapes into our world unbound. (Lose Condition)

**Souls:** Playing cards cost Souls. Each card has a distinct Soul cost. Souls are gained by sacrificing cultists. If a Cultist has had their primary emotion modified, then upon Sacrifice the appropriate Sacrificial Essence has one slot fulfilled. Some cards can fill the cultists with more Souls, so that upon sacrifice they grant more Souls. Optional: Based on playtesting, Souls may be a semi-permanent resource that once gained refresh each turn (a form of mana-curve).

**Playing Board:** The board consists of concentric rings of cultists surrounding the summoning altar. Cards played on the board can be played onto individual cultists. Some can affect "adjacent" cultists within the same ring.

**The Entity:** The Entity being Summoned will grow hungry as it gets closer to reality. As its Hunger level rises (inversely correlated to how many Offerings it is from being successfully summoned and bound), it will eat a random amount of Cultists, ranging from 1-3. This consumption will not modify the Offerings as if the Cultist had been sacrificed, and the Soul(s) of the cultist will be consumed.

**Win Conditions - Complete the Ritual:** Successfully fulfill all the required Offerings for the entity being summoned and bind it effectively.

**Lose Conditions - Cultist Depletion:** If the number of cultists drops below a critical threshold (e.g., fewer than 5 cultists remain), the ritual fails, and the entity escapes unbound into the world.


### Moving Forward

We're close enough to the end now that I'm going to need to actually finish the game! But with this re-design in mind, I'm feeling much more confident about the fun that will be achievable. And a lot of the code scaffolding is in place already - I mostly just have to add Cultists and adjust cards to modify them instead of a Crowd. Beyond that, turn-based action, win conditions, entity interference were already on the to-do list! So, my scope didn't rise too much, but I was able to get a much more exciting idea in place. 

After all of that, putting together a little cultist sprite was top priority (not really, but I like to take a break from code and thinking with a bit of pixel art).

<img src="/assets/secret-cult-horror-jam/BaseCultist.gif" class="pixel-art" width=96 />
<img src="/assets/secret-cult-horror-jam/BaseCultist-Chant.gif" width=96 />
<img src="/assets/secret-cult-horror-jam/BaseCultist-Ritual.gif" width=96 />

I was so inspired by these little guys I also decided to make an animation of them dying horrifically as well! 

<img src="/assets/secret-cult-horror-jam/BaseCultist-FullDeath.gif" width=96 />

You can see it in the dev-build linked below!

<a href="/assets/secret-cult-horror-jam/dev2/" target="_blank">Link to the Build</a>