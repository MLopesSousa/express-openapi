class User {
    constructor(name, age) {
        this.name = name;
        this.age = parseInt(age)
    }

    validate() {
        return this.age > 0
    }
}

module.exports = User