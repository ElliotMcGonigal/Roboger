//Business Logic


function beepBoop(input) {
  let numberString = "";
  for(counter = 0; counter <= input;  counter++) {
    counter = counter.toString();
    if (counter.includes('2')) {
      numberString = numberString.concat(", Boop!");
    }
    else if (counter.includes('1')) {
      numberString = numberString.concat(", Beep!");
    }
    else {
      if (counter !== '0') {
        numberString = numberString.concat(", ")
      }
      numberString = numberString.concat(counter);
    }
  }
  console.log(numberString)
}