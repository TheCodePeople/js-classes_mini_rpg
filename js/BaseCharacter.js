export class BaseCharacter {
  constructor({
    name,
    health,
    element,
    type,
    attackDamage = 80,
    isFlipped = false,
  }) {
    this.name = name;
    this.health = health;
    this._maxHealth = health;
    this.attackDamage = attackDamage;
    this._type = type;
    this._element = element;

    this._spriteElement = element.querySelector(".sprite");
    this._healthElement = element.querySelector(".health");

    if (isFlipped) {
      this._spriteElement.classList.add("flipped");
    }

    this._setCharacterName();
  }

  isDead = false;
  isBeingAttacked = false;

  takeDamage(damage) {
    if (this.isDead) return;

    if (damage >= this.health) {
      this.isDead = true;
      this.health = 0;

      this._handleDeathAnimation();
    } else {
      this.isBeingAttacked = true;
      this.health -= damage;

      this._handleHurtAnimation();
    }

    this._updateHealthBar();
  }

  normalAttack(enemy) {
    if (enemy.isDead || enemy.isBeingAttacked || this.isDead) {
      return;
    }

    enemy.takeDamage(this.attackDamage);

    this._handleNormalAttackAnimation();
  }

  getHealthPercentage() {
    return (this.health / this._maxHealth) * 100;
  }

  _setCharacterName() {
    let characterNameElement = this._element.querySelector(".character-name");

    characterNameElement.textContent = this.name;
  }

  _updateHealthBar() {
    this._healthElement.style.width = this.getHealthPercentage() + "%";
  }

  _handleNormalAttackAnimation() {
    this._spriteElement.classList.remove(`${this._type}-idle`);
    this._spriteElement.classList.add(`${this._type}-attack`);

    setTimeout(() => {
      this._spriteElement.classList.remove(`${this._type}-attack`);
      this._spriteElement.classList.add(`${this._type}-idle`);
    }, 1500);
  }

  _handleHurtAnimation() {
    this._spriteElement.classList.remove(`${this._type}-idle`);
    this._spriteElement.classList.add(`${this._type}-hurt`);

    this._spriteElement.addEventListener("animationend", (e) =>
      this._handleAnimationEnd(e),
    );

    setTimeout(() => {
      this.isBeingAttacked = false;
    }, 1500);
  }

  _handleDeathAnimation() {
    this._spriteElement.classList.remove(
      `${this._type}-idle`,
      `${this._type}-hurt`,
    );
    this._spriteElement.classList.add(`${this._type}-dead`);

    setTimeout(() => {
      this._spriteElement.style.animationPlayState = "paused";
    }, 1300);
  }

  _handleAnimationEnd(event) {
    if (event.animationName === `animate-${this._type}-hurt`) {
      this._spriteElement.classList.remove(`${this._type}-hurt`);
      this._spriteElement.classList.add(`${this._type}-idle`);

      this._spriteElement.removeEventListener(
        "animationend",
        this._handleAnimationEnd,
      );
    }
  }
}
