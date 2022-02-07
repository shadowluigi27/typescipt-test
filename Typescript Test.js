"use strict";
//this function flips the case of the word inputted
function flip_case(word) {
    let new_word = "";
    for (var letter of word) {
        if (letter.toUpperCase() == letter) {
            new_word += letter.toLowerCase();
        }
        else {
            new_word += letter.toUpperCase();
        }
    }
    return new_word;
}
let input = "fLIP cASE";
input = flip_case(input);
console.log(input + " worked");
//this function edits the variable depending on the type of the object
function union_type(two_type) {
    if (typeof two_type === "string") {
        two_type = two_type.toLowerCase();
    }
    else {
        two_type += 5;
    }
    return two_type;
}
let input1 = "HELLO";
let input2 = 10;
console.log("Input1 says: " + union_type(input1));
console.log("Input2 says: " + union_type(input2));
