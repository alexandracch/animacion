//CREANDO ANIMACIÓN

//Se debe marcar mi circulito si es que el usuario se pose en ellos a través de las flechas del teclado.

//puedo usar condicional if 
//"si esta tecla es presonada=pasa esto // de lo contrario=queda donde estaba"

/*var boton = document.getElementById("btn");

function showMenu (){
    var menu = document.getElementById("opcs-menu");
    //Para que se muestre
    if (menu.classList.contains("disabled-menu")){
    menu.classList.remove("disabled-menu");
    menu.classList.add("enable-menu");
    }
    else {//Para que se oculte
    menu.classList.remove("enabled-menu");
    menu.classList.add("disabled-menu");
    }
}
//Asociando el evento al botón
boton.addEventListener("click",showMenu);*/


function moveKeyboard () {
    var menu = document.getElementById("positionHere");
    // para que se pinte
    var keyX = 100;
    var keyY = 100;
    move_keyboard = function() {
      /*noStroke();
      fill(255,255,0);
      ellipse(keyX,keyY,25,25);*/
      if (keyPressed) {
        if (key == CODED) {
          if (keyCode == UP) /* { keyY-=1; }*/
          {
            positionHere
          }
          if (keyCode == DOWN) /* { keyY+=1; }*/
         {
            positionHere
         } 
          if (keyCode == LEFT) /* { keyX-=1; }*/
          {
            positionHere
          }
          if (keyCode == RIGHT) /*{ keyX+=1; }*/
          {
            positionHere
          }
        }
      }
    }
}

//asociando evento
boton.addEventListener("click",showMenu);