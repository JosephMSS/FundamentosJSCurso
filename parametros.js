function person(name, age) {
    this.name = name;
    this.age = age;

}
var person1 = new person('Joseph', 21);


//retornar en un nuevo objeto el objeto anterior 
function birthday(person) {
    return {
        ...person,
        age: person.age += 1

    };
}
console.log(birthday(person1));