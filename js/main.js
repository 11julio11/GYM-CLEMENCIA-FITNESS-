document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  // Función para agregar o quitar la clase 'navbar-fixed' dependiendo del desplazamiento
  function handleScroll() {
    if (window.scrollY > navbar.offsetTop) { // Usamos offsetTop en lugar de offsetHeight
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  }

  // Evento para manejar el desplazamiento de la página
  window.addEventListener("scroll", handleScroll);

  // Evento para agregar la clase 'navbar-fixed' al pasar el cursor sobre el menú
  navbar.addEventListener("mouseenter", function () { // Cambiamos mouseover a mouseenter
    navbar.classList.add("navbar-fixed");
  });

  navbar.addEventListener("mouseleave", function () { // Cambiamos mouseout a mouseleave
    handleScroll(); // Verificar el desplazamiento al quitar el cursor
  });
});
