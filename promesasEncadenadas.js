const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function get_chararacter(id, callback) {
    return new Promise((resolve, rejected) => {

        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $.get(url, opts, (data) => {
            resolve(data);
        })
            .fail(() => {
                rejected(id);
            });
    });

}

get_chararacter(1)
    .then(character => {
        console.log(character.name);
        return get_chararacter(2)
    })
    .then(character => {
        console.log(character.name);
        return get_chararacter(3)
    }).then(character => {
        console.log(character.name);
        return get_chararacter(4)
    })
    .catch((id) => {
        console.log('Error');
    });
