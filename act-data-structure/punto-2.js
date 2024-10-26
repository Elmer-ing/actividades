// PUNTO 2

console.log("%c\n\n Segundo punto \n\n", "color: #ffee1f; font-size: 18px;");


//Paso 1
let listTareas = [
    `[✅] Comprar 3kg de yuca`,
    `[✅] Desconjelar el pollo`,
    `[✅] Lavar el tendido`,
    `[✅] Enceder el extractor`,
    `[✅] Acomo el almacen`
];
console.log(`Creacion de la lista de tareas \n\n →`);
console.table(listTareas);

//Paso 2
listTareas.unshift(`[✅] Tender la ropa`,`[✅] Acomodar el alacena`);
console.log(`Se agregan 2 tareas al principio con unshift \n\n →`);
console.table(listTareas);


//Paso 3
listTareas.reverse();
listTareas.shift();
listTareas.reverse();
console.table(`Eliminacion de elemento con shift \n\n →`);
console.table(listTareas);