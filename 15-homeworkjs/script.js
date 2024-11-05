

//#1
// function word(word) {
//     return word.toUpperCase();
// }

// console.log(word("aslan memmedov"))

//#2

// function sentenceCapitalization(sentence) {
//     let newsentence = sentence.split(" ")
//     let word = newsentence[0];
//     for (let i = 0; i < newsentence.length; i++) {
//         if(newsentence[i].length > word.length){
//             word = newsentence[i];
//         }
//     }
//     return word;
// }

// console.log(sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores."))

//#3
// function wordreverse(sentence) {
//    return sentence.split(" ").reverse().join(" ");
// }
// console.log(wordreverse("aslan memmedov zahir oglu"))

//#4

// function replace(word,index,letter) {
//     let word2 = word.split("");
//     for (let i = 0; i < word2.length; i++) {
//         if(word2[i] === index){
//             word2[i] =letter.toLowerCase();
//         }
//     }
//     return word2.join("");
// }
// console.log(replace("aslan","a","o"))


//#5


// function shop(array,add) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === add){
//             break;
//         }
//         counter++;
//     }
//     if(counter === array.length){
//         array.unshift(add);
//     }
//     return array;
// }

// console.log(shop(['Milk', 'Coffee', 'Tea', 'Honey'],"meat"))

//#5.2

// function shop(array,add) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === add){
//             break;
//         }
//         counter++;
//     }
//     if(counter === array.length){
//         array.push(add);
//     }
//     return array;
// }

// console.log(shop(['Milk', 'Coffee', 'Tea', 'Honey'],"sugar"))
//#5.3

// function shop(array,add) {
//     let alerrgic = false;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === add){
//             if(alerrgic === true){
//                 array.pop(add)
//             }
//         }
        
//     }
//     return array;
// }

// console.log(shop(['Milk', 'Coffee', 'Tea', 'Honey'],"Honey"))

//#5.4

// function shop(array,add) {

//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === 'Tea'){
//             array[i] = add;
//         }
//     }
//     return array;
// }

// console.log(shop(['Milk', 'Coffee', 'Tea', 'Honey'],"Green Tea"))


//#6

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
// countries.reverse();
// console.log(countries)

//#6.2

// countries.splice(2,2);
// countries.push("Azerbaijan");

// console.log(countries);

//#7

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd);

// console.log(fullStack)


//#8

// const itCompanies = ["Facebook","Google","Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//#8.1
// console.log( itCompanies.slice(3));
//#8.2
// console.log( itCompanies.slice(0,4));
//#8.3
//----
//#8.4
// console.log(itCompanies.sort())
//#8.5
// function upper(itCompanies) {
//     for (let i = 0; i < itCompanies.length; i++) {
//         console.log(itCompanies[i].toUpperCase());
//     }
// }
// upper(["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"])

//#8.6
// let cavab = itCompanies.includes("Google")
// if(cavab === true){
//     console.log("Google")
// }
// else{
//     console.log("bele bir sirket yoxdur")
// }
//#8.7
// function upper(itCompanies) {
//     let counter = 0;
//     let array = [];
//     for (let i = 0; i < itCompanies.length; i++) {
//         for (let index = 0; index < itCompanies[i].length; index++) {
//             if(itCompanies[i][index] === "o" || itCompanies[i][index] === "O" ){
//                 counter++;
//             }
//         }
//         if(counter >= 2){
//             itCompanies.push(itCompanies[i])
//             counter = 0;
//         }
//     }
//     return array;
// }
// console.log(upper(["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]))
