// Code your solutions in this file

// returns an array of thank you messages for each name provided to the function

const array = [];
function writeCards(names, event){
    for(let k = 0; k < names.length; k++){
        array.push(`Thank you, ${names[k]}, for the wonderful ${event} gift!`);
    }
    return array;
}

function countDown(num){
    for(let i = num; i >= 0; i--){
        console.log(i);
    }
}