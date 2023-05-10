// Мінімум
let car = {
    manufacturer: 'Hyundai',
    model: 'Tucson',
    year_issue: 2009,
    average_speed: 85,
    gas_tank_volume: 58,
    fuel_consumption: 6.5,
    drivers: {
      driver_1: 'Вадим',
      driver_2: 'Павло'
    }
  }
  
  
  // 1. Метод, який виводить на екран інформацію про автомобіль.
  function showCarModel() {
    return `Модель автомобіля ${car.manufacturer} ${car.model}`;
  }
  
  console.log(showCarModel());
  
  
  // 2. Додавання ім’я водія у список
  function addDriver(name) {
    let size = Object.keys(car.drivers).length + 1;
    car.drivers[`driver_${size}`] = name;
    return car.drivers;
  }
  
  console.log(addDriver('Анастасія'));
  console.log(addDriver('Матвій'));
  console.log(addDriver('Артем'));
  
  
  // 3. Перевірка водія на наявність його ім’я у списку
  function checkDriver(name) {
    let nameDriver;
    for (let key in car.drivers) {
      let driver = car.drivers[key];
      if (name === driver) {
        nameDriver = `Ім\'я "${name}" є у списку водіїв.`;
      }
    }
    if (!nameDriver) {
      nameDriver = `У списку водіїв немає імені "${name}".`;
    }
    return nameDriver;
  }
  
  console.log(checkDriver('Вадим'));
  console.log(checkDriver('Павло'));
  console.log(checkDriver('Назар'));
  console.log(checkDriver('Орест'));
  
  
  // 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
  function calcTimeFuel(distance) {
    let time = Math.round(distance / car.average_speed),
      fuel = distance / 100 * car.fuel_consumption,
      restDriver;
    if (time >= 4) {
      restDriver = Math.floor(time / 4);
      time += restDriver;
    }
    return `Щоб проїхати відстань ${distance} км, водій буде у дорозі ${time} годин (з них ${restDriver} годин витратить на відпочинок) та витратить ${fuel.toFixed(1)} л палива.`;
  }
  
  console.log(calcTimeFuel(1246));
  
  // Норма
  let data = new Date();
  
  let times = {
    hour: data.getHours(),
    minutes: data.getMinutes(),
    seconds: data.getSeconds()
  }
  
// 1. Для виведення часу на екран.
  function calcHour24(TimeHour) {
    for (let i = TimeHour; i >= 24; i -= 24) {
      if (TimeHour >= 24) {
        TimeHour -= 24;
      }
    }
    return TimeHour;
  }

// 2. Зміни часу на передану кількість секунд.
  function calcTimeSeconds(addSeconds) {
    let hour = times.hour * 3600,
      minutes = times.minutes * 60,
      seconds = times.seconds;
  
    let sum = hour + minutes + seconds + addSeconds;
    hour = Math.floor(sum / 3600);
    minutes = Math.floor((sum - hour * 3600) / 60);
    seconds = Math.floor(sum - hour * 3600 - minutes * 60);
    hour = calcHour24(hour);
  
    return `Було - ${times.hour}:${times.minutes}:${times.seconds}. Якщо додати ${addSeconds} секунд, стане ${hour}:${minutes}:${seconds}`
  }
  
// 3. Зміни часу на передану кількість хвилин.
  function calcTimeMinutes(addMinutes) {
    let hour = times.hour * 60,
      minutes,
      sum = hour + times.minutes + addMinutes;
  
    hour = Math.floor(sum / 60);
    minutes = Math.floor(sum - hour * 60);
    hour = calcHour24(hour);
  
    return `Було - ${times.hour}:${times.minutes}:${times.seconds} Якщо додати ${addMinutes} хвилин, стане ${hour}:${minutes}:${times.seconds}`
  }
  
// 4. Зміни часу на передану кількість годин. 
  function calcTimeHour(addHour) {
    let hour = times.hour + addHour;
  
    hour = calcHour24(hour);
  
    return `Було - ${times.hour}:${times.minutes}:${times.seconds} Якщо додати ${addHour} годин, стане ${hour}:${times.minutes}:${times.seconds}`
  }
  
  console.log(calcTimeSeconds(15000));
  console.log(calcTimeMinutes(450));
  console.log(calcTimeHour(45));
  
  
  // Максимум
  let sumFraction = {
    // 1. Складання 2-х об'єктів-дробів.
    sum: function(a, b) {
      return `${a} + ${b} = ${(a + b).toFixed(2)}`;
    },
    // 2. Віднімання 2-х об'єктів-дробів.
    diff: function(a, b) {
      return `${a} - ${b} = ${(a - b).toFixed(2)}`;
    },
    // 3. Множення 2-х об'єктів-дробів.
    product: function (a, b) {
      return `${a} * ${b} = ${(a * b).toFixed(2)}`;
    },
    // 4. Ділення 2-х об'єктів-дробів.
    quotient: function (a, b) {
      return `${a} / ${b} = ${(a / b).toFixed(2)}`;
    },
    // 5. Скорочення об'єкта-дробу.
    fraction_reduction: function (a) {
      return `${a} = ${Math.round(a)}`;
    }
  }
  
  console.log(sumFraction.sum(0.7, 0.4));
  console.log(sumFraction.diff(0.99, 0.12));
  console.log(sumFraction.product(1.44, 9.21));
  console.log(sumFraction.quotient(2.23, 4.56));
  console.log(sumFraction.fraction_reduction(7.33));
