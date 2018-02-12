$(document).ready(function() {
/* splash*/
  $('.login').hide();
  $('.check, .verify, .register, .finish').hide();
  setTimeout(function() {
    $('#init-lift').fadeOut(500);
    $('.login').show();
  }, 2000);

  $('.check, .verify').hide();// ocultar seccion de sing-up

  $('#sing-up').click(function() {// activar el boton que me muestre la siguiente pantalla
    $('.login, .verify, .register').hide();
    $('.check').show();
  });

  $('.btn-icons').click(function() {// volver al login
    $('.login').show();
    $('.check, .verify').hide();
  });
  $('#btn-near').click(function() {// activar el boton que me muestre la siguiente pantalla
    $('.login, .check').hide();
    $('.verify').show();
  });

  $('.btn-icons1').click(function() {// volver al login
    $('.check').show();
    $('.verify').hide();
  });
  $('#btn-verify').click(function() {// activar el boton que me muestre la siguiente pantalla
    $('.check, .verify').hide();
    $('.register').show();
  });

  $('.btn-icons2').click(function() {// volver al login
    $('.verify').show();
    $('.register').hide();
  });
  $('#btn-register').click(function() {// activar el boton que me muestre la siguiente pantalla
    $('.verify, .register').hide();
    $('.finish').show();
  });

  $('.btn-icons3').click(function() {// volver al login
    $('.register').show();
    $('.finish').hide();
  });
});

