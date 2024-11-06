let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];

  //#1
//   const result = arr.filter((element) => element.name.startsWith("t"));
//   console.log(result)

//#2
// const result = arr.filter((element) => element.name.startsWith("t")&& element.name.endsWith("t"));
// console.log(result)

//#3
// const result = arr.filter((element) => element.name.startsWith("t")&& element.name.endsWith("t"));
// let sumkey = 0;
// for (let i = 0; i < result.length; i++) {
//     sumkey+=result[i].key;
// }
// console.log(sumkey)

//#4
// const result = arr.filter((element) => element.name.endsWith("e"));
// for (let i = 0; i < result.length; i++) {
//     result[i].name = "SuperDev"
// }
// console.log(result)
//#5
// let result = arr[0];
// arr.forEach(element => {
//     if(element.name.length > result.name.length){
//         result = element;
//     }
// });
// console.log(result);

//#6
// let result = arr[0];
// arr.forEach(element => {
//     if(element.name.length > result.name.length){
//         result = element;
//     }
// });
// console.log(result.key);
//#7
// let result = arr[0];
// arr.forEach(element => {
//     if(element.name.length > result.name.length){
//         result = element;
//     }
// });
// console.log((arr.indexOf(result))**2);
// console.log(result);
//#8
// let result = 4;
// let arr2 = [];
// arr.forEach(element => {
//     if(element.name.length === result){
//         arr2.push(element);
//     }
// });
// console.log(arr2);
//#9
// let result = arr[0];
// arr.forEach(element => {
//     if(element.key > result.key){
//         result = element;
//     }
// });
// console.log(result.name);
//#10
// let arr2 = [];
// arr.filter(item => {
//     if((item.name.split("l").length-1) === 2){
//         arr2.push(item);
//     }
// })
// console.log(arr2)
//#11
// let arr2 = [];
// arr.filter(item => {
//     if((item.name.split("t").length-1) >= 2){
//         arr2.push(item);
//     }
// })
// console.log(arr2)
//#12
// const result = arr.filter((element) => element.name.startsWith("l")&& element.key>10);
// console.log(result)