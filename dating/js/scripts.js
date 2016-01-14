$(document).ready(function() {
  $("form#profile").submit(function(event) {

  var age = parseInt($("input#age").val());
  var gender = $("select#gender").val();
  var hobby = $("input#hobby").val();

  if(age > 20) {
    if(gender === "male") {
      $("#dateResult").text("Marilyn Monroe");
    }
    else {
      $("#dateResult").text("Clark Gable");
    }
  }
  else {
    if(gender === "male") {
      $("#dateResult").text("Taylor Swift");
    }
    else {
      $("#dateResult").text("The Rock");
    }

  };
    $("#result").show();

    event.preventDefault();

  });
});
