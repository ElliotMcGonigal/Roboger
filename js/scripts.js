//Business Logic


function beepBoop(input) {
  let numberString = "";
  for(counter = 0; counter <= input;  counter++) {
    counter = counter.toString();
    if (counter !== '0') {
      numberString = numberString.concat(", ")
    }
    numberString = numberString.concat(counter);
  }
  console.log(numberString)
}