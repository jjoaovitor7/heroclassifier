const Rank = require("./Rank");

class Hero extends Rank {
  private name: string;
  private xp: number;

  constructor(name: string, xp: number) {
    super();
    this.name = name;
    this.xp = xp;
  }

  setName(name: string): void {
    this.name = name;
  }

  setXP(xp: number): void {
    this.xp = xp;
  }

  getName(): string {
    return this.name;
  }

  getXP(): number {
    return this.xp;
  }
}

module.exports = Hero;