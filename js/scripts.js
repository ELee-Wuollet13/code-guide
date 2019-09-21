$(document).ready(function()) {
  $("#questions").submit(function(event) {
    event.preventDefault();
    $("#lingo").show();
    var result = parseInt($("input:radio[name=question1]:checked").val());
     result += parseInt($("input:radio[name=question1]:checked").val());
      result += parseInt($("input:radio[name=question1]:checked").val());

      
  })
}
