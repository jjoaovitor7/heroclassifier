class Hero {
  private name: string;
  private xp: number;

  constructor(name: string, xp: number) {
    this.name = name;
    this.xp = xp;
  }

  setName(name: string): void {
    this.name = name;
  }

  setXP(xp: number): void {
    this.xp = xp;
  }

  setRandomXP(): void {
    this.xp = Math.floor(Math.random() * 29991);
  }

  getName(): string {
    return this.name;
  }

  getXP(): number {
    return this.xp;
  }
}

module.exports = Hero;