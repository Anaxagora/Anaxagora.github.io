var sonido = new Audio();
sonido.src = "/audio/sonidomoodyblues.mp3";
var sonido1 = new Audio();
sonido1.src = "/audio/stickyFinger.mp3";
var sonido2 = new Audio();
sonido2.src = "/audio/purplehaze.mp3";
var sonido3 = new Audio();
sonido3.src = "/audio/gold_experience.mp3";
var sonido4 = new Audio();
sonido4.src = "/audio/sixpistols.mp3";
var sonido5 = new Audio();
sonido5.src = "/audio/aerosmith.mp3";

/*VALIDACIONES */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el Nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert('No has escrito nada en el Apellido');
      return;
    }
    var mail = document.getElementById('mail').value;
    if(mail.length == 0) {
      alert('No has escrito nada en el Email');
      return;
    }
    var contraseña = document.getElementById('contraseña').value;
    if(contraseña.length == 0) {
      alert('No has escrito nada en la Contraseña');
      return;
    }

    var contraseña = document.getElementById('contraseña').value;
    var contraseña2 = document.getElementById('contraseña2').value;
    if (contraseña != contraseña2) {
      alert('Las contraseñas no coinciden');
      return;
    }
    var check = document.getElementById('gridCheck').checked;
    if (check == false) {
        alert('¿Eres mayor de 16?');
        return;
    }

    this.submit();
  }