# Project: Mr. Roboger's Neighborhood

#### Project by Elliot McGonigal
#### This Website will count up to a number replacing along the way.

## Description
This is a project that will take in a number and spout out organized nonsense based on what number you inputted. This serves no real purpose except to practice writing loop in javascript. 

## Setup
1. Set up a code environment (I use VSCode with Git Bash)
2. Clone this repository
3. Either use the Live Server addon to launch the website, or open index.html in your browser
4. Enter a number into the blank to see it count out

## Technologies Used
- Javascript
- jquery 3.6.0
- bootstrap
- html

## Known Bugs
No known bugs

## License
GNU gpl 3.0 view LICENSE for more details


## Specs
Describe: beepBoop()

Test: It should return a 0 if the number 0 is inputted.
Code: beepBoop(0);
Expected Output: '0'

Test: It should list numbers from 0 to the inputted number.
Code: beepBoop(5);
Expect: "0, 1, 2, 3, 4, 5"

Test: It should replace numbers that contain a 1 with 'Beep!'
Code: beepBoop(12);
Expect: "0, Beep!, 2, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Beep!"

Test: It should replace numbers that contain a 2 with 'Boop!'
Code: beepBoop(12);
Expect: "0, Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, Beep, Beep!, Boop!"

Test: It should replace numbers that contain a 3 with 'Won't you be my neighbor?'
Code: beepBoop(13);
Expect: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?"