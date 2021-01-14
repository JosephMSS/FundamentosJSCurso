const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const onPeopleResponse = function (person) {
    console.log(`Hola, soy ${person.name}`);
}

function get_chararacter(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, onPeopleResponse);
}

get_chararacter(1);
get_chararacter(2);
get_chararacter(3);