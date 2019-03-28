
$(document).ready(function() {
  $("form#voting").submit(function(event) {
    var age = parseInt($("#age").val());
    if (age < 18) {
      $("#canvote").hide();
      $("#cantvote").show();
    } else {
      $("#canvote").show();
      $("#cantvote").hide();

    }
    event.preventDefault();
  });
});
