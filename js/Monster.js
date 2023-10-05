import { BaseCharacter } from "./BaseCharacter.js";

export class Monster extends BaseCharacter {
  constructor({
    name,
    health,
    element,
    type,
    attackDamage = 100,
    attackMultiplier = 2,
    isFlipped = true,
  }) {
    super({ name, health, element, type, attackDamage, isFlipped });
    this._attackMultiplier = attackMultiplier;
  }

  specialAttack(enemy) {
    if (enemy.isDead || this.isDead || this.isBeingAttacked) {
      return;
    }

    enemy.takeDamage(this.attackDamage * this._attackMultiplier);

    this._handleSpecialAttackAnimation();
  }

  _handleSpecialAttackAnimation() {
    this._spriteElement.classList.remove(`${this._type}-idle`);
    this._spriteElement.classList.add(`${this._type}-special-attack`);

    setTimeout(() => {
      this._spriteElement.classList.remove(`${this._type}-special-attack`);
      this._spriteElement.classList.add(`${this._type}-idle`);
    }, 1500);
  }
}
