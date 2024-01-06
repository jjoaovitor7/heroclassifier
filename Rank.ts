const Hero = require("./Hero");
const RankTypes = require("./RankTypes");
class Rank extends Hero {
  public rank:  InstanceType<typeof RankTypes>;
  private _rank: string = "";

  constructor(name: string, xp: number) {
    super(name, xp);
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

  setRank(xp: number) {
    Object.keys(this.rank).forEach((i) => {
      if (this.checkRange(xp, this.rank[i as keyof  InstanceType<typeof RankTypes>][0], this.rank[i as keyof InstanceType<typeof RankTypes>][1])) {
        this._rank = i;
      }
    });
  }

  getRank() {
    return this._rank;
  }
}

module.exports = Rank;