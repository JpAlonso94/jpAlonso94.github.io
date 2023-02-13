/*Validador del formulario para que sea rellenado*/
(() => {
    'use strict'
  
    
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  /*Boton hacia arriba*/
  $(document).ready(function(){ 
    irArriba(); 
   
  });

  function irArriba(){
    $('.ir-arriba').click(function(){ 
      $('body,html').animate({ scrollTop:'0px' },100); 
    });
    $(window).scroll(function(){
      if($(this).scrollTop() > 0){
        $('.ir-arriba').slideDown(600); }
        else{ $('.ir-arriba').slideUp(600); }
    });
    $('.ir-abajo').click(function(){
       $('body,html').animate({ 
        scrollTop:'1000px' 
      },1000); });
  }

  const formulario = document.getElementById("form-contacto");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const motivo = document.getElementById("motivo");
  const mensaje= document.getElementById("mensaje");
 
  /*Cartel Alert  con datos del formulario*/
  formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(formulario.checkValidity()) {
      validar();
    }
   
});

function validar() {
 
      const datos="Nombre: "+ nombre.value + "\nEmail: "+ email.value +
      "\nMotivo: "+ motivo.value + "\nMensaje: "+mensaje.value;  
      
      const result = confirm("¿Son correctos los datos? \n"+datos )
      if(result){
        alert("Se envio un mail con los datos \n"+datos+"\nMuchas Gracias!!");
      };
      window.location.reload();
} 
  