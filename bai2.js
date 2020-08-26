class Meal {
    name;
    foods;
    dateModified;

    constructor(name, foods, dateModified) {
        this.name = name;
        this.foods = foods;
        this.dateModified = dateModified;
    }
    addFood() {
        console.log();
    }
    calculatePrice() {
        console.log();
    }
    show() {
        console.log(`
        Bữa ăn hôm nay là :${this.name}
        Các món ăn gồm : ${this.foods}
        Ngày ăn :${this.dateModified}
        `)
    }
}

class VegetableMeal extends Meal {
    constructor(name,foods,dateModified){
        super(name,foods,dateModified)
    }
    addFood() {
        console.log();
    }
    calculatePrice() {
        console.log();
    }
}


class NonVegetableMeal extends Meal {
    constructor(name,foods,dateModified){
        super(name,foods,dateModified)
    }
    addFood() {
        console.log();
    }
    calculatePrice() {
        console.log();
    }
}

class Food {
    name;
    luxuriousName;
    price;

    constructor(name, luxuriousName, price) {
        this.name = name;
        this.luxuriousName = luxuriousName;
        this.price = price;
    }
}

class VegetableFood extends Food {
    constructor(name,luxuriousName,price){
        super(name,luxuriousName,price)
    }
}
class NonVegetableFood extends Food {
    constructor(name,luxuriousName,price){
        super(name,luxuriousName,price)
    }
}