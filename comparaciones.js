// siempre que se pueda debemos emplear el trple igual paralas compraciones 
var person= {
    name:'Joseph'
};
var other_person=person;
//Si hacemos el cambio en other person  va  afectar a person ya que segun javascript estos representan el mismo espacio en memoria
other_person.name='Other person';
console.log( person.name);
