// MINIMUM 

/* 
* 2. Тобі потрібно зберігати ім’я та прізвище в змінній,
* придумай до 4-х імен змінних, що потрібні тобі для даної задачі. 
* Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
*/
let firstName = 'Vadym';
let lastName = 'Baranovych';
let name = firstName + ' ' + lastName;
console.log(name);

// Неправильні імена
// let 123;
// let @name;
// let 0name;

/* 
* 3. Вкажи всі можливі способи коментування коду;
*/

//Однорядковий коментар

/*
* Багаторядковий коментар
*/

/*
* 4. Які стилі написання імен змінних ти знаєш?
*/
let a,b;
a = 1;
b = 2;

let c = 3;
let d = 4;

const FIRST_NAME = 'Vadym';

/*NORM*/

/* 
* 1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
*/
let inputFirsName = document.querySelector('#firsName');
let helloName = document.querySelector('.hello_name');
let oneForm = document.querySelector('.one_form');

oneForm.onsubmit = function(evt) {
    evt.prevetDefault();
    helloName.textContent = 'Привіт ' + inputFirsName.value;
    inputFirsName.value = '';
};

/*
* 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
*/
let inputYear = document.querySelector('#year');
let textYaer = document.querySelector('.text_year');
let twoForm = document.querySelector('.two_form');
const DATE = new Date();
const CURRENT_YEAR = DATE.setFullYear();
let yearsOld = CURRENT_YEAR;

inputYear.min = CURRENT_YEAR - 100;
inputYear.max = CURRENT_YEAR;

twoForm.onsubmit = function(evt) {
    evt.prevetDefault();
    yearsOld -= inputYear.value;
    textYaer.textContent = 'Тобі ' + yearsOld + ' років';
    inputYear.value = '';
};

/*
* 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
*/
let inputSideSquare = document.querySelector('#side_square');
let textSideSquare = document.querySelector('.text_side_square');
let perimetr;
let threeForm = document.querySelector('.three_form');

threeForm.onsubmit = function(evt) {
    evt.prevetDefault();
    perimetr = inputSideSquare.value * 4;
    textSideSquare.textContent = 'Периметр квадрату дорівнює ' + perimetr + ' см.';
    inputSideSquare.value = '';
};

/*MAX*/

/*
* 1. Запитай у користувача радіус кола і виведи площу такої окружності. 
*/
let inputRadius = document.querySelector('#input_radius');
let textRadius = document.querySelector('.text_radius');
let fourForm = document.querySelector('.four_form');
let square;
const PI = Math.PI;

fourForm.onsubmit = function(evt) {
  evt.preventDefault();
  square = Math.PI * inputRadius.value * inputRadius.value;
  textRadius.textContent = 'Площа окружності дорівнює ' + Math.round(square);
  inputRadius.value = '';
};


/*
* 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися.
* Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
*/
let inputKm = document.querySelector('#input_km');
let inputHour = document.querySelector('#input_hour');
let textKmHour = document.querySelector('.text_km_hour');
let fiveForm = document.querySelector('.five_form');
let kmHour;

fiveForm.onsubmit = function(evt) {
  evt.preventDefault();
  kmHour = inputKm.value / inputHour.value;
  textKmHour.textContent = 'Щоб проїхати '+ inputKm.value + ' км за ' + inputHour.value + ' годин, треба їхати зі швидкістю ' + Math.round(kmHour) + ' км/год';
  inputKm.value = '';
  inputHour.value = '';
};


/*
* 03 - Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро.
* Курс валют зберігається в константі.
*/
let inputUSD = document.querySelector('#input_USD');
let textEUR = document.querySelector('.text_EUR');
let sixForm = document.querySelector('.six_form');
const USD_TO_EUR = 0.91;

sixForm.onsubmit = function(evt) {
  evt.preventDefault();
  textEUR.textContent = inputUSD.value + '$ = ' + (inputUSD.value * USD_TO_EUR) + '€ (Курс ' + USD_TO_EUR + ')';
  inputUSD.value = '';
}
