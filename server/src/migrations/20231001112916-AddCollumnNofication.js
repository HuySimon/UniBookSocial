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
    // await queryInterface.addConstraint('Notifications', {
    //   fields: ['post'],
    //   type: 'foreign key',
    //   name: 'notifications_ibfk_3',
    //   references: { //Required field
    //     table: 'Posts',
    //     field: 'id'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // })
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
