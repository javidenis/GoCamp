'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [{
      userId: 1,
      spotId: 1,
      description: 'Great Spot',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      spotId: 2,
      description: `one of my hobbies is hiking. and when i'm hiking this works great.`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      spotId: 1,
      description: `I take my family there every weekend`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      spotId: 7,
      description: `Many aligators on this place be careful lol`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      spotId: 1,
      description: `Close to home, you can walk there`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      spotId: 2,
      description: `Yogi the bear is not there`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      spotId: 2,
      description: `Yogi the bear is not there`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      spotId: 3,
      description: `Very dark at night`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      spotId: 3,
      description: `Awesome place for stargazing`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      spotId: 4,
      description: `Bring a coat, it gets cold at night`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      spotId: 4,
      description: `Haven't seen a UFO yet`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      spotId: 5,
      description: `Beautiful place`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      spotId: 5,
      description: `I wish I owned this place`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      spotId: 5,
      description: `Looks like heavean`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      spotId: 6,
      description: `Makes you wonder how long it took those canyons to form`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      spotId: 6,
      description: `Don't get lost there, no phone reception`,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
