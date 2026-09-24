/**
 * CATEGORÍAS DE MODELOS
 * -------------------------------------------------------
 * Agrupa los modelos del catálogo (catalogo.js) en secciones
 * para mostrarlos organizados en la web.
 *
 * Un mismo modelo puede repetirse en más de una categoría
 * (por ejemplo, un SUV que también es de "3 Filas").
 *
 * IMPORTANTE: el valor de "modelos" debe usar exactamente el
 * mismo "id" que tiene el modelo en catalogo.js.
 */

const CATEGORIAS = [
  {
    id: "suv",
    titulo: "SUV",
    modelos: [
      "gx3-pro",
      "coolray-lite",
      "new-coolray-2026",
      "cityray",
      "starray",
      "okavango-mild-hybrid",
      "new-okavango"
    ]
  },
  {
    id: "nev",
    titulo: "NEV",
    modelos: [
      "ex5",
      "ex5-em-i",
      "monjaro-em-i"
    ]
  },
  {
    id: "sedan",
    titulo: "Sedán",
    modelos: [
      "emgrand"
    ]
  },
  {
    id: "3filas",
    titulo: "3 Filas",
    modelos: [
      "new-okavango",
      "okavango-mild-hybrid"
    ]
  }
];
