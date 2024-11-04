// function word(word) {
//     return word.toUpperCase();
// }

// console.log(word("aslan memmedov"))


// function wordreverse(sentence) {
//    return sentence.split(" ").reverse().join(" ");
// }
// console.log(wordreverse("aslan memmedov zahir oglu"))




function nums(array) {
    let number = array[0];
    let array2 = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] > number){
            array2.push(array[index]);
            number = array[index];
        }
    }
    return array2;
}
console.log(nums([12,56,96,47,65,15,20,5]))


