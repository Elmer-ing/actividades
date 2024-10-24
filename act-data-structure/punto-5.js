// Punto 5

console.log("%c\n\n Quinto punto \n\n", "color: #ffee1f; font-size: 18px;");


let listaContactos = [
    { name: "Ana García", phone: "3102345678" },
    { name: "Carlos Pérez", phone: "3101234567" },
    { name: "Claudia Vargas", phone: "3029876543" },
    { name: "Isabel Cruz", phone: "3126789054" },
    { name: "Juan Torres", phone: "3104567890" },
    { name: "Laura Sánchez", phone: "3124567890" },
    { name: "Luis Fernández", phone: "3108765431" },
    { name: "María López", phone: "3109876542" },
    { name: "Pedro Gómez", phone: "3123456789" },
    { name: "Ricardo Jiménez", phone: "3141234567" }
];


console.log(`Lista 1 \n\n`);
console.table(listaContactos);

// Pruebas array con array

let listaContactos2 = [
    { name: "Sofía Martínez", phone: "3121234598" },
    { name: "Fernando Ruiz", phone: "3023456789" },
    { name: "Andrés Castillo", phone: "3148901234" },
    { name: "Elena Morales", phone: "3145678901" },
    { name: "Diego Ramírez", phone: "3129876504" }
];

console.log(`Lista 2 \n\n`);
console.table(listaContactos2);


/*
    Añadir el tercer elemento de listaContactos2 como primer elemento en listaContactos
*/


listaContactos.unshift(listaContactos2[2]);
console.log(`Add item al principio \n\n`);
console.table(listaContactos);


/*
    Añadir el primer elemernto de listaContactos2 como ultimo elemento en listaContactos
*/

listaContactos.push(listaContactos2[0]);
console.log(`Add item al final \n\n`);
console.table(listaContactos);

/*
    Añadir el segundo, cuarto y quinto elemento de listaContactos despues del cuarto elemento de listaContactos
*/

listaContactos.splice(4,0,listaContactos2[4],listaContactos2[3],listaContactos2[3]);
console.log(`Add 3 items despues del 4to item \n\n`);
console.table(listaContactos);

/*
    Eliminar ultimo elemento de listaContactos
*/

listaContactos.pop();
console.log(`Item final eliminado \n\n`);
console.table(listaContactos);

/*
    Eliminar primer elemento de listaContactos
*/

listaContactos.shift();
console.log(`Primer Item eliminado \n\n`);
console.table(listaContactos);

/*
    Elimar los elemento 
*/

listaContactos.splice(3,3);
console.log(`Elimnar 3 items despues del 3cer item \n\n`);
console.table(listaContactos);

/*
    Nueva lista de los contactos 2,3,4 y 5 de listaContactos
*/

console.log(`Nueva lista \n\n`);
let listaNueva = listaContactos.slice(2,6);
console.table(listaNueva);