export class Game {
  constructor({ player, playerElement, monster, monsterElement }) {
    this.player = player;
    this.playerElement = playerElement;
    this.monster = monster;
    this.monsterElement = monsterElement;
  }

  start() {
    this.monsterElement.addEventListener("click", () => {
      this.player.normalAttack(this.monster);
    });

    this.playerElement.addEventListener("animationiteration", (e) => {
      if (
        e.animationName === "animate-player-idle" &&
        !this.monster.isBeingAttacked
      ) {
        let isSpecialAttackReady = Math.floor(Math.random() * 5) >= 3;

        isSpecialAttackReady
          ? this.monster.specialAttack(this.player)
          : this.monster.normalAttack(this.player);
      }
    });
  }
}
