const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    
    addDishToCourse(courseName, dishName, dishPrice){
        let dish = {
            name: dishName,
            price: dishPrice,
        }
        this._courses[courseName].push(dish)

    },
    getRandomDishFromCourse(courseName){
        let dishes = this._courses[courseName]
        let index = Math.floor(Math.random() * dishes.length)
        return dishes[index]
    },
    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse('appetizers')
        let mains = this.getRandomDishFromCourse('mains')
        let desserts = this.getRandomDishFromCourse('desserts')
        console.log(`Appetizer: ${appetizer.name}, $${appetizer.price}`)
        console.log(`Main: ${mains.name}, $${mains.price}`)
        console.log(`Desserts: ${desserts.name}, $${desserts.price}`)
        console.log(`Total: $${appetizer.price + mains.price + desserts.price}`)
    }
}

menu.addDishToCourse('appetizers', 'appetizers_1', 10)
menu.addDishToCourse('appetizers', 'appetizers_2', 20)
menu.addDishToCourse('appetizers', 'appetizers_3', 30)
menu.addDishToCourse('mains', 'mains_1', 100)
menu.addDishToCourse('mains', 'mains_2', 200)
menu.addDishToCourse('mains', 'mains_3', 300)
menu.addDishToCourse('desserts', 'desserts_1', 40)
menu.addDishToCourse('desserts', 'desserts_2', 50)
menu.addDishToCourse('desserts', 'desserts_3', 60)

menu.generateRandomMeal()