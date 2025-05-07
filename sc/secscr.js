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


for (let i = 2; i <= 10; i++){
    if(i % 2){
        alert(i)
    };
};