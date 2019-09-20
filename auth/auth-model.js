const data = require('../database/dbConfig')

module.exports = {
    findBy,
    add,
}

function findBy(item) {
    return data('users').where(item)
}

async function add(user) {
    const [id] = await data('users').insert(user)
}