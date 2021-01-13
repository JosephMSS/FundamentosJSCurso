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

Introducción a arrays | *Def*
----|------
[.filter()](filter.js) | Esta propiedad lleva una condicion la cual debe ser una funcion, los resultados los almacenamos en una variable. <span style="color:#fc0339" >Tomar en cuenta que filter nos retorna un nuevo array, este no modifica el original</span>.
[.map()](map.js)| Este metodo recibe una condicion por medio de una funcion, la cual se encarga de modificar los elementos del array original, si deseamos hacer modificaciones sin afectar el original, entonces debemos pasar los datos como valor y no por referencia  y guardarlos en uno nuevo.
[.reduce()](reduce.js)| Se encarga de reducir un array a un valor unico.

Funcionamiento de clases en JavaScript| *Def*
----|---
[Prototipos o "clases"](clasesJavaScript.js) | En JavaScript cuando hablamos de objetos , en realidad hablamos de prototipos y no de clases, a pesar de que en las nuevas versiones del lenguaje ya contamos con clases, al final podemos observar que terminan siendo prototipos pero se declaran de la misma manera que una clase en cualquier otro.
Contexto de funciones: Quién es ```this```? | En el caso de que se quiera agregar un metodo a un objeto, no debemos crear una funcion flecha ya que si se hace de esta manera cuando querramos emplear ```this``` para referirnos a un atributo, no va a referirse al atributo sino que a `window`.
[Herencia prototipal](herenciaPrototipal.js)| Lo que sucede en estos casos es que cuando llamamos a un metodo javaScript verifica si el prototipo tiene el metodo o atributo que llamamos, en caso de que no lo encuentre, verifica en el prototipo del cual hereda y asi sucesivamente hasta encontrar respuesta o finalizar la cadena de herencia(`object`).
[Herencia de clases](clases_herencia.js)| Para crear clases debemos emplear la palabra reservada `class`, ademas de implementar el metodo `contructor` para asignar y crear los atributos, ademas para crear mas metodos no hace falta la palabra `function`.Para la herencia debemo recordar que antes de emplear el `this`, nosotros debemos llamar al metodo `super`, para pasar los atributos necesarios al contructor de la clase padre.
