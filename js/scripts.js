$(document).ready(function() {
  $("#questions").submit(function(event) {
    $(".hidden").hide();
    $("#answers").show();
    var result = parseInt($("input:radio[name=question1]:checked").val());
    result += parseInt($("input:radio[name=question2]:checked").val());
    result += parseInt($("input:radio[name=question3]:checked").val());
    result += parseInt($("input:radio[name=question4]:checked").val());
    result += parseInt($("input:radio[name=question5]:checked").val());
    console.log(result)

    if (result >= 5) {
      $(".GO").show();
    }

    else if (result < 5 && result > 2) {
      $(".Ruby").show();
    }

    else if (result <= 2 && result >= -2){
      $(".Javascript").show();
    }

    else if (result <-2 && result > -5) {
      $(".csharp").show();
    }

    else {
      $(".Python").show();
    }
    event.preventDefault();
  });
});
