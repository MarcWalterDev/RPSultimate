# Testing

## User stories

### First time user

- I want to play a game of rock, paper, scissors.
  - user can play a game of rock, paper, scissors.
- I want to learn the rules of the game.
  - a pop up displays instructions and the rules.
- I would like to see an attractive presentation.
  - The design is not attractive.

### Returning user

- I want to play more rock, paper, scissors.
  - Yes, the user can indeed play more Rock, Paper, Scissors.

## Validation and performance

### CSS - w3

![css validation](/assets/images/testing/cssvalid.png) \
passed CSS validator checks

### HTML - w3

![html validation](/assets/images/testing/htmlvalid.png) \
passed HTML validation checks

### JavaScript - JShint

![javascript](/assets/images/testing/jsvalid.png)
passed test with no major issues

### performance - lighthouse

## Bugs and fixes

Due to time constraints, in my rush/panic I didn't document the bugs properly/at all, here is a list of some of the issues (that I can remember) I encountered along the way:

- PlayerChoice returned 'object' instead of actual choice. See below.
- Score didn't reset.
- last round does not show player/computer choices (unfixed).
- buttons still selectable through instructions pop up (unfixed).

Although the functions I wrote essentially worked for the most part I did resort to chatGPT for corrections, these included:

- separtaing the playerChoice and playGame functions.
- using this.id for the selection variable which didn't exist before.
- my original code involved if...else for every game outcome.
  when it separated the playerChoice and playGame functions it also made the win conditions more concise so I used that for readability.

These assists enabled me to progress through the development of the app
