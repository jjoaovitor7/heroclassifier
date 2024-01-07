const Hero = require("./src/Hero");

let TheHero: InstanceType<typeof Hero>;

(async () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const name = await new Promise(resolve => {
    readline.question("Favor, inserir o nome do Aventureiro:\n", resolve);
  });

  TheHero = new Hero(name);
  readline.close();

  TheHero.setXP(Math.floor(Math.random() * 29991));
  TheHero.setRank(TheHero.getXP());

  // ANSI Escape Codes
  console.log(`O Herói de nome\x1b[1;32m **${TheHero.getName()}**\x1b[1;37m está no nível de \x1b[1;32m**${TheHero.getRank()}**\x1b[1;37m`);
})();
