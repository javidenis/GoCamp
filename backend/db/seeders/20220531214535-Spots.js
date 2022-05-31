'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Spots', [{
        name: "Lincoln Park",
        city: 'Chicago',
        state: 'Illinois',
        image: 'https://www.worldatlas.com/upload/5f/4a/08/shutterstock-704675365.jpg',
        price: 10,
        description: `Lincoln Park is a designated community area on the 
        North Side of Chicago, Illinois. Lying to the west of Lincoln Park, 
        Chicago's largest park, it is one of the most affluent neighborhoods 
        in Chicago.`,
        userId: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Spots', null, {});
  }
};
