function writeCards(name, surprise) {
    let new_array = []
    for (let i = 0; i < name.length; i++) {
    new_array.push(`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`)
    }
    return new_array;
}


function countDown(num) {

    while (num >= 0) {
        console.log(num--);
}
}


