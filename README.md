# Objetos/prototipos
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
> En caso de querer crear muchas personas podemos crear un objeto el cual se encargue de crear una variable la  cual contenga los atibutos necesarios para crear a persona,<spam style="color:red"> recordar que JS crea prototipos en vez de clases u objetos.</spam>

>  Para poder crear  un objeto lo hacemos de la siguiente manera:
```
var persona={
    name:'Joseph',
    last_name:'Morales',
    age:21
}
```
<p style="color:red">Los objetos son un tipo de dato al igual que los arrays,  la diferencia es que estos se  decalran con { }</p>

Deconstrucción de objetos
[Deconstrucción](objetos.js)  


Formas de delcarar funciones | Ejemplos
-----------------------------|--------
