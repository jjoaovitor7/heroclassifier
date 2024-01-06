class Hero {
  private name: string;
  private xp: number;

  constructor(name: string, xp: number) {
    this.name = name;
    this.xp = xp;
  }

  setName(name: string) {
    this.name = name;
  }

  setXP(xp: number) {
    this.xp = xp;
  }

  setRandomXP() {
    this.xp = Math.floor(Math.random() * 29991);
  }

  getName() {
    return this.name;
  }

  getXP() {
    return this.xp;
  }
}

module.exports = Hero;