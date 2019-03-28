function matchTriangle (sideA, sideB, sideC) {
  var outputString;
  if (sideA === sideB && sideB === sideC) {
    outputString = "This is an equilatoral triangle.";
  } else if (sideA === sideB || sideA === sideC || sideB === sideC){
    outputString = "This is an isoceles triangle.";
  } else {
    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA){
    outputString = "This is a scalene triangle";
    } else {
      outputString = "These values do not make up a triangle";
    }
  }
  return outputString;
}

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    if (sideA && sideB && sideC) {
      var outputString = matchTriangle(sideA, sideB, sideC);
    } else {
      //User left a field blank
      alert("Please enter values for all 3 sides.");
    }
    $("#output").text(outputString);
    event.preventDefault();
  });
});
