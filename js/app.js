//CREANDO ANIMACIÓN

//Se debe marcar mi circulito si es que el usuario se pose en ellos a través de las flechas del teclado.

//puedo usar condicional if 
//"si esta tecla es presonada=pasa esto // de lo contrario=queda donde estaba"

//Variables
/*primer obtengo la tabla*/ 
  var tableAnimation =document.getElementById('tableAnimation')
/*obtengo los td, pero como HTMLCollection*/ 
  var circles =  tableAnimation.getElementsByTagName('td');
/*Transformo a array*/
  var arr = Array.from(circles);

  var i=1;
  var j=1;
  

