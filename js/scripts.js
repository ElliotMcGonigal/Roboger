//Business Logic


function beepBoop(input) {
  let numberString = "";
  for(counter = 0; counter <= input;  counter++) {
    counter = counter.toString();
    if (counter.includes('3')) {
      numberString = numberString.concat(", Won't you be my neighbor?");
    }
    else if (counter.includes('2')) {
      numberString = numberString.concat(", Boop!");
    }
    else if (counter.includes('1')) {
      numberString = numberString.concat(", Beep!");
    }
    else{
      if (counter !== '0') {
        numberString = numberString.concat(", ")
      }
      numberString = numberString.concat(counter);
    }
  }
  return numberString;
}



//UI Logic

$(document).ready(function() {
  $("form#formNum").submit(function(event) {
    event.preventDefault(); 
    let usersInput = $("#userInput").val();
    let outputString = beepBoop(usersInput);
    $("ul#output").append("<li>",outputString,"</li>");
  });
});