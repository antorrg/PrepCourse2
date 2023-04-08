// var deportes = {
//     conBalon: ['footbol', 'vasquetbal', 'rugby',],
//     sinBalon: ['boxeo','surf', 'trekking',],
// };
// var persona = {nombre: 'Lucas', edad: 26, estudios: {esProgramador: true,} }
// var autos = {};
// autos.marcas = ['Ford','Audi', 'Ferrari'];
// delete autos.marcas;
// console.log(autos);

// HAS OWN PROPERTY
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var tienePropiedad = libro.hasOwnProperty('nombre');

// // console.log(tienePropiedad);
// var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);

var mundo = {continentes: 7, paises: 195, oceanos: 5};
for(var prop in mundo){
    console.log("Esta es la propiedad: " + prop);
    console.log("Este es su valor: " + mundo[prop]);
}
