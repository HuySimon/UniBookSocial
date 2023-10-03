'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Notifications', 'post',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Posts',
          key: 'id'
        }
      },
      {
        after: 'userReceive'
      })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // await queryInterface.removeConstraint('Notifications', 'notifications_ibfk_3')
    await queryInterface.removeColumn('Notifications', 'post')
  }
};
