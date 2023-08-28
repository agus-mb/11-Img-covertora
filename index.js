const imagen= document.querySelectorAll('.img-cobertora');

//CUANDO SELECCIONAMOS VARIOS ELEMENTOS CON LA MISMA CLASE LE PONEMOS FOREACH
imagen.forEach(imagen => {
imagen.addEventListener("mouseenter", () => {
    imagen.classList.add('hovered')
});


imagen.addEventListener("mouseleave", () => {
    imagen.classList.remove("hovered");
  });

});