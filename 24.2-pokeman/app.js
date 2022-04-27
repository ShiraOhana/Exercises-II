function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let MrMime = new Pokemon("Mr. Mime", "Fairy", [
  "Hypnosis",
  "Confusion",
  "Pound",
]);
let Gengar = new Pokemon("Gengar", "Ghost", ["Lick", "Mean Look", "Hex"]);
let Gyarados = new Pokemon("Gyarados", " Water", [
  "Splash",
  "Ice Fang",
  "Waterfall",
]);

Pokemon.prototype.attack = function (attackNumber) {
  console.log(`${this.name} used ${this.attackList[attackNumber]}.`);
};

MrMime.attack(1);
Gengar.attack(2);
Gyarados.attack(0);
