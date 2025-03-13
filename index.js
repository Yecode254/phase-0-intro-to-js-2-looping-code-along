// Code your solutions in this file
const names = []

function writeCards(names, event) {
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "birthday"))


let n= "";
function countDown(n) {
    while( n >= 0) {
        console.log(n);
        n--;
    }
}
countdown();