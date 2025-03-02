// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
}
wrapGift(gifts);

// for (let age=30; age<40; age++){
//     console.log(`I'm ${age} years old. Happy birthdat to me!`);
// }

function writeCards(names, eventName){
    let thankYouArray=[]
    for(let i =0; i < names.length; i++){
        thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYouArray
}

function countDown(positiveNumber){
    while(positiveNumber >= 0){
        console.log(positiveNumber--)
    }
}