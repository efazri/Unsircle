'use strict';
const fs = require ('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync('./database/policy.json', 'utf-8'))
    data.forEach(datum => {
      datum.createdAt = new Date()
      datum.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Policies', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Policies', null, {})
  }
};
