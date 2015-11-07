$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var sexInput = $("input[name=sex]:checked").val();
    var emailInput = $("input#email").val();
    var urlInput = $("input#url").val();
    var telInput = $("input#tel").val();
    var ageInput = $("input#age").val();
    var bornInput = $("input#born").val();
    var prisonInput = $("input#prison").val();
    var schoolInput = $("input#school").val();
    var dinnerInput = $("input#dinner").val();
    var colorInput = $("input#color").val();
    var passwordInput = $("input#password").val();
    var carInput = $("input[name=car]:checked").val();

// The :checked selector works for checkboxes, radio buttons, and select elements. For select elements only, use the :selected selector.

    $(".car").text(carInput);
    $(".password").text(passwordInput);
    $(".color").text(colorInput);
    $(".dinner").text(dinnerInput);
    $(".school").text(schoolInput);
    $(".prison").text(prisonInput);
    $(".born").text(bornInput);
    $(".age").text(ageInput);
    $(".tel").text(telInput);
    $(".url").text(urlInput);
    $(".email").text(emailInput);
    $(".sex").text(sexInput);
    $(".name").text(nameInput);

    $("#results").show();

    event.preventDefault();
  });
});
