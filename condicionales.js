var sacha = {
    name: 'Sacha',
    last_name: 'Lifszync',
    age: 17,
    is_engineer: true,
    is_chef: false,
    is_singer: false,
    is_dj: true
};
function print(message) {
    console.log(message);
}
function print_jobs(person) {
    console.log(`${person.nombre} es :`);
    if (person.is_engineer) {
        print('Es ingeniero')
    }
    if (person.is_chef) {
        print('Es Chef')
    }
    if (person.is_singer) {
        print('Es Cantante')
    }
    if (person.is_dj) {
        print('Es DJ')
    }

}
print_jobs(sacha);

//Funciones que retorne valores
const ADULT = 18;//Declaracionde una constante
function is_adult(person) {
    return person.age >= ADULT
}
function print_is_adult(person) {
    if (is_adult(person)) {
        console.log(`${(person.name)} is adult`);
    } else {
        console.log(`${(person.name)} is not an adult`);
    }
}
print_is_adult(sacha)

//