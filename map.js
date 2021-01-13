function Person(name, last_name, age) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;

}
var maryliz = new Person('Maryliz', 'Montoya', 13);
var joseph = new Person('Joseph', 'Morales', 21);
var sacha = new Person('Sacha', 'Lifszyc', 28);

var people = [maryliz, joseph, sacha];

//De esta manera se modifican los datos del array original

// const years_to_months = (person) => {
//     person.age *= 12;
//     return person;
// };


// const years_to_months = (person) => {
//     return {
//         ...person,
//         age: person.age * 12
//     };
// };

//si deseamo enviar un objeto con un funcion flecha , entonnse debemos colocar () 
const years_to_months = (person) => ({  
        ...person,
        age: person.age * 12
});

var people_years_to_months = people.map(years_to_months);
console.log(people_years_to_months);
console.log(people);