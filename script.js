$(document).ready(init);

function init() {
  getData();
  clicKSearch();
  keyupInput();
}

function getData() {
  $.ajax({
    url: "http://localhost/php-ajax-dischi/data.php",
    method: "GET",
    success: function(data) {
      var brani = data["response"];
      // console.log("brani", brani);
      var templateBrani = $("#template-brani").html();
      var compiled = Handlebars.compile(templateBrani);
      var target = $("#brani");
      for (var i = 0; i < brani.length; i++) {
        var brano = brani[i];
        var branoHtml = compiled(brano);
        target.append(branoHtml);
      }
    },
    error: function(request, state, error) {
      console.log("request",request);
      console.log("state",state);
      console.log("error",error);
    }
  });
}

function clicKSearch() {
  var btnCerca = $("#cerca");
  btnCerca.click( function controlloInput() {
    var input = $("#input-cerca").val();
    console.log(input.length);
    if (input.length > 0) {
      cercaArtista(input);
    }
  });
}

function keyupInput() {
  var inputCerca = $("#input-cerca");
  inputCerca.keyup(sendKeyupInput);
}

function sendKeyupInput(event) {
  var tasto = event.which;
  var input = $ (this).val();
  if (tasto == 13 && input.length > 0) {
    cercaArtista(input);
  }
}

function cercaArtista(input) {
  $("#input-cerca").val("");
  $.ajax({
    url: "http://localhost/php-ajax-dischi/data.php",
    method: "GET",
    success: function(data) {
      var dischi = data["response"];
      var artistaUtente = input.toLowerCase();
      var templateBrani = $("#template-brani").html();
      var compiled = Handlebars.compile(templateBrani);
      var target = $("#brani");
      target.html("");
      for (var i = 0; i < dischi.length; i++) {
        var disco = dischi[i];
        var artistaDisco = dischi[i]["author"].toLowerCase();
        if (artistaDisco.includes(artistaUtente)) {
          var discoHtml = compiled(disco);
          target.append(discoHtml);
        }
      }
    },
    error: function(request, state, error) {
      console.log("request",request);
      console.log("state",state);
      console.log("error",error);
    }
  });
}
