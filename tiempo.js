console.log('a');
/*Ejecutamos el log en la funcion para que no se 
ejecute inmediatamente, por lo tanto pasamos la referencia a la funcion
*/
// setTimeout(()=>console.log('b'),2000);
setTimeout(()=>console.log('b'),0);
/*
El tiempo que nosotros mandamos es el tiempo minimo que va a tardar en ejecutar la funcion, 
pero esta se va a la cola de tareas 
*/
console.log('c');