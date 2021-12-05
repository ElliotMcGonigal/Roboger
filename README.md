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
