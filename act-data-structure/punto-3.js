// Punto 3

console.log("%c\n\n tercer punto \n\n", "color: #ffee1f; font-size: 18px;");


// Pasos previos

let lista = [
    `1-elemento-lista`,
    `2-elemento-lista`,
    `3-elemento-lista`,
    `4-elemento-lista`,
    `5-elemento-lista`,
    `6-elemento-lista`,
    `7-elemento-lista`,
    `8-elemento-lista`,
    `9-elemento-lista`,
    "10-otro-elemento"
];
console.log(lista);

// Paso 1

lista.splice(2,3);
console.log(`Elimina 3 elementos siguientes al elementos con el indice 2 \n\n → ${lista}`);

// Paso 2

lista.splice(2,0, `3-elemento-lista`,`4-elemento-lista`,`5-elemento-lista`);
console.log(`Se restautan los 3 elementos eliminados en la misma posicion \n\n → ${lista}`);