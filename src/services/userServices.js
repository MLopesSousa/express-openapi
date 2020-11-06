module.exports = (repository) => {
    const list = () => {
        return repository.list()
    }

    const select = (name) => {
        return repository.select(name)
    }

    const create = (name, age) => {
        return repository.create(name, age)
    }

    const _delete = (name) => {
        return repository.delete(name)
    }

    return {
        list,
        select,
        create,
        delete: _delete
    }
}