// var listaDeCompras = [];
// listaDeCompras[1] = "lechuga";
// listaDeCompras[3] = "tomates";
// var elementodelarray = listaDeCompras;
//listaDeCompras[1];
// console.log(elementodelarray.length);
// console.log(elementodelarray[3]);
//En este array los metodos push y unshift son para agregar un color al principio y al fin resp.
//para eliminar pop y shift respectivamente
// var colores = ["amarillo", "azul"];
// colores.push("rojo");
// colores.unshift("verde");
// console.log(colores);

//  var pintores = ("picasso", "velazquez", "vanGogh", "dali");
//  var incluyeDali = pintores.includes("dali");
//  console.log(incluyeDali);


// Funcion every siempre da un booleano
var numeros = [10,6,8,9];
var cumpleCondicion = numeros.every((num) => {
    return num > 5;
})
console.log(cumpleCondicion);
