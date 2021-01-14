const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function get_character(id, callback) {
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

/*
Cuando se ejecuten todas las promesas, van a ser 
guardadas en la variable de personajes.

awit lo que hace es detener la ejecucion del codigo 
para que haga otras cosas.Para poder usar await tenemos
que señalar la funcion como asincrona async.
 Ademas de colocar la prte asincrona en un try/catch

*/
async function get_characters() {

    var ids = [1, 2, 3, 4, 5, 6, 7];
    var promises = ids.map(id => get_character(id));
    
    try {
        var characters = await Promise.all(promises);
        console.table(characters);
    } catch (id) {
        console.log(`error ${id}`)
    }
}

get_characters();
