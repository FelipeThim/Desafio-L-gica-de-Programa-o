let Heroi = "Felipe"
let XPHeroi = 9500
let nivel = ""

if (XPHeroi < 1001) {
  nivel = "Ferro";
} else if (XPHeroi < 2001) {
  nivel = "Bronze";
} else if (XPHeroi < 5001) {
  nivel = "Prata";
} else if (XPHeroi < 7001) {
  nivel = "Ouro";
} else if (XPHeroi < 8001) {
  nivel = "Platina";
} else if (XPHeroi < 9001) {
  nivel = "Ascendente";
} else if (XPHeroi < 10001) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

console.log("O herói de nome " + Heroi + " está no nível de " + nivel )
