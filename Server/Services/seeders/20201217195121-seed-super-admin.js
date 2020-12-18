'use strict';
const fs = require ('fs')
const bcryptjs = require ('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync('./database/admin.json', 'utf-8'))
    data.forEach(datum => {
      datum.createdAt = new Date()
      datum.updatedAt = new Date()
      const salt = bcryptjs.genSaltSync(10)
      const hash = bcryptjs.hashSync(datum.password, salt)
      datum.password = hash
    })

    await queryInterface.bulkInsert('Users', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {})
  }
};
