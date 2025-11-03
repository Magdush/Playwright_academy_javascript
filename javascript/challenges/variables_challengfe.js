let day = "19";
let month = "09";
let year = "2022";
console.log("Dnes je " + day + "." + month + "." + year + ".");

// ? let se deklaruje pro blok, což znamená, že pokud vytvořím proměnnou let uvnitř bloku, tak existuje jen uvnitř tohoto bloku (nelze // * Vlastnosti proměnných var, let, const
// * Proměnná let
let city; // ? Můžu jen deklarovat bez inicializace
// let city; // ! Proměnnou let nemůžu redeklarovat (vytvořit znovu), vyhodí chybu: Cannot redeclare block-scoped variable 'city'použít mimo). Blok = {}

city = "Ostrava";

{
  let country = "Česko";
  console.log(country); // V pořádku - vypíše se
  console.log(city); // V pořádku - vypíše se
}
// * Proměnná var
// ! Tuto proměnnou nepoužíváme v novém kódu!
var river;
river = "Vltava";
{
  var username = "petrSvetr"; // ! Proměnná var se deklaruje pro modul (většinou modul = soubor)
}
console.log(username);
