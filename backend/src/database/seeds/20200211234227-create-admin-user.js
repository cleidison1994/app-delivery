/* eslint-disable linebreak-style */
const bcrypt = require('bcryptjs');

module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert(
            'users',
            [
                {
                    name: 'Distribuidora FastFeet',
                    email: 'admin@fastfeet.com',
                    password_hash: bcrypt.hashSync('123456', 8),
                    is_admin: true,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            {}
        );
    },
    down: queryInterface => {
        return queryInterface.bulkDelete('users', null, {});
    }
};
