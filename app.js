new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      let max = 10;
      let min = 3;
      let damage = this.calculateDamage(min, max);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player Delt ${damage} to Monster`
      });

      if (this.checkWin()) {
        return;
      }

      max = 12;
      min = 5;
      damage = damage = this.calculateDamage(min, max);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: `Monster Delt ${damage} to Player`
      });

      this.checkWin();
    },
    specialAttack: function() {
      let max = 20;
      let min = 6;
      let damage = this.calculateDamage(min, max);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player Delt ${damage} to Monster`
      });

      if (this.checkWin()) {
        return;
      }
      max = 12;
      min = 5;
      damage = damage = this.calculateDamage(min, max);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: `Monster Delt ${damage} to Player`
      });

      this.checkWin();
    },
    heal: function() {
      const heal = 10;
      if (this.playerHealth <= 90) {
        this.playerHealth += heal;
        this.turns.unshift({
          isPlayer: false,
          text: `Player Healed For ${heal} Hit Points`
        });
      } else {
        this.playerHealth === 100;
      }

      max = 12;
      min = 5;
      damage = damage = this.calculateDamage(min, max);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: `Monster Delt ${damage} to Player`
      });

      this.checkWin();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm("You Win, Start a New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You Lost, Start a New Game?")) {
          this.startGame();
        } else {
          gameIsRunning = false;
        }
      }
    }
  }
});
