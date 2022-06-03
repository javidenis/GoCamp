'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [{
      userId: 1,
      spotId: 1,
      description: 'Great Spot',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
