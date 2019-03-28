$(document).ready(function() {
  $("form#voting").submit(function(event) {

    event.preventDefault();
    var age = parseInt($("#age").val());
    if (age < 18) {
      alert("You can't vote yet");
    } else {
      alert("You can vote");
    }
  });
});
