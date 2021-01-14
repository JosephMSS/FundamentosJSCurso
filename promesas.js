const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function get_chararacter(id, callback) {
    return new Promise((resolve, rejected) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, (data)=>{
            resolve(data);
        })
        .fail(() => {
            rejected(id);
        });
    });

}
// CallbackHell
get_chararacter(7).then((character)=>{
    console.log(character.name);
}).catch((id)=>{
    console.log('Error');
});
// get_chararacter(2);
// get_chararacter(3);