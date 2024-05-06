for (let i = 1; i <= 10; i++) {
    console.log("i =", i);
}
let i = 1;
while (i <= 100) {
    console.log("sorry");
    i++
}
let str = "javascript";
let size = 0;
for (let i of str) {
    console.log("i=", i)
    size++;
}
console.log("size", size);

for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log("num=", num);
    }
}

let gameNum = 30;
let userNum = prompt("guess the gameNumber")
while (userNum != gameNum) {
    userNum = prompt("you enter a wrong num : please enter again")
}
console.log("congratulation you enter a correct num")

//  let fullName = prompt("enter your fullName without space");
//  let username = "@" + fullName + fullName.length;
//  console.log(username)

function myFunction() {
    console.log("crazy_saquib");
    console.log("crazy_saquib");
    console.log("crazy_saquib");
    console.log("crazy_saquib");
}
myFunction();

console.log(2 + "2" - 1)

function countVowels(str){

    let count = 0;

    for (const char of str) {
    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" 
    ) {
        count++ ;
    }
}
console.log(count);
}
countVowels("abaaaaaaaaaaaaaaaaaa");