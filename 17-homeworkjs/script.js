// class Rectangle{
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }

//     calculateArea(width,height){
//         return this.width*this.height;
//     }
//     calculatePerimetr(width,height){
//         return 2*(this.width+this.height);
//     }
// }

// const rectangle1 = new Rectangle(5,10);

// console.log("Area of rectangle:",rectangle1.calculateArea())
// console.log("Perimetr of rectangle:",rectangle1.calculatePerimetr())

//#2


// class bankAccount{
//     constructor(accountNumber,balance = 0){
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }

//     deposit(amount){
//         if(amount > 0){
//             return this.balance+=amount;
//         }
//         else{
//             return "Dogru mebleg secilmeyib!!"
//         }
//     }
//     withdraw(amount){
//         if(amount>0 && this.balance > amount){
//             return this.balance-=amount;
//         }
//         else if(this.balance < amount){
//             return "kifayet qeder mebleg yoxdur!!";
//         }
//         else{
//             return "Dogru mebleg secilmeyib!!"
//         }
//     }
// }

// const Alice = new bankAccount("101",1000);
// console.log(Alice)
// console.log(Alice.deposit(30))
// console.log(Alice.withdraw(1300))

// const Bob = new bankAccount("102",500);
// console.log(Bob)
// console.log(Bob.withdraw(100));
// console.log(Bob.deposit(700))


//#3
