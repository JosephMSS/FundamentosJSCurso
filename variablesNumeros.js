var edad=27;
 console.log(edad+= 75);
 console.log(edad-= 75);
 
 // taratr con decimales en javascript hasy que tener en cuenta que estos no son muy precisos

 var precio_articulo=200.3;
 var total=Math.round(precio_articulo*100*3)/100;
 // toFixed(cantidad);  nos presenta la cnatidad de decimales que deseamos en un numero 
 var total_string=total.toFixed(3);
 var total_number= parseFloat(total_string);
 console.log(total_number);
 console.log(typeof total_number);