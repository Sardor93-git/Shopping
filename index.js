// Module package CORE bu uzi install qilingan 
//packagelarga nisbatan aytiladi


// require("os") bu NodeJS moduli tizimi yaratilgan Operatsion tizimning
// malumotlariga murojaat qilish uchun ishlatiladi


// const fs = require(`fs`);
// const { networkInterfaces } = require("os");
// const data =fs.readFileSync('./index.txt', "utf-8");
// console.log(data);

// console.log("========================");

// fs.writeFileSync('./input.txt', `${data} \n\t\t by Sardor`);

// const new_data =fs.readFileSync('./input.txt', "utf-8");
// console.log(new_data);


// setInterval - bu orqali belgilangan vaqt oralig'ida biror amalni 
//avtomatik ravishda takrarlash uchun ishlatiladi

// let number = 0;
// setInterval(function() {
//     console.log("hisob", number);
//     number++;
// }, 100);

// http - Bu kodda, createServer metodi yordamida server yaratiladi 
//va listen metodi yordamida server 8080-portida eshitishga tayyor bo'ladi. res.writeHead yordamida HTTP-headerlari yoziladi va res.write yordamida HTML-matn yoziladi.
// So'ng res.end metodi yordamida serverga javob qaytariladi.
// writeHead dagi 200 http dagi ok
// content-type esa biz yaratmoqchi bo'lgan file type

// const http = require('http');
// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('hello world');
//   res.end();
// }).listen(8090);

//path moduli -Bu kodda, path modulidan foydalanib, 
//faylning yoli aniqlanadi va 
//parse metodi yordamida o'zgaruvchiga faylning yo'li ajratiladi.

// const path = require('path');
// const pathObj = path.normalize('/home/user/dir/file.txt');
// console.log(pathObj);

//event moduli - events modulidan foydalanib, hodisa yaratiladi 
//va on metodi yordamida hodisa eshituvchisi (listener) qo'shiladi. 
//So'ng, emit metodi yordamida hodisa ishga tushiriladi.

// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('EVENT paydo boldi');
// });
// myEmitter.prependListener('event', () => {
//   console.log("Eventdan oldin nimadir deng siz ham!!!");
// });


// myEmitter.emit('event');

//crypto moduli - malumotlarni shifrlash uchun ishlatiladi 
// va bu orqali txt filelarni ham shifrlashimiz mumkin.

// const crypto = require('crypto');
// const secret = 'secret word';

// const hash = crypto.createHmac('sha256', secret)
//   .update('eski malumotni yangilash')
//   .digest('hex');

// console.log(hash);




// Module package EXTERNAL bu packagelarni ishlatishdan oldin uzimiz
// npm i (package name) orqali install qilamiz.

//moment module package- bu vaqtni o'rnatish uchun ishlatiladi
//npm install moment --save orqali o'rnatamiz

// const moment = require('moment');

// setInterval(() => {
//     const time = moment().format();
//     console.log(`hozirgi vaqt: ${time}`);
// }, 5000);

//inquirer module package
// npm install inquirer o'rnatishimiz mumkin

// const inquirer = require("inquirer");
// inquirer
//     .prompt([{ type: 'input', name: 'raqam', message: "raqamni kiriting? " }])
//     .then(answer => {
//         console.log("man kiritgan raqam qiymati: ", answer.raqam);
//     })
//     .catch((err) => console.log(err));

//inquirer ga yana bir misol


// const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: "What's your name?",
//     },
//     {
//       type: 'number',
//       name: 'age',
//       message: "How old are you?",
//     },
//   ])
//   .then((answers) => {
//     console.log(`Hi ${answers.name}, you are ${answers.age} years old!`);

// });

//validator moduli yordamida JS dasturlarida malumotlarni tekshirish uchun bir nechta
//funksiyalari mavjud. Modul yordamida, malumotlar uchun tekshirishni bajarish uchun
//mo'jallangan ko'plab funksiyalari mavjud.

// const validator = require('validator');
// // const test = validator.isEmail(`foo@bar.com`);
// // const test = validator.isIP("113.52.208.240");
// const test = validator.is("113.52.208.240");
// console.log("test: ", test);

// uuid moduli takrorlanmaydigan random stringlarini hosil qilib beradi.

// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random: ", random);


// //chalk bu boshqacha usulda console qilish imkonini beradi
// const chalk = require('chalk');
// const log = console.log;

// // log(chalk.blue('Hello') + random+ chalk.red('!'));
// log(chalk.blue(`uuid create ${random}`));

// const express = require('express');
// const app = express();
// const port = 3000;

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });




// Module package FILE

const Account = require("./account");

Account.tellMeAboutClass();
Account.tellMeTime();

console.log("================================");

const myAccount = new Account('Robert', 300000, 948454123854422115);
myAccount.giveMeDetails(); 

myAccount.makeDeposit(1000000);

myAccount.withdrawMoney(200000);

// const calculate = require('./hisob.js');

// const natija1 = calculate.kopaytirish(30, 5);
// console.log("Kopaytirish natija: ", natija1);

// console.log("***********************");

// const natija2 = calculate.bolish(30, 5);
// console.log("bBolish natija: ", natija2);

// console.log("***********************");

// const natija3 = calculate.qoshish(30, 5);
// console.log("Qoshish natija: ", natija3);

// console.log("***********************");

// const natija4 = calculate.ayrish(30, 5);
// console.log("Ayrish natija: ", natija4);

// console.log(arguments);