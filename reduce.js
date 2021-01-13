function Person(name, last_name, age, number_of_books) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.number_of_books = number_of_books;

}
var maryliz = new Person('Maryliz', 'Montoya', 13, 100);
var joseph = new Person('Joseph', 'Morales', 21, 130);
var sacha = new Person('Sacha', 'Lifszyc', 28, 40);

var people = [maryliz, joseph, sacha];

//Manera en la que se podria hacer

// var accumulated=0;
// for (let i = 0; i < people.length; i++) {
//     accumulated += people[i].number_of_books;
// }
// console.log(accumulated);
// En este caso la funcion va a recibir el acumulador y el objeto
const reducer=(accumulated, {number_of_books})=> accumulated+number_of_books;

//Para poder reducir primeto necesitamos una funcion, y como segundo parametro el valor inicial del acumulador 
var accumulated_of_books=people.reduce(reducer,0);
console.log(accumulated_of_books);