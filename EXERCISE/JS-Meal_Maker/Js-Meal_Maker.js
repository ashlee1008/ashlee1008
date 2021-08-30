const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },

    get appetizers() {
        return this._courses.appetizers
    },

    get mains() {
        return this._courses.mains
    },

    get desserts() {
        return this._courses.desserts
    },

    set appetizers(appetizers) {
        this._courses.appetizers = appetizers
    },

    set mains(mains) {
        this._courses.mains = mains
    },

    set desserts(desserts) {
        this._courses.desserts = desserts
    },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            dishName,
            dishPrice
        };
        this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]
        const index = Math.floor(Math.random() * dishes.length)
        return dishes[index]
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice
        return `Your meal is ${appetizer.dishName}, ${main.dishName}, ${dessert.dishName}. The price is $${totalPrice}.`;
    }
}

menu.addDishToCourse('appetizers', 'a', 123)
menu.addDishToCourse('mains', 'a', 123)
menu.addDishToCourse('desserts', 'a', 123)
menu.addDishToCourse('appetizers', 'b', 321)
menu.addDishToCourse('mains', 'b', 321)
menu.addDishToCourse('desserts', 'b', 321)
menu.addDishToCourse('appetizers', 'c', 222)
menu.addDishToCourse('mains', 'c', 222)
menu.addDishToCourse('desserts', 'c', 222)
console.log(menu.generateRandomMeal())
