
//1-ci task//serti sehf oxumusam ama deyismeyecem(yeniden yazmiram) 3 ayri ededle islemeli oldugumuzu dusundum

// let a = 5;
// let b = 7;
// let c = 12;
// let cem = 0;
// let hasil = 0;
// let ededi_orta = 0;

// for (let index = 0; index < 3; index++) {
//     if(index = 1){
//         cem = a+b+c;
//     }
//     if(index = 2){
//         hasil = a*b*c;
//     }
//     if(index = 3){
//         ededi_orta = (a+b+c)/3;
//     }
// }
// alert(`cem:${cem},hasil${hasil},ededi_orta:${ededi_orta}`)



// 2-ci tapsiriq

// let eded = prompt("bir eded daxil edin:")

// let bolen = [];

// for (let index = 0; index < eded; index++) {
//     if(eded%index === 0){
//         bolen.push(index);
//     }
    
// }
// alert(bolen)



// 3-cu


// let eded = prompt("bir eded daxil edin:")

// let counter = 0;

// for (let index = 0; index <= eded; index++) {
//     if(eded%index === 0){
//         counter++;
//     }
    
// }
// alert(counter)



// 4-cu

// let eded = prompt("bir eded daxil edin:")

// for (let index = 0; index <= eded; index++) {
//     alert(`${index} x ${index} = ${index*index}`)
// }



// 5-ci


// let eded = 10;
// console.log("i i^2 i^3")
// for (let index = 0; index <= eded; index++) {
//     console.log(`${index}  ${index**2} ${index**3}`)
// }



// 6-ci


// let cut_cem = 0;
// let tek_cem = 0;
// for (let index = 0; index < 100; index++) {
//     if(index%2 ===0){
//         cut_cem+=index;
//     }
//     else{
//         tek_cem+=index;
//     }
    
// }
// alert(`cut:${cut_cem}, tek:${tek_cem}`)



// 7-ci
// let array = [4,2,7,9,3,12,46,32,19];

// let big = 0;
// let little = array[0];
// for (let index = 0; index < array.length; index++) {
//     if(array[index] > big){
//         big =array[index]
//     }
//     if(array[index] < little){
//         little =array[index]
//     }
// }   
// alert(`maximum:${big}`)
// alert(`minimum:${little}`)


//7-ci

// let big = 0;
// let little = array[0];
// for (let index = 0; index < array.length; index++) {
//     if(array[index] > big){
//         big =array[index]
//     }
//     if(array[index] < little){
//         little =array[index]
//     }
// }   
// alert(`en boyuk ve en kicikin ededi ortasi:${(big+little)/2}`)



// 8-ci

// let cumle = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;
// let counter = 0;

// for (let index = 0; index < cumle.length; index++) {
//     if(cumle[index] === " "){
//         counter++;
//     }
// }
// alert(`${counter} qeder bosluq var`)



//EXTRA


// #1

// for (let index = 0; index < 100; index++) {
//     console.log(index)
// }



//#2

// const fruits = ["alma", "banan", "qarpız", "portağal  ", "ananas", "nar"];

// let fruit = fruits[0]
// for (let index = 0; index < fruits.length; index++) {
//     if(fruits[index].length > fruit.length){
//         fruit = fruits[index];
//     }   
// }
// alert(fruit)



// #3


// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
//   let cem = 0;
//   for (let index = 0; index < products.length; index++) {
//     cem+=products[index].price;
//   }
//   alert(`cem:${cem}, ededi orta${cem/products.length}`)





//#14

// let array =[-10,12,-23,40,60,73,-6,-20];

// let eded = 12;

// let bool ;
// for (let index = 0; index < array.length; index++) {
//     if(array[index] === eded){
//         bool = true;
//     }
    
// }
// console.log(bool)


//#15


// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] }
//   ];

// let best = 0;
// let ortbal = [];
//   for (let index = 0; index < students.length; index++) {
//     for (let i = 0; i < students[index].scores.length; i++) {
//         best+=students[index].scores[i];
//     }
//     ortbal.push(best/3)
//     best = 0;
//   }


// let yuksek = ortbal[0];
// let plus = ortbal[0];
//   for (let index = 0; index < ortbal.length; index++) {
//     if(ortbal[index] > yuksek){
//         yuksek = ortbal[index];
//     }
//   }
//   for (let index = 0; index < ortbal.length; index++) {
//     if(ortbal[index] > 90 && ortbal[index] <100){
//         plus = ortbal[index]
//     }
//   }
// console.log(`en yuksek:${yuksek}, 90 dan yuxari:${plus}`)



// #pallindrom
// let soz = "man"
// let reverse = "";

// for(let i = soz.length-1;i >=0;i--){
//     reverse+=soz[i];
// }
// if(reverse != soz){
//     console.log(`${soz} pallindrom  deyil`)
// }
// else{
//     console.log(`${soz} pallindromdur`)
// }