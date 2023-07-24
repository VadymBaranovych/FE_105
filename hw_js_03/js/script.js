/*
* 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
*дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
*/
let age = document.getElementById('age'),
    btn1 = document.querySelector('.form_1 button'),
    answer1 = document.querySelector('.answer_1'),
    textAnswer1;

btn1.onclick = (e) => {
    e.preventDefault();
    answer1.classList.remove('error');

    if (Number(age.value)) {
        if (age.value >= 0 && age.value <= 11) {
            textAnswer1 = `Вам ${age.value} років, ви дитина.`;
        } else if (age.value >= 12 && age.value <= 17) {
            textAnswer1 = `Вам ${age.value} років, ви підліток.`;
        } else if (age.value >= 18 && age.value <= 59) {
            textAnswer1 = `Вам ${age.value} років, ви доросла людина.`;
        } else if (age.value >= 60 && age.value <= 100) {
            textAnswer1 = `Вам ${age.value} років, ви пенсіонер.`;
        } else {
            answer1.classList.add('error');
            textAnswer1 = `Вік повинен бути вказаний від 0 до 100`;
        }
    } else {
        answer1.classList.add('error');
        textAnswer1 = `Вік повинен бути вказаний від 0 до 100`;
    }
    answer1.textContent = textAnswer1;
    age.value = '';
}

/*
* 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
*який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
*/
let special = document.getElementById('special'),
  btn2 = document.querySelector('.form_2 button'),
  answer2 = document.querySelector('.answer_2'),
  textAnswer2,
  specialSymbol = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];

btn2.onclick = (e) => {
  e.preventDefault();
  answer2.classList.remove('error');
  if (special.value && special.value >= 0 && special.value < 10) {
    textAnswer2 = special.value + ' = ' + specialSymbol[special.value];
  } else {
    answer2.classList.add('error');
    textAnswer2 = 'Число має бути від 0 до 9';
  }
  answer2.textContent = textAnswer2;
  special.value = '';
}

/*
* 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
*/
let minNum = document.getElementById('minNum'),
  maxNum = document.getElementById('maxNum'),
  btn3 = document.querySelector('.form_3 button'),
  answer3 = document.querySelector('.answer_3'),
  x, y;

btn3.onclick = (e) => {
  e.preventDefault();
  let textAnswer3 = 0;
  answer3.classList.remove('error')

  if (Number(minNum.value) && Number(maxNum.value)) {
    if (minNum.value <= 100 && maxNum.value <= 100) {

      if (minNum.value <= maxNum.value) {
        x = minNum.value;
        y = maxNum.value;
      } else {
        x = maxNum.value;
        y = minNum.value;
      }

      while (x <= y) {
        textAnswer3 += +x;
        x++;
      }

      answer3.textContent = `Сума всіх чисел діапазону дорівнюють ${textAnswer3}`;
    } else {
      answer3.classList.add('error');
      answer3.textContent = 'Пробачте, числа повинні бути меньше, або дорівнювати 100';
    }
  } else {
    answer3.classList.add('error');
    answer3.textContent = 'Пробачте, поле не заповнене';
  }

  maxNum.value = minNum.value = '';
}

/*
* 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
*/
let minNum1 = document.getElementById('minNum1'),
  maxNum1 = document.getElementById('maxNum1'),
  btn4 = document.querySelector('.form_4 button'),
  answer4 = document.querySelector('.answer_4');

btn4.onclick = (e) => {
  e.preventDefault();
  let x = minNum1.value,
    y = maxNum1.value;

  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  answer4.textContent = `Найбільший спільний дільник у чисел ${x} і ${y} = ${gcd(x, y)}`;
  minNum1.value = '';
  maxNum1.value = '';
}

/*
* 5. Запитай у користувача число і виведи всі дільники цього числа.
*/
let numDivider = document.getElementById('numberDivider'),
  btn5 = document.querySelector('.form_5 button'),
  answer5 = document.querySelector('.answer_5');

btn5.onclick = (e) => {
  e.preventDefault();
  let n = numDivider.value;
  const parts = [];

  for (let i = 2; i * 2 <= n; i++) {
    if (n % i == 0) {
      parts.push(i);
    }
  }

  const innerValue = parts.join(', ');
  const result = innerValue;

  answer5.textContent = `Дільниками числа ${n} = ${result}`;
  numDivider.value = '';
}

/*
* 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
*/
let numPalindrome = document.querySelector('#numPalindrome'),
  btn6 = document.querySelector('.form_6 button'),
  answer6 = document.querySelector('.answer_6');

btn6.onclick = (e) => {
  e.preventDefault();
  let val = numPalindrome.value;
  answer6.classList.remove('error');

  if (isNaN(val)) {
    answer6.classList.add('error');
    answer6.textContent = 'Ви ввели не число';
  } else if (parseInt(val) != val || val <= 0) {
    answer6.classList.add('error');
    answer6.textContent = 'Ви ввели не натуральное число';
  } else {
    let j = 0, le = val.length - 1, pal = true;
    while (j <= le - j) {
      pal = pal && (val.charAt(j) == val.charAt(le - j));
      j++
    }
    answer6.textContent = 'Введене число ' + val + (pal ? ' ' : ' не ') + 'буде паліндромом';
    numPalindrome.value = '';
  }
}

/*
* 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
* від 200 до 300 - знижка буде 3%;
* від 300 до 500 - 5%;
* від 500 і вище - 7%.
*/
let sumPurchase = document.querySelector('#sumPurchase'),
  btn7 = document.querySelector('.form_7 button'),
  answer7 = document.querySelector('.answer_7');

btn7.onclick = (e) => {
  e.preventDefault();
  let sum = sumPurchase.value,
    percent,
    discountedAmount;
  answer7.classList.remove('error');

  if (Number(sum)) {
    if (sum >= 200 && sum < 300) {
      percent = 0.03;
    } else if (sum >= 300 && sum < 500) {
      percent = 0.05;
    } else if (sum >= 500) {
      percent = 0.07;
    } else {
      percent = 0;
    }
    discountedAmount = Math.round(sum - sum * percent);
    answer7.textContent = `Ви здійснили покупку на суму ${sum}, ваша знижка складає ${Math.round(percent * 100)}%. 
    Сума зі знижкою: ${discountedAmount}`;
  }
  else {
    answer7.classList.add('error');
    answer7.textContent = `Ви не ввели суму покупки`;
  }


  sumPurchase.value = '';
}

/*
* 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
* При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.
* Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
*/
let num = document.getElementById('num'),
  btn8 = document.querySelector('.form_8 button'),
  answer8 = document.querySelector('.answer_8');

btn8.onclick = (e) => {
  e.preventDefault();
  let listNum = num.value,
    result = listNum.split(','),
    evenNum = 0, oddNum = 0, zeroNum = 0,
    answer;

  answer8.classList.remove ('error');

  for (let i = 0; i < result.length; i++) {

    if (listNum) {
      if (Number(result[i]) || result[i] == 0) {
        if (result[i] == 0) {
          zeroNum++;
        } else if (result[i] % 2) {
          oddNum++;
        } else {
          evenNum++;
        }
        answer = `Ви ввели <b>${listNum}</b>, з них:<br>
                Кількість нульових чисел: <b>${zeroNum}</b><br>
                Додатніх чисел: <b>${evenNum}</b><br>
                Від\’ємних чисел: <b>${oddNum}</b>`;
      }
      else {
        answer8.classList.add ('error');
        answer = 'Вибачте, потрібно вводити тільки цифри';
      }
    } else {
      answer8.classList.add ('error');
      answer = 'Вибачте, потрібно щось ввести';
    }

  }
  answer8.innerHTML = answer;
  num.value = '';
}

/*
* 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір,
* поки користувач натискає OK.
*/
let days = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П\'ятниця',
  'Субота'
],
  d = new Date(),
  n = d.getDay(),
  dayWeek = document.querySelector('.day_week'),
  btnDayWeek = document.getElementById('dayWeek');

dayWeek.textContent = days[n];

btnDayWeek.onclick = () => {
  n++;
  if (n > 6) {
    n = 0;
  }
  dayWeek.textContent = days[n];
}
