// Module package  <= Core => 
// Module package  <= External =>
// Module package  <= File => 


// setTimeout(() => {
//   console.log("5000 sekund orasida console log ishga tushdi");
// }, 5000);


// let number = 0;
// setInterval(() => {

//   number++;
//   console.log("hisob", number);
// }, 1000);



// const fs = require("fs");
// const data = fs.readFileSync("./input.txt", "utf-8");
// console.log(data);

// console.log("-------------------");
// fs.writeFileSync("./input.txt", `${data} \n\t\t by Martin`);
// const new_data = fs.readFileSync("./input.txt", "utf-8");
// console.log(new_data);



//------------------- External packegs--------------------------------------

//moment package => hozirgi vaqtni olib beradi.
// const moment = require("moment");
// const time = moment().format();
// console.log(time);

// setInterval(() => {
//   const time = moment().format();
  
//   console.log(`hozirgi vaqt: ${time}`);
// }, 5000);




// import("inquirer")
// .then((inquirer) => {
//   // 여기에 inquirer 모듈을 사용하는 코드를 작성
//   return inquirer.prompt([{ type: "input", name: "raqam", message: "raqamni kiriting?" }]);
// })
// .then((answer) => {
//   console.log("men kiritgan raqamning qiymati:", answer.raqam);
// })
// .catch((err) => console.log(err));



// const validator = require("validator");
// // const test = validator.isEmail("foo@bar.com");
// // console.log("test", test);
// // const test = validator.isInt("100");
// // console.log("test", test);
// const test = validator.isIP("1.238.91.15");
// console.log("test", test);


//uuidv4 package => random string chiqarishni ishlatish.
// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);

// // chalk package => turli xil bezaklar uchun yordam beradi.
// const chalk = require("chalk");
// const log = console.log;
// log(chalk.blue("Hello") + random + chalk.red("!"));
// log(chalk.blue(`uuid creates ${random}`));

                    // ------------- Module Packege File ------------------
              

//  const calculate = require("./hisob.js");

//  const natija = calculate.kopaytirish(80, 20);
//  console.log("Natija", natija);
//  console.log("-----------------------------");

//  const natija2 = calculate.bolish(80, 20);
//  console.log("Natija", natija2);
//  console.log("-----------------------------");


//  const natija3 = calculate.qoshish(80, 20);
//  console.log("Natija", natija3); 

//  const natija4 = calculate.airish(80, 20);
//  console.log("Natija", natija4);
                        /*
                        (function(exports, require, module, __filename, __dirname) {
                               // 모듈 코드
        });
                        //  exports: modulni export qilivchi .
                        // require: boshqa modulni import qiladi.
                        // module: hozirgi module haqida malumot.
                        // __filename: hozirgi failni manzili.
                        // __dirname: hozirgi direktni manzili.
                        });

                        */
 

 const Account = require("./account");
 Account.tellMeAboutClass ();  
 Account.tellMeAboutTime ();  

 console.log("-------------------------------")                  

 const myAccount = new Account ("Alex", 199999, 111111111111);
 myAccount.giveMeDetails();
 myAccount.makeDeposit(100000);

 // Mercades-Benz Amg GTR
 myAccount.withdrawMoney(150000);
 myAccount.makeDeposit(198793);

