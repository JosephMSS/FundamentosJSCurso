function person(name,  age) {
    this.name=name;
    this.age=age;
    
}
var person1=new person('Joseph',21);
//Esta e una manera de acceder a los atributos de un objeto
function print_person({ name }) {
    console.log(name);
}
print_person(person1); 
//Destructuracion de  un objeto
function print_person2(person) {
    var {name}=person;
    console.log(name);
}
print_person2(person1)