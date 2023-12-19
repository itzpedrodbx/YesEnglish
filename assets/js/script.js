'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

  });

}



/**
 * header sticky functionality
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 800 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

document.getElementById('bb').addEventListener('click', function() {
  // Obtén la posición de la sección a la que quieres ir
  var sectionPosition = document.getElementById('mas-informacion').offsetTop;

  // Desplázate a esa posición con suavidad
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });
});



/* formulario */

document.addEventListener('DOMContentLoaded', function () {
  const comenzarBtn = document.getElementById('comenzarBtn');
  const formularioFlotante = document.getElementById('formularioFlotante');
  const cerrarFormulario = document.getElementById('cerrarFormulario');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  comenzarBtn.addEventListener('click', function () {
    // Mostrar el formulario y el overlay
    formularioFlotante.style.display = 'block';
    document.body.appendChild(overlay);

    // Cierra el formulario al hacer clic en el overlay o el botón de cerrar
    overlay.addEventListener('click', cerrarFormularioHandler);
    cerrarFormulario.addEventListener('click', cerrarFormularioHandler);
  });

  function cerrarFormularioHandler() {
    // Oculta el formulario y el overlay
    formularioFlotante.style.display = 'none';
    overlay.style.display = 'none';

    // Elimina los eventos para evitar problemas de manejo de eventos múltiples
    overlay.removeEventListener('click', cerrarFormularioHandler);
    cerrarFormulario.removeEventListener('click', cerrarFormularioHandler);
  }
});