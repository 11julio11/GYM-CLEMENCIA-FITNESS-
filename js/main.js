//fijar el menu 
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  // Función para agregar o quitar la clase 'navbar-fixed' dependiendo del desplazamiento
  function handleScroll() {
    if (window.scrollY > navbar.offsetHeight) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  }

  // Evento para manejar el desplazamiento de la página
  window.addEventListener("scroll", handleScroll);

  // Eventos para agregar la clase 'navbar-fixed' al pasar el cursor sobre el menú
  navbar.addEventListener("mouseover", function () {
    navbar.classList.add("navbar-fixed");
  });

  navbar.addEventListener("mouseout", function () {
    handleScroll(); // Verificar el desplazamiento al quitar el cursor
  });
});
