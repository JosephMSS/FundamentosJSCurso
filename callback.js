const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const luke_url=`${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts={ crossDomain:true };
/*
.get tiene como parametos, la url a la que se va a dirigir, 
la configuracion(si es un link externo), 
por ultimo la  funcion que se va 
a ejecutar cuando haya una 
respuesta por parte 
del servidor.

arguments: es una variable que  la contienen todas las funciones, 

*/
const onPeopleResponse=function (person) {
    console.log(`Hola soy ${person.name}`);
}
$.get(luke_url, opts, onPeopleResponse);
