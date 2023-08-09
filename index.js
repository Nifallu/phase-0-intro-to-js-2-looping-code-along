// Code your solutions in this file

function writeCards(names, event) {
    const cards =[]
    for (let i=0; i < names.length; i++){
        cards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    return cards;
}
// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(num){
    let i=num;
    while (i >= 0){
        console.log(i);
        --i;
    }
}

countDown(10);
