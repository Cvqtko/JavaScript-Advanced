class Kitchen {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }
 
    loadProducts(arrOfStrings) {
        for (let product of arrOfStrings) {
            let [productName, productQuantity, productPrice] = product.split(" ");
            if (this.budget >= Number(productPrice)) {
                this.budget -= Number(productPrice);
 
                if (this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] += productQuantity;
                } else {
                    this.productsInStock[productName] = productQuantity;
                }
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`); //test 3
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`); //test 4
            }
        }
        return this.actionsHistory.join("\n"); //test 5
    }
 
    // meal => string | materials => array of strings | price => number
    addToMenu(meal, materials, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return (`The ${meal} is already in our menu, try something different.`);    //test 7
        } else {
            this.menu[meal] = {
                products: materials,
                price: price
            };
            return (`Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`); //?? test 6
        }
    }
 
    showTheMenu() {
        let output = [];
        for (let key of Object.keys(this.menu)) {
            output.push(`${key} - $ ${this.menu[key].price}`)
        }
        if (output.length === 0) {    //needed for test 8
            return (`Our menu is not ready yet, please come later...`);
        }
        return output.join("\n") + "\n";    //?? + "\n" needed for test 9 ??
    }
 
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return (`There is not ${meal} yet in our menu, do you want to order something else?`);
        }
        let neededProducts = this.menu[meal].products;
 
        for (let product of neededProducts) {
            let [productName, neededQuantity] = product.split(" ");
            if (this.productsInStock[productName] < neededQuantity || !this.productsInStock.hasOwnProperty(productName)) {
                return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`); //test 15;
            }
        }
 
        for (let token of neededProducts) {
            let [productName, neededQuantity] = token.split(" ");
            this.productsInStock[productName] -= Number(neededQuantity);
        }
        this.budget += Number(this.menu[meal].price);
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`; //test 13
    }
}
 
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());
// console.log(kitchen.makeTheOrder('frozenYogurt'));