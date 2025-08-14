---
title: Neural Nets As a Bridge
layout: post
---

- programmers -> semantic space definers
- do so using Types / Tables / Hierarchy - strict semantic definitions
- strict semantic definitions have drawbacks
- this is why JS is so ubiquitous, and dangerous. it's like English
- UI/UX is how we translate human intent / desire into strict semantic definitions
- Many of the difficulties we face come from the inefficiency of this translation
- AI / Neural Nets offer an opportunity to bridge this
- Being able to customize new DTOs to send / read changes the game.
- Consider the Status Icon
- Let's say a user is giving an "update" on a situation. Usually this is done with a form to provide guidance. Status is Complete, Incomplete, or In Progress. Stuff like that.
- We define this concept, Status, with strict semantic definition, and also its different states. We can then load a particular image from each state.
- Let's put a wrench in it though. What if the user is providing an update over voice or text only? How can we figure out the status? We could try and pick out the words, or create a phone-tree call-response. OR we could use a Neural Net to extract a strict semantic meaning from what the user said, and then send that as a DTO.
- Example (user says or types) "Project: Network App. Dan has finished connecting to the API, but the delete functionality is currently broken. Scheduling a meeting to figure out how to fix this issue." The LLM can interpret this with a prompt to extract the semantic meaning and return a JSON for the status update: { update: {  status: "Blocked", reason: "Delete functionality broken", pathToUnblock: "Meeting", rawUpdate: "*users raw update here*" }. Then we can use this DTO to properly display a "blocked" image where applicable, among other things.

- the flip of this, of course, is to use AI to generate the images. In this way, we can have ANY status-oriented text in the "status" field, and the icon will generate. This means we can make updates to our API without breaking our local builds. And if the random seed for the image gen is the same across all apps / devices, it should generate the same image for everyone.
