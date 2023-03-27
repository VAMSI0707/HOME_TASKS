const User = require('../models/dataaccess');


async function getUserById(id) {
    return User.findByPk(id);
}

async function createUser(user) {
    return User.create(user);
}

async function updateUser(id, user) {
    const existingUser = await this.getUserById(id);
    if (existingUser) {
        return existingUser.update(user);
    }
    return null;
}

async function getAutoSuggestUsers(loginSubstring, limit) {
    return User.findAll({
        where: {
            login: {
                [Op.iLike]: `%${loginSubstring}%`,
            },
            isDeleted: false,
        },
        order: [
            ['login', 'ASC'],
        ],
        limit,
    });
}

async function removeUser(id) {
    const existingUser = await this.getUserById(id);
    if (existingUser) {
        return existingUser.update({ isDeleted: true });
    }
    return null;
}


module.exports = {createUser,getUserById,updateUser,getAutoSuggestUsers,removeUser};
