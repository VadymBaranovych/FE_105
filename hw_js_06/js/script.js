let listProduct = [],
  answer = {
    min1: [
      {productsName: 'Волоський горіх', quantity: 60, purchase: true, price: 39, total: function() {return this.quantity * this.price}},
      {productsName: 'Кешью', quantity: 138, purchase: true, price: 66, total: function() {return this.quantity * this.price}},
      {productsName: 'Фісташки', quantity: 38, purchase: false, price: 79, total: function() {return this.quantity * this.price}},
      {productsName: 'Пекан', quantity: 69, purchase: true, price: 101, total: function() {return this.quantity * this.price}},
      {productsName: 'Бразильський горіх', quantity: 19, purchase: false, price: 86, total: function() {return this.quantity * this.price}},
      {productsName: 'Фундук', quantity: 88, purchase: false, price: 99, total: function() {return this.quantity * this.price}},
      {productsName: 'Макадамія', quantity: 28, purchase: true, price: 122, total: function() {return this.quantity * this.price}},
      {productsName: 'Арахіс', quantity: 43, purchase: true, price: 65, total: function() {return this.quantity * this.price}},
      {productsName: 'Водяний горіх', quantity: 111, purchase: false, price: 123, total: function() {return this.quantity * this.price}},
      {productsName: 'Кедровий горіх', quantity: 54, purchase: true, price: 147, total: function() {return this.quantity * this.price}},
    ],
    min1_1: function () {
      this.min1.forEach((element) => {
        if (element.purchase === true) {
          listProduct.push(element.productsName + ": придбані");
        } else if (element.purchase === false) {
          listProduct.unshift(element.productsName + ": непридбані");
        }
      });
      return listProduct;
    },
    min1_2: function (productName) {
      for (let i = 0; i < this.min1.length; i++) {
        if (this.min1[i].productsName === productName) {
          this.min1[i].purchase = true;
          return `Товар ${productName} купили.`;
        }
      }
      return `Товару ${productName} немає у списку.`;
    },
  };

console.log(answer.min1); /* Мінімум 1 */
console.log(answer.min1_1()); /* Мінімум 1.1 */
console.log(answer.min1_2('Фісташки')); /* Мінімум 1.2 */
