$(document).ready(function() {
  $("#questions").submit(function(event) {
    $("#answers").show();
    // $(".hidden").hide();

    var result = parseInt($("input:radio[name=question1]:checked").val());
    result += parseInt($("input:radio[name=question2]:checked").val());
    result += parseInt($("input:radio[name=question3]:checked").val());
    result += parseInt($("input:radio[name=question4]:checked").val());
    console.log(result)

    if (result >= 5) {
      $(".GO").show();
      console.log(result)
    }

    else if (result < 5 && result > 2) {
      $(".Ruby").show();
      console.log(result)
    }

    else if (result <= 2 && result >= -2){
      $(".Javascript").show();
      console.log(result)
    }

    else if (result <-2 && result > -5) {
      $(".csharp").show();
      console.log(result)
    }

    else {
      $(".Python").show();
      console.log(result)
    }
    event.preventDefault();
  });
});
