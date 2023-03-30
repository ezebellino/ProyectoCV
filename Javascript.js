// Detectamos el desplazamiento del usuario.
window.onscroll = function() {stickyNav()};

// Obtenemos el menú de navegación.
var nav = document.querySelector("nav");

// Obtenemos la posición del menú de navegación.
var sticky = nav.offsetTop;

// Añadimos la clase "sticky" al menú de navegación cuando se desplaza más allá de su posición inicial.
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// Agregamos un evento "click" a todos los enlaces internos.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Obtenemos el destino del enlace.
      const target = document.querySelector(this.getAttribute('href'));
  
      // Hacemos un desplazamiento suave a la posición del objetivo.
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

// Agregamos un evento "click" a cada habilidad.
document.querySelectorAll(".habilidad").forEach(habilidad => {
    habilidad.addEventListener('click', function (e) {
  
      // Obtenemos la descripción de la habilidad.
      const descripcion = this.querySelector(".descripcion");
  
      // Cambiamos la visibilidad de la descripción de la habilidad.
      if (descripcion.style.display === "none") {
        descripcion.style.display = "block";
      } else {
        descripcion.style.display = "none";
      }
    });
  });
  