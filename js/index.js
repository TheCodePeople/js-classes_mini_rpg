import { Game } from "./Game.js";
import { BaseCharacter } from "./BaseCharacter.js";
import { Monster } from "./Monster.js";

const startButton = document.querySelector(".start-button");
const playerElement = document.querySelector(".sprite-container#player");
const orcElement = document.querySelector(".sprite-container#orc");

const player = new BaseCharacter({
  name: "Warrior",
  health: 1000,
  element: playerElement,
  type: "player",
});

const orc = new Monster({
  name: "Orc The Destroyer",
  health: 1000,
  element: orcElement,
  attackDamage: 100,
  attackMultiplier: 4,
  type: "monster",
  isFlipped: true,
});

const game = new Game({
  player: player,
  playerElement: playerElement,
  monster: orc,
  monsterElement: orcElement,
});

startButton.addEventListener("click", () => {
  startButton.classList.add("hidden");

  game.start();
});
