const User = require('../entities/User')
const offBoard = require('../business/offBoard')

module.exports = (repository) => {
    const list = () => {
        return repository.list()
    }

    const select = (name) => {
        return repository.select(name)
    }

    const create = (name, age) => {
        let user = new User(name, age)
        return repository.create(user)
    }

    const _delete = (name) => {
        return repository.delete(name)
    }

    const offBoardUser = (name) => {
        let user = select(name)
        offBoard.closeAccount(user)
        
        return true
    }

    return {
        list,
        select,
        create,
        delete: _delete,
        offBoardUser
    }
}