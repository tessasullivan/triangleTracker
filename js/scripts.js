
$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    if (sideA && sideB && sideC) {
      if (sideA === sideB && sideB === sideC) {
        $("#output").append("This is an equilatoral triangle.");
      } else if (sideA === sideB || sideA === sideC || sideB === sideC){
        $("#output").append("This is an isoceles triangle.");
      } else {
        if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA){
          $("#output").append("This is a scalene triangle");
        } else {
          $("#output").append("These values do not make up a triangle");
        }
      }
    } else {
      //User left a field blank
      alert("Please enter values for all 3 sides.");
    }
    event.preventDefault();
  });
});
