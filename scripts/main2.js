var imag = document.querySelector('img');

imag.onclick = function () {
    var miSrc = imag.getAttribute('src');
    if (miSrc === 'images/IEPlogoCrema.jpg') {
      imag.setAttribute('src','images/enc.jpg');
    } else {
      imag.setAttribute('src', 'images/IEPlogoCrema.jpg');
    }
}



var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'I.E.P. Leoncio Prado,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'I.E.P. Leoncio Prado,' + nombreAlmacenado;
}   

miBoton.onclick = function() {
    estableceNombreUsuario();
}