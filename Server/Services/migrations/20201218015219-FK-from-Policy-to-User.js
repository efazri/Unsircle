'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Users', {
      fields: ['PolicyId'],
      type: 'foreign key',
      name: 'policy_fkey',
      references: { //Required field
        table: 'Policies',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Users", "policy_fkey")
  }
};
