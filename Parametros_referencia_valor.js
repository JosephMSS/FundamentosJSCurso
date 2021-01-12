function Person(name, last_name, age) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;

}
var maryliz = new Person('Maryliz', 'Montoya', 13);
var joseph = new Person('Joseph', 'Morales', 21);
var sacha = new Person('Sacha', 'Lifszyc', 28);

// Parametro como referencia
function birthday_for_reference(person) {
    person.age += 1;
}
function birthday_for_value(age) {
    age += 1;
}
//Por referencia
console.log(`Por Referencia con: ${maryliz.name}, Edad: ${maryliz.age}`);//la edad el objeto fue cambiada a un año mayor
console.log(maryliz);

birthday_for_reference(maryliz);
console.log(maryliz.age);

console.log(`Por Referencia con: ${maryliz.name}, Edad: ${maryliz.age}`);//la edad el objeto fue cambiada a un año mayor

//Por valor 
console.log(`Por Valor con: ${joseph.name}, Edad: ${joseph.age}`);

birthday_for_value(joseph.age);
console.log(joseph.age);

console.log(`Por Valor con: ${joseph.name}, Edad: ${joseph.age}`);//la edad el objeto no fue cambiada a un año mayor, unicamente la variable en memoria

//Creacion de nuevo objeto con informacion modificada de uno anterior 

function duplicate_person_with_different_birthday(person) {
    return{
        ...person,

        age:person.age+=1
    };
}
console.log(sacha);
console.log(duplicate_person_with_different_birthday(sacha));
console.log(sacha==duplicate_person_with_different_birthday(sacha));