// const Orange = require('./orange');

class OrangeTree {
  constructor(age, height, oranges = []) {
    this.age = age;
    this.height = height;
    this.oranges = oranges;
  }

  passGrowingSeason() {
    this.age += 1;

    if (this.height <= 25) {
      this.height += 2.5;
    }

    if (this.age >= 6) {
      const random = Math.floor(Math.random() * (300 - 100 + 1) + 100);
      for (let i = 0; i < random; i++) {
        this.oranges.push(new Orange());
      }
    }
  }

  isMature() {
    return this.age >= 6;
  }

  isDead() {
    return this.age > 100;
  }

  hasOranges() {
    return this.oranges.length !== 0;
  }

  pickAnOrange() {
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    return this.oranges.pop();
  }
}

// module.exports = OrangeTree;
