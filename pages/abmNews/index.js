import {jQuery as $} from 'jquery';

const losPets = [
  {
    tipo: "perro",
    nombre: "firulais",
    edad: 5,
    amigos: [
      {
        tipo: "conejo",
        nombre: "conejin",
      },
      {
        tipo: "caballo",
        nombre: "caballin",
      },
    ],
  },
  {
    tipo: "gato",
    nombre: "mewsalot",
    edad: 9,
    amigos: [
      {
        tipo: "perro",
        nombre: "firulais",
      },
      {
        tipo: "pescado",
        nombre: "pescadin",
      },
    ],
  },
  {
    tipo: "cerdo",
    nombre: "comelon",
    edad: 2,
    amigos: [
      {
        tipo: "gato",
        nombre: "peluso",
      },
      {
        tipo: "pato",
        nombre: "cuaky",
      },
      {
        tipo: "hormiga",
        nombre: "grande",
      },
    ],
  },
];

let enCualVa = 1;
const cuantosSon = losPets.length;
$("#elBoton2").on("click", function () {
  if (enCualVa > cuantosSon) {
    $("#texto").append(` ya no hay!`);
    $("#elBoton2").addClass("disabled");
  } else {
    $("#texto").append(
      `<p>este es ${losPets[enCualVa - 1].nombre}, es un ${
        losPets[enCualVa - 1].tipo
      }, tiene ${losPets[enCualVa - 1].edad} anios</p>`
    );
    enCualVa++;
  }
});
