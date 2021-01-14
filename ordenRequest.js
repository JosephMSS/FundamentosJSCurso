const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

// const onPeopleResponse = function (person) {
//     console.log(`Hola, soy ${person.name}`);
// }

function get_chararacter(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, callback).fail( ()=> {
        console.log("error");
    });
}
// CallbackHell
get_chararacter(1, function (person) {
    console.log(`Hola, soy ${person.name}`);
    get_chararacter(17, function (person) {
        console.log(`Hola, soy ${person.name}`);
        get_chararacter(3, function (person) {
            console.log(`Hola, soy ${person.name}`);
        })
    });
});
// get_chararacter(2);
// get_chararacter(3);