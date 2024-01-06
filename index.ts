const Hero = require("./Hero");
const Rank = require("./Rank");

let TheRank: InstanceType<typeof Rank>;

(async () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const name = await new Promise(resolve => {
    readline.question("Favor, inserir o nome do Aventureiro:\n", resolve);
  });

  TheRank = new Rank(name);
  TheRank.setRandomXP();
  readline.close();

  TheRank.setRank(TheRank.getXP());

  // ANSI Escape Codes
  console.log(`O Herói de nome\x1b[1;32m **${TheRank.getName()}**\x1b[1;37m está no nível de \x1b[1;32m**${TheRank.getRank()}**\x1b[1;37m`);
})();
