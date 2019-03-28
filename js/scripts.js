
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("#age").val());
    var sex = $("#sex").val();
    var orientation = $("#orientation").val();
    var match;
    var matchImage;

    if (age) {
      if (age < 30) {
        // Harry Potter characters
        if ((orientation === 'Straight' && sex === 'Male')
          || (orientation === 'Gay' && sex === 'Female')) {
            match = 'Hermione Granger';
            matchImage = 'img/HermioneGranger.jpg';
          } else if ((orientation === 'Gay' && sex === 'Male')
          || (orientation === 'Straight' && sex === 'Female')){
            match = 'Harry Potter';
            matchImage = 'img/HarryPotter.jpg';

          }
      } else {
        //Game of Thrones characters
        if ((orientation === 'Straight' && sex === 'Male')
          || (orientation === 'Gay' && sex === 'Female')) {
            match = 'Daenerys Targaryen';
            matchImage = 'img/DaenerysTargaryen.jpg';

          } else if ((orientation === 'Gay' && sex === 'Male')
          || (orientation === 'Straight' && sex === 'Female')){
            match = 'Khal Drogo';
            matchImage = 'img/KhalDrogo.jpg';

          }
          // alert("match is " + match);
      }
        $("#quiz").hide();
       $("#match").prepend("<h1>Your match is " + match + "</h1>");
       $("#match").append("<img src=" + matchImage + ">");
    } else {
      alert("Please enter your age");
    }

    event.preventDefault();
  });
});
