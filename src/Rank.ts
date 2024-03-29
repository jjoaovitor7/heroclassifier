const RankTypes = require("./RankTypes");

class Rank {
  public rank: InstanceType<typeof RankTypes>;
  private levelRank: string = "";

  constructor() {
    this.rank = {
      "Ferro": [0, 1000],
      "Bronze": [1001, 2000],
      "Prata": [2001, 5000],
      "Ouro": [5001, 7000],
      "Platina": [7001, 8000],
      "Ascendente": [8001, 9000],
      "Imortal": [9001, 10000],
      "Radiante": [10001, Number.MAX_SAFE_INTEGER]
    };
  }

  checkRange(toCheck: number, start: number, end: number): boolean {
    return toCheck >= start && toCheck <= end;
  }

  setRank(xp: number): void {
    Object.keys(this.rank).forEach((i) => {
      if (this.checkRange(xp, this.rank[i as keyof InstanceType<typeof RankTypes>][0], this.rank[i as keyof InstanceType<typeof RankTypes>][1])) {
        this.levelRank = i;
      }
    });
  }

  getRank(): string {
    return this.levelRank;
  }
}

module.exports = Rank;