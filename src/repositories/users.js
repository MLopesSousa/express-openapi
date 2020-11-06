const User = require('../entities/User');

let users = [new User('Marcelo', 32), new User('Lopes', 32), new User('Sousa', 32), new User('Lima', 32)]


const list = () => {
    return users
}

const select = (name) => {
    return users.filter(user => {
        return user.name == name
    })[0]
}

const create = (name, age) => {
    const user = new User(name, age)

    if(user.validate()) {
        users.push(user)
        return users
    } else {
        return null;
    }
    
}

const _delete = (name) => {
    const user = select(name)

    if(!user) return false

    users = users.filter(user => {
        return user.name != name
    })

    return true
}

module.exports = {
   list,
   select,
   create,
   delete: _delete
}