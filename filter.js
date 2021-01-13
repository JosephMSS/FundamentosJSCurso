function Person(name, last_name, age) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;

}
var maryliz = new Person('Maryliz', 'Montoya', 13);
var joseph = new Person('Joseph', 'Morales', 21);
var sacha = new Person('Sacha', 'Lifszyc', 28);

var people = [maryliz, joseph, sacha];

//Maneras de extraer datos de un array
console.log(people[1].name);
console.log(people[1]['name']);

//Filtrar un array

//FILTER()
const ADULT = 18;

// De esta manera si fnciona

// const is_adult=(person)=>{
//     return person.age>=ADULT
// };

// Podemos incluir de manera directa una funcion anonima

// var adult_people=people.filter(function (person) {
//     return person.age>=ADULT
// });

// Otra forma mas minimalista de crear la funcion
const is_adult = ({age}) => age >= ADULT;

var adult_people = people.filter(is_adult);
console.log(adult_people);