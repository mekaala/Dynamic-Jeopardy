**NINTENDO JEOPARDY**
In this Nintendo themed board, players must test their knowledge by answering a series of questions from five categories. The value of each question depends on their difficulty. Easier questions have lower point values, while more difficult questions have higher values. Every panel except for the Final Question is multiple choice.

In order to win, players must receive at least 2000 points or more. The game will respond to your rank with an audio message and a background color change!

**MINIMUM VIABLE PRODUCT**

First design your MVP (Minimum Viable Product). Have a plan for completing an MVP before getting too involved with advanced features. Start writing your README file with some basic ideas. Timebox any experimental or optional ideas, features, or technologies. Remember that good time management is key!

**What game should I make?**

I want to develop and design a game that I can enjoy developing in order to be 100% successful. One that allows me the freedom of expressing myself would be ideal. In terms of customization, I will develop a **Jeopardy** game.

**How to play Jeopardy**

Players have to answer questions from different themes. There are five themes, each containing five questions that range from easy to difficult. Easy prompts have low points, and difficult prompts have high points.
Rather than asking players to type in their response, the prompt will now have a Multiple Choice layout.

**What should I develop first?**

Five categories.
Five buttons/questions for each category.
A "Final Question".

**HTML**

My main HTML contains 27 buttons: five in each category *class* with an id of their value. This allows for specific organization of button layout. There is also a final question worth 1000 points.
The modal HTML contains a prompt, a multiple choice section, and an answer. Depending on which choice they make, they will receive points for the question.


**JAVASCRIPT**

For each button, there is a different prompt. We must make conditionals that evaluate if the player has input the correct answer for the chosen question.
The questions are multiple choice:
Upon choosing their answer, the buttons are replaced with the true answer. The original point value button will be disabled to prevent further interaction.
Total interaction with all buttons is disabled when the player proceeds with Submitting the score.
The player receives points when choosing the button with the "correct" class.
Numerical Values must be added together to create a score for the player.


**Evaluation of Game**

The game will keep track of the total amount of points earned. When finishing the game, users will submit their score. The game compares the total number of points earned to three thresholds:
If the total score is less than 2000, then the player will lose.
If the total score is greater than 2000 but less than 7000, the player will win, and be lauded for their efforts.
If the total score is greater than 7000, then the player will achieve the best possible victory.


**User Stories**

https://trello.com/b/fc0ajCZ8

**Wire Frames**

<img src="Wireframes/Web 1920 – 1.png" alt = "Wireframe of main screen">
<img src="Wireframes/Web 1920 – 2.png" alt = "Question wireframe">


**HTML**


[![Netlify Status](https://api.netlify.com/api/v1/badges/bdfcb766-a0b7-4762-9ee9-5fec38fd308f/deploy-status)](https://app.netlify.com/sites/nintendo-jeopardy/deploys)