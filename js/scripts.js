$(document).ready(function()) {
  $("#questions").submit(function(event) {
    event.preventDefault();
    $("#lingo").show();
    var result = parseInt($("input:radio[name=question1]:checked").val());
     result += parseInt($("input:radio[name=question1]:checked").val());
      result += parseInt($("input:radio[name=question1]:checked").val());

      if ($("input:radio[name=logic]:checked").val() === "simple")
      if (result >= 3) {
        $(".GO").show();
      }
      else if (result < 3 && result > -3) {
        $(".Ruby").show();
      }
      else {
          $(".Javascript").show();
      }
    }
    else if ($("input:radio[name=logic]:checked").val() === "complex") {
      if (result >= 3).show();
    }
    else if (result < 3 && result > -3) {
      $(".c++").show();
    }
    else {
      $(".python").show();
    }
    else {
      $(".nothing").show();
    }
  });
});
