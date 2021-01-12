Objetos
-------  
```
var nombre='Sacha';

functions print_name_UpperCase(nombre){
    nombre=nombre.toUpperCase();
    console.log(nombre);
}

print_name_UpperCase(nombre);
```
> En caso de querer crear muchas personas podemos crear un objeto el cual se encargue de crear una variable la  cual contenga los atibutos necesarios para crear a persona,<span style="color:#fcba03"> recordar que JS crea <span style="color:#fc0339">prototipos</span> en vez de clases u objetos.</span>

>  Para poder crear  un objeto lo hacemos de la siguiente manera:
```
var persona={
    name:'Joseph',
    last_name:'Morales',
    age:21
}
```
<p style="color:red">Los objetos son un tipo de dato al igual que los arrays,  la diferencia es que estos se  decalran con { }</p>


Deconstrucción de objetos | *Def:*
-----|------
[Deconstrucción](objetos.js) | Consiste en mandar por parametros un objeto, en donde la funcion se va a encargar de obtener los atributos que nosotros definamos ya sea en el parametro o dentro de la funcion.

Parámetros como referencia o como valor | *Def:*
-----|------
Referencia | Cuando mandamos un objeto directamente a una funciona este lo toma por **referencia**, lo que significa que cambia el objeto directamente.
Valor      | Cuando enviamos el atributo de un objeto este lo toma como valor, y no cambia el valor del objeto de una sola vez.
Crear un objeto con parametro de otro objeto| Para hacer esto debemos retornar una nuevo objeto y en donde la primera propiedad va aser el objeto, despues el atributo con el nuevo valor asignado. **A PESAR DE QUE RETORNE UN OBJETO ESTE NO VA A SER DEL MISMO TIPO EL CUAL MANDAMOS** 
Ejemplo|[Parámetros como referencia o como valor](Parametros_referencia_valor.js)

Comparaciones| *Def*
--------------|----
=== | Empleamos la comparacion triple igual para qu esta se de manera estricta y compare tanto el contenido como el tipo de valor que es, a diferencia del `==`, el cual solo compara el contenido y retorna `true` a pesar de que sean diferentes.
Efectos de igualar una variable a un objeto ya inicializado | Hacer esto  y cambiar los valores  de la nueva variable , <span style="color:#fc0339" >esto va a afectar va  afectar al objeto original</span> ya que segun javascript estos representan el mismo espacio en memoria