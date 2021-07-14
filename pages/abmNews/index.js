const validaForm = () => {
  // Inputs
  if ($("#title").val() == "") {
    alert("El campo titulo no puede estar vacío.");
    $("#title").focus();   
    return false;
  }
  if ($("#subtitles").val() == "") {
    alert("El campo subtitulo no puede estar vacío.");
    $("#subtitles").focus();
    return false;
  }
  if ($("#body").val() == "") {
    alert("El cuerpo de la noticia no puede estar vacío.");
    $("#body").focus();
    return false;
  }
  return true;
}

$(document).ready(() => {

  $("#check-file").click(() => {
    if ($("#file").length > 0) return $( "#file" ).remove();

    if ($("#check-file").is(":checked")) {
      return $('#image-container').append('<input type="file" name="file"  id="file" />');
    }
  });

  $("#submit").click(() => {     
    if (validaForm()) {  
      //send form
    }
  });
});

