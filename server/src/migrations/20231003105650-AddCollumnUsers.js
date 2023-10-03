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
    await queryInterface.addColumn('Users', 'linkFacebook',
      {
        type: Sequelize.STRING,
      },
      {
        after: 'coverImage'
      }
    )
    await queryInterface.addColumn('Users', 'phoneNumber',
      {
        type: Sequelize.STRING,
      },
      {
        after: 'coverImage'
      }
    )
    await queryInterface.addColumn('Users', 'linkZalo',
      {
        type: Sequelize.STRING,
      },
      {
        after: 'coverImage'
      }
    )
    await queryInterface.addColumn('Users', 'linkInstagram',
      {
        type: Sequelize.STRING,
      },
      {
        after: 'coverImage'
      }
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Users', 'linkFacebook')
    await queryInterface.removeColumn('Users', 'linkInstagram')
    await queryInterface.removeColumn('Users', 'phoneNumber')
    await queryInterface.removeColumn('Users', 'linkZalo')
  }
};
