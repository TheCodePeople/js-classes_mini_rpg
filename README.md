# JavaScript Classes - Mini RPG
Welcome to the Mini RPG Game project! This is a simple role-playing game implemented in JavaScript that serves as an example of how classes can be used to organize and structure your code. 

This project is designed to help students understand the concept of classes and how they can be used to create reusable objects with properties and methods.


## Projct Overview
Mini RPG is a game where players can click on a monster to attack it until either the player or monster is defeated.

It showcases the use of JavaScript classes to model game entities like characters and monsters. 

The game provides a basic framework that students can expand upon to create more complex clicking games.

## Getting Started
1. Fork this repository. 

2. Clone it to your local machine.
    ```bash
    git clone https://github.com/your-username/js-classes_mini-rpg.git
    ```
3. Navigate to the project directory:
    ```bash
    cd mini-rpg-clicking-game
    ```
4. Open the `index.html` file in your preferred web browser to start the game.

## How to Play
1. Start the game by opening the `index.html` file in your web browser.
You will see two characters on the screen: the player _(Warrior)_ and the monster _(Orc The Destroyer)_.

2. Click on the monster as fast as you can to attack it.
The monster's health will decrease with each click.

3. Be careful! The monster will also attack you, and your health will decrease if you don't click on it in time.

4. Keep clicking on the monster to defeat it.

## Game Structure
The game code is organized using JavaScript classes. Here are the main classes and their responsibilities:

**BaseCharacter**: Represents characters in the game with properties like health and attack power. It includes methods for taking damage and attacking.

**Monster**: Represents the monster that the player must defeat. It has properties like health and attack power and includes a method for attacking the player with a special attack.

**Game**: Manages the game state, including the player, monster. It handles game logic, such as player attacks and monster attacks.

Feel free to explore the code to see how these classes are implemented and how they interact with each other to create the game.