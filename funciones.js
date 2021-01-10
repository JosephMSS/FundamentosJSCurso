var name = 'Joseph';
var age = 21;
function print_Age() {
    console.log(this.age);
}
print_Age();

//funciones flecha
var sacha = {
    name: 'Sacha',
    last_name: 'Lifszync',
    age: 17,
    is_engineer: true,
    is_chef: false,
    is_singer: false,
    is_dj: true
};

const ADULT = 18;
//SI una funcion unicamente retorna una valor no hay necesidad de incluir el return
const is_adult = ({ age }) => { age >= ADULT };
// const is_adult = (person) => {
//     return person.age >= ADULT;
// }

function print_is_adult(person) {
    if (is_adult(person)) {
        console.log(`${(person.name)} is adult`);
    } else {
        console.log(`${(person.name)} is not an adult`);
    }
}

print_is_adult(sacha)