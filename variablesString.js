var name = "Joseph";
var last_name = "Morales";

var uppercase_name = name.toUpperCase();
var lowercase_name = last_name.toLowerCase();
console.log(uppercase_name);
console.log(lowercase_name);

//  charAt extrae los caracteres en la poscision que nosotros definamos
var first_letter = name.charAt(0);
console.log(first_letter);

//Estraer la cantidad de letras
var many_letters = name.length;
console.log(many_letters);

//Concatenar string
var full_name=name+' '+last_name;
console.log(full_name);

//Interpolacion de texto
full_name=`${name} ${last_name}`;
console.log( full_name);

// extraccion de caracteres
var str=name.substr(1,2);
console.log(str);