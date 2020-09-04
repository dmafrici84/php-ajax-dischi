$(document).ready(init);

function init() {
  getData();
}

function getData() {
  $.ajax({
    url: "http://localhost/php-ajax-dischi/data.php",
    method: "GET",
    success: function(data) {
      var brani = data["response"];
      console.log("brani", brani);
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
