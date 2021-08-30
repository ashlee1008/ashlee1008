class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumberOfStudents) {
        if (isNaN(newNumberOfStudents)) {
            console.error(
                "Invalid input: numberOfStudents must be set to a Number."
            );
            return;
        }
        this._numberOfStudents = newNumberOfStudents;
    }

    quickFacts() {
        console.log(
            `${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`
        );
    }

    pickSubstituteTeacher(substituteTeachers) {
        const indexOfTeacher = Math.floor(
            Math.random() * substituteTeachers.length
        );
        return indexOfTeacher;
    }


}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "Primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "High", numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        console.log(this._sportsTeams);
    }
}

const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansbury.quickFacts()
lorraineHansbury.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
]);

const alSmith = new HighSchool("Al E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
]);

alSmith.sportsTeams;

class MiddleSchool extends School {
    constructor(name, numberOfStudents, testScores, schoolOverview) {
        super(name, "Middle", numberOfStudents);
        
        this._testScores = testScores;
        this.updateScore();
    
        this._schoolOverview = schoolOverview;
    }

    get averageTestScores() {
       
        return this._averageTestScores;
    }

    get schoolOverview() {
        
        return this._schoolOverview;
    }

    addTestScore(score) {
        
        this._testScores.push(score);
        this.updateScore();
    }

    updateScore() {
        
        let totalScore = 0;
        for (let score of this._testScores) {
            totalScore += score;
        }
        
        this._averageTestScores = totalScore / this._testScores.length;
    }
}

const middleSchool = new MiddleSchool(
    "Al E. Smith",
    415,
    [1, 2, 3, 4],
    "good school"
);
middleSchool.addTestScore(0);
console.log(middleSchool.averageTestScores);


class SchoolCatalog {
    constructor(schools) {
        this._primarySchool = [];
        this._middleSchool = [];
        this._highSchool = [];
        for (const school of schools) {
            switch (school.level) {
                case "Primary":
                    this._primarySchool.push(school);
                case "Middle":
                    this._middleSchool.push(school);
                case "High":
                    this._highSchool.push(school);
            }
        }
    }

    get primarySchool() {
        return this._primarySchool;
    }

    get middleSchool() {
        return this._middleSchool;
    }

    get highSchool() {
        return this._highSchool;
    }
}

const schoolCatalog = new SchoolCatalog([
    middleSchool,
    alSmith,
    lorraineHansbury,
]);
console.log(schoolCatalog.primarySchool);
console.log(schoolCatalog.middleSchool);
console.log(schoolCatalog.highSchool);