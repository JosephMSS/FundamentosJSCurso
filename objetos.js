//Esta es una manera de forma un objeto
function Person(name, last_name, age) {
    this.name=name;
    this.last_name=last_name;
    this.age=age;
    
}
var maryliz=new Person('Maryliz','Montoya',13);
var joseph=new Person('Joseph','Morales',21);
var sacha=new Person('Sacha','Lifszyc' ,28);

function print_person(person) {
    console.log(person.name);
}

print_person(maryliz); 
//Esta e una manera de acceder a los atributos de un objeto
function print_person_deconstruct_object({ name }) {
    console.log(name);
}
print_person_deconstruct_object(joseph); 
//Destructuracion de  un objeto
function print_person_recive_object(person) {
    var {name, age}=person;
    
    console.log(`${name},${age}`);
}

print_person_recive_object(sacha)