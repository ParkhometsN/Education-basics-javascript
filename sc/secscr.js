// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number


// let QuestionJs = prompt('Какое правильное название JavaScript?', '')

// const answer = 'ECMAScript'

// if (QuestionJs === answer){
//  window.alert('Верно!')
// }else{
//     window.alert('Не правильно! название - ECMAScript')
// };


// const number = prompt('Add number', 0)

// if (number > 0){
//     alert(1);
// }else if (number < 0){
//     alert(-1);
// }else{
//     alert(0);
// };


// let result = (a + b < 4) ? 'Below' : 'Over';
// let i = 6;

// while (i) {
//     alert(i);
//     i--;
// };


// let i = 0;
// while (++i < 5) alert( i );


// for (let i = 2; i <= 10; ++i){
//     if (i % 2 == 0){
//         alert(i);
//     }
// }; 


// let QuestuionNumber = promt('Введите число', '')

// let answer;
// do{
//     answer = prompt('Введите число', '');
//     alert(answer);
// }while (answer <= 100);


// let num;


// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);


// for (let i = 2; i <= 10; i++){
//     if(i % 2){
//         alert(i)
//     };
// };

// button = document.getElementById('googlebutton')

// const valu1 = 'n';

// if (button === 'click'){
//     alert('кнопка нажата')
// }

// browser = prompt('choose browser', '');

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// if (browser === 'Edge'){
//     alert('You ve got the Edge!')
// }else if (browser === 'Chrome' 
//     || browser === 'Firefox' 
//     || browser === 'Safari' 
//     || browser === 'Opera'){
//     alert( 'Okay we support these browsers too' );
// }else{
//     alert( 'We hope that this page looks ok!' );
// }


// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// switch (a){
//     case 0:
//         alert( 0 );
//         break;
//     case 1:
//         alert( 1 );
//         break;
//     case 2:
//     case 3:
//         alert('2,3')
//         break;
// };

// button = document.getElementById('d').addEventListener('click', ShowAlert)

// function ShowAlert (){
//     alert('привет')
// }


const block = document.getElementById('block');
const page_color = document.querySelector('body');
let blackpage = false

block.addEventListener('click', function(){
    if (blackpage){
        page_color.style.backgroundColor = '#1d1d1d';
    }else{
        page_color.style.backgroundColor = '#fff';
    }
    blackpage = !blackpage;
});

