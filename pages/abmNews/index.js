const validaForm = () => {
  // Inputs
  if ($("#title").val() == "") {
    alert("El campo titulo no puede estar vacío.");
    $("#title").focus();
    return false;
  }
  if ($("#select-type").val() == "") {
    alert("Seleccione un tipo de noticia");
    $("#subtitles").focus();
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
};

$(document).ready(() => {
  $.getJSON("../../mockups/parameters.json", (data) =>
    $.map(data?.typeOfNews, (type, i) => {
      $("#select-type").append(`<option value=${i}>${type}</option>`);
    })
  );

  $("#check").click(() => {
    if ($("#select").length > 0) return $("#select").remove();

    if ($("#check").is(":checked")) {
      return $("#select-page-container").append(
        '<div class="form-group" id="select"><label for="select">Posicion</label><select name="select"><option value="value1">Principal</option><option value="value2" selected>Secundario</option><option value="value3">Barra de Noticias</option></select></div>'
      );
    }
  });

  $("#submit").click(() => {
    if (validaForm()) {
      //send form
      alert("Se ha creado con exito la noticia!!!");
      window.location.assign("../../index.html");
    }
  });
});
