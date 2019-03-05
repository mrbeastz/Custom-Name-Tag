//Instructions:

// Add code on line 7 that declares a new variable from the input of the input field.
// Add code on line 8 that will make the text of ".printedname" to the name you typed in the input field.

$("input").keyup(function() {

var input = $('input');
var value = input.val();

$(".printedname").text(value);

});
