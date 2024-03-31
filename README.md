[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/RPDAFNpj)
# EA2

## What library?
This exploration activity looks at some of the uses of the JavaScript testing library Jest
## How to run the program
Install Keft by typing the following in a command terminal
>npm install --save-dev jest
navagate to the directory containing the EA, and enter the following into the terminal
>npm test
## What purpose?
This program is meant to test simplified versions of the four javascript labs, ensuring proper functionality, and formatting. In the ToFail directory, there are copies of the four labs with one or two small mistakes that can be more easily discovered using the Jest tests.
## Sample input/output
### Correct output
npm test

> test
> jest

 PASS  ./lab18.test.js
 PASS  ./lab7.test.js
  ● Console

    console.log
      Requested file does not exist

      at log (lab7.js:10:17)

 PASS  ./lab13.test.js
 PASS  ./lab2.test.js

Test Suites: 4 passed, 4 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        0.895 s, estimated 1 s
Ran all test suites.