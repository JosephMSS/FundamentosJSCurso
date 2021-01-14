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
var ids = [1, 2, 3, 4, 5, 6, 7];
// var promises=ids.map(function (id) {
//     return get_chararacter(id); 
// });
var promises = ids.map(id => get_chararacter(id));

// console.log(promises);
//LCon este metodo podemos observar la invormacion de las promesas Promise.all() recibe como parametro un aray de promesas.
Promise.all(promises)
    .then(characters=>console.table(characters))
    .catch(()=>console.log('error'));
