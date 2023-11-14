// let numberOfFilm = +prompt('What number of films did you watched?', ''),
//     lastFilm1 = prompt('One of last watched film?'),
//     rate1 = +prompt('What Rate do you give for it?'),
//     lastFilm2 = prompt('One of last watched film?'),
//     rate2 = +prompt('What Rate do you give for it?'),

//     personalMovieDB = {

//         'count': numberOfFilm,
//         'movies': {},
//         'actors': {},
//         'genres': [],
//         'privat': false
//     };
//     personalMovieDB.movies[lastFilm1] = rate1;
//     personalMovieDB.movies[lastFilm2] = rate2; 

// console.log(personalMovieDB);

// let num = 5;

// (num>4) && (num <9) ? alert(4)  : null ;


// let num = 10;

// switch (num) {

//     case 60 :
//         alert('60');
//         break;

//     case 40 :
//         alert('40');
//         break;
//     case 1:
//         alert (num);
//         break;
//     default :
//         alert ('fffw');
//         break;
// } 


// let resault = "";

// let lenght = 7;

// for (let i = 1; i < lenght; i++ ){

//     resault += "\n"; 

//     for (let j = 0; j < i ; j++){
//         resault += "*";
//     }
// }
// console.log(resault);
// function firstTask() {

//     for ( let i = 2; i <= 10; i++ ) {

//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }

// firstTask();
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let i = 2;
// while ( i <= 16){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }        
//     i++;
// }

// let arr = [];

// for (let i = 5; i <= 10; i++){
//     arr[i-5]=i;
// }

// console.log(arr);

// function secondTask() {
//     // Пишем решение вот тут
//       cikl:for ( let i = 20; i >= 10; i-- ) {



//             if ( i == 13 ){
//                 break cikl;
//             }   
//             console.log(i);

//         }

// }
// secondTask();


// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     let count = arr.length;

//     for (let i=0; i<count; i++){

//         result[i] = arr[i];

//     }
//     console.log(result);


//     // Не трогаем
//     return result;
// }
// firstTask();

// let arr = [ 10, 20, 'Shopping', 40, 'Homework' ];
// let count = arr.length;
// for (let i=0; i<count; i++){

//         if (typeof(arr[i]) == 'number'){
//             arr[i] = 2*arr[i];
//         } else {
//             arr[i] += ' - Done';
//         } 
// }
// console.log(arr);
//    const data = [5, 10, 'Shopping', 20, 'Homework'];


//     let count = data.length;
//     for (let i=0; i<count; i++){

//         if (typeof(data[i]) == 'number'){
//             data[i] = 2*data[i];
//         } else {
//             data[i] += ' - Done';
//         } 
//     }
//     console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// let count = data.length -1;
// let arr = [];
// for (let i=0; i<count+1; i++){
//     arr[i] = data[count-i]; 
//     data[i]  = arr[i];
// }





// let numberOfFilm = +prompt('What number of films did you watched?', ''),
//     lastFilm1 = prompt('One of last watched film?'),
//     rate1 = +prompt('What Rate do you give for it?'),
//     lastFilm2 = prompt('One of last watched film?'),
//     rate2 = +prompt('What Rate do you give for it?'),

//     personalMovieDB = {

//         'count': numberOfFilm,
//         'movies': {},
//         'actors': {},
//         'genres': [],
//         'privat': false
//     };
//     personalMovieDB.movies[lastFilm1] = rate1;
//     personalMovieDB.movies[lastFilm2] = rate2; 

// console.log(personalMovieDB);


//accauntingFilmsRate();
// let a = function () {
//        let counter = 0; 
//        const myFunction = function() {
//          counter = counter + 1;
//          return counter;
//        };
//        return myFunction;
//      };

// let b = a();
//      console.log(b() + b() + b()+ b() + b());
// let phrase = "Hello";
// let b = function(){}; 
// if (true) {
//   let user = "John";

//   b = function sayHi() {
//     alert(`${phrase}, ${user}`);

//   }

// }

// b();
// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();

// function ass (){

//      let a = 1;

//      function count (){
//         a= a+1;
//         return a;
//      }
//      count ();
//      return a;       

// }
// let b = ass ();
// b();
// console.log(a + a + a);

// function sayName (name){
//     name = name.toString();
//     return name;
// }
// console.log(sayName(-13));







// console.log('d');
// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }
//     let str = '';
//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//         }
//         str += `${num * i}---`;
//     }
//     return str;
// }getMathResult(10, 5);
// num;


// let totalSittings = 36;
// let totalCupes = 9;

// function showNuberCupe(numberSitting){
//     if else(numberSitting>=1&&numberSitting<=4){
//         return 1;
//     }
//     if else (){

//     } }if else (){

//     }
// }
// for (let i=1;i<10;i++){

// }
//getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// function getTimeFromMinutes(fullMinutes) {
//     let days = parseInt(fullMinutes/1440);
//     let hours;
//     let minutes;
//     let nameOfFullMinutes;
//     let lastTwoNumbersOfFullMinutes = fullMinutes.toString().slice(fullMinutes.toString().length-2);
//     let lastNumberOfFullMinutes = fullMinutes.toString().slice(fullMinutes.toString().length-1);

//     if (fullMinutes <0) {
//         console.log("Ошибка, проверьте данные");
//         return;
//     }
//     if(lastTwoNumbersOfFullMinutes>=11&&lastTwoNumbersOfFullMinutes<=14){
//         nameOfFullMinutes = 'минут';
//     }
//     else if (lastNumberOfFullMinutes == 1){
//         nameOfFullMinutes = 'минута';
//     }
//     else if(lastNumberOfFullMinutes >=2 && lastNumberOfFullMinutes <= 4){
//         nameOfFullMinutes = 'минуты';
//     }
//     else {
//         nameOfFullMinutes = 'минут';
//     }
//     if (days<1){
//         hours = parseInt(fullMinutes / 60);
//         minutes = Math.round((fullMinutes / 60 - hours) * 60);
//     } 
//     if(days>=1){
//         hours = parseInt((fullMinutes/1440 - days)*24);
//         minutes =Math.round((fullMinutes/1440 - days)*1440);
//         if(minutes>60){
//             minutes = Math.round((minutes/60 - parseInt(minutes/60))*60);
//         }          
//     }
//     let lastNumberOfDays = days.toString().slice(days.toString().length-1);
//     let lastNumberOfHours = hours.toString().slice(hours.toString().length-1);
//     let lastNumberOfMinutes = minutes.toString().slice(minutes.toString().length-1);

//     let lastTwoNumbersOfDays = days.toString().slice(days.toString().length-2);
//     let lastTwoNumbersOfHours = hours.toString().slice(hours.toString().length-2);
//     let lastTwoNumbersOfMinutes = minutes.toString().slice(minutes.toString().length-2);
//     let nameOfDay;
//     let nameOfHours;
//     let nameOfMinutes;
//     if (lastTwoNumbersOfDays>=11&&lastTwoNumbersOfDays<=14){
//         nameOfDay = 'дней';
//     }
//     else if(lastNumberOfDays == 1){
//         nameOfDay = 'день';
//     }else if (lastNumberOfDays >=2 && lastNumberOfDays<=4){
//         nameOfDay = 'дня';
//     }
//     else{
//         nameOfDay = 'дней';
//     }
//     if (lastTwoNumbersOfHours>=11&&lastTwoNumbersOfHours<=14){
//         nameOfHours = 'часов';
//     }
//     else if(lastNumberOfHours == 1){
//         nameOfHours = "час";
//     }else if(lastNumberOfHours >=2&&lastNumberOfHours<=4){
//         nameOfHours = 'часа';
//     }
//     else{
//         nameOfHours = 'часов';
//     }
//     if(lastTwoNumbersOfMinutes>=11&&lastTwoNumbersOfMinutes<=14){
//         nameOfMinutes = 'минут';
//     }
//     else if (lastNumberOfMinutes == 1){
//         nameOfMinutes = 'минута';
//     }
//     else if(lastNumberOfMinutes >=2 && lastNumberOfMinutes <= 4){
//         nameOfMinutes = 'минуты';
//     }
//     else {
//         nameOfMinutes = 'минут';
//     }
//     return (console.log(`"${fullMinutes} ${nameOfFullMinutes} - это ${days} ${nameOfDay}, ${hours} ${nameOfHours} и ${minutes} ${nameOfMinutes}"`));
// }
// getTimeFromMinutes((1440+733)*8);

// let count = 0;
// let count1 = 0;
// let arr1=[];
// let arr2=[];
// let nameOfObject=[];
// let countSvoistv=0;
// let countOfObjects=0;
// let obj = {
//     a:3,
//     b:6,
//     c:'ddd',
//     d:{
//         s:54,
//         m:'tdd6'
//     },
//     s:'asaa',
//     e:{
//         dg:666666665,
//         xgg:'6gx6'
//     },
//     hg:65,
//     run:function (){
//         console.log('Test');
//     }
// };
// let counter = 0;

// let {s,hg} = obj;

// console.log(hg);
// if (typeof(obj[key]) === 'object'){
//     countOfObjects++;
//     for (let i in obj[key]){
//         nameOfObject[countOfObjects-1]=key;
//         count1++;
//         console.log(`${key} { ${i} ${obj[key][i]} }`);
//     }
// }
// else{
//     console.log(`${key}  ${obj[key]}`);
//     count++;
// }
// }
// console.log(`Всего имеется ${count} свойств в Объекте Первого Уровня + еще ${countOfObjects} свойство-Обектов Второго Уровня: { ${nameOfObject} }, которые имеет в себе еще ${count1} свойства вместе`);



// for (let i = 0; i<arr3.length; i++){
//     console.log(arr3[i]);
// }

// for (let num of arr3){
//     console.log(num);
// }
// // console.log(arr3.length);
// arr3.pop();
// arr3.push(39);
// arr3.forEach(function(item,i,target){
//         console.log(`${i} : ${item} in the array ${arr3} `);
// }); 
// let arr3 = [ , ,'fff',3,'fe','fqwfqwf'];
// let str = 'ww; ww dw; dw; 2d1dw; fdewdwedw; dddddd';
// let mof = str.split(';');
// // let fee = mof.split(';');
// console.log(mof);

// let arr = [1,4,5,1,3,12,4234,23,65,4,2,1,];
// let arr4 = ["assd",'dede','ed','wrtbwrtb','wbrtwrtb','bwb'];
// console.log(arr4.sort());

// function copy(putObj){
//     let key;
//     let copyObj ={};
//     for(key in putObj){
//         copyObj[key] = putObj[key];
//     }
//     return copyObj;
// }


// let objFirst = {
//     a:1,
//     b:3,
//     c:4
// };
// let newObject = copy(objFirst);
// newObject.b=10;

// let rfr = Object.assign(objFirst,newObject);
// rfr.a = 500;
// console.log(rfr);

// let arr5 = ['d32j','23dhhh','d32bbu[hn','g21tt6yt6y'];
// let newArr = arr.slice();
// newArr[2]=222;
// let totalArr = ['1111wdwdwd',...arr, ...arr5,232];
// console.log(totalArr);


// function dfg (a,s,d){
//     console.log(a);
//     console.log(s);
//     console.log(d);
// }
// let num = ['sss',4,2,1,'s'];

// dfg(...num);


// let arr = ['jjj','hhh','bbu[hn','gtt6yt6y'];
// let nn = [...arr];
// nn[3] = 'w';
// console.log(nn);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     // let showObj = {};
//     // let key;
//     // for(key in plan){
//     //     showObj[key] = plan[key];
//     // }
//     // return showObj;
// return plan.skills.exp;
// }
// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {

// }





// let someString = 'This is some strange string';

// function reverse(str) {
//     let strInArr = str.split('');
//     let simpleWord =  strInArr[0].toLowerCase();
//     let lastWord = strInArr[strInArr.length -1];
//     let mainLatter = lastWord[0].toUpperCase(); 
//     let newLastWord = mainLatter + lastWord.slice(1);
//     strInArr.pop();
//     strInArr.push(newLastWord);
//     let revStrInArr = strInArr.reverse();
//     revStrInArr.pop();
//     revStrInArr.push(simpleWord);
//     let backToStrRevStrInArr = revStrInArr.join('');
//     return(console.log(backToStrRevStrInArr));
// }
// reverse(someString);














// const someString = 'Мама завтра приедит и привезет вкусняшки';

// function reverse(str) {
//     if (typeof(str) !== 'string'){

//         return(console.log('Error'));
//     }
//     else{        
//         let strInArr = str.split(' ');
//         let simpleWord =  strInArr[0].toLowerCase();
//         let lastWord = strInArr[strInArr.length -1];
//         let mainLatter = lastWord[0].toUpperCase(); 
//         let newLastWord = mainLatter + lastWord.slice(1);
//         strInArr.pop();
//         strInArr.push(newLastWord);
//         let revStrInArr = strInArr.reverse();
//         revStrInArr.pop();
//         revStrInArr.push(simpleWord);
//         let backToStrRevStrInArr = revStrInArr.join(' ');

//         return(console.log(backToStrRevStrInArr));
//     }
// }
// reverse(21341240);


