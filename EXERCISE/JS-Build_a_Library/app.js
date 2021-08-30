class Media {
    constructor(title, isCheckedOut = false, ratings = []){
        this._title = title,
        this._isCheckedOut = isCheckedOut,
        this._ratings = ratings
    }
    get title() {
        return this._title
    }
    get isCheckedOut(){
        return this._isCheckedOut
    }
    get ratings(){
        return this._ratings
    }
    set title(title){
        this._title = title
    }
    set isCheckedOut(isCheckedOut){
        this._isCheckedOut = isCheckedOut
    }
    set ratings(ratings){
        this._ratings = ratings
    }
    toggleCheckOutStatus(){
        this.isCheckedOut = !this.isCheckedOut;
    }
    getAverageRating(){
        let sum = this.ratings.reduce((acc, cur) => {
            return acc + cur
        })
        let average = sum / this.ratings.length
        return average
        
    }
    addRating(score){
        score = Number(score)
        score < 1 ? 1 : score;
        score > 5 ? 5 : score;
        this.ratings.push(score)
    }
}

class Book extends Media {
    constructor(author, title, pages, isCheckedOut, ratings){
        super(title, isCheckedOut, ratings);
        this._author = author;
        this._pages = pages;
    }
    get author(){return this._author}
    get pages(){return this._pages}
    set author(author){this._author = author}
    set pages(pages){this._pages = pages}

    getAverageRating(){
        return super.getAverageRating()
    }
    toggleCheckOutStatus(){
        return super.toggleCheckOutStatus()
    }
    addRating(score){
        return super.addRating(score)
    }
}

class Movie extends Media {
    constructor(director, title, runTime, isCheckedOut, ratings){
        super(title, isCheckedOut, ratings);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){return this._director}
    get runTime(){return this._runTime}
    set director(director){this._director = director}
    set runTime(runTime){this._runTime = runTime}
}


class CD extends Media{
    constructor(title){
        super(title);
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus()
console.log(`Is A Short History of Nearly Everything checked out? ${historyOfEverything.isCheckedOut}`)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(`Rating of A Short History of Nearly Everything: ${historyOfEverything.getAverageRating()}`)



const speed = new Movie('Jan de Bont', 'Speed', 116)

speed.toggleCheckOutStatus()

console.log(`Is Speed checked out? ${speed.isCheckedOut}`)

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(`Rating of Speed: ${speed.getAverageRating()}`)

