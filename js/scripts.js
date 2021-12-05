//Business Logic


function beepBoop(input) {
  let numberString = "";
  for(counter = 0; counter <= numberString;  counter++) {
    if (counter !== '0') {
      numberString = numberString.concat(", ")
    }
    numberString = numberString.concat(counter);
  }
  console.log(numberString)
}