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
      userId: 1,
      createdAt: new Date()
    }, {
      name: "Yellowstone National Park",
      city: 'Yellowstone National Park',
      state: 'Wyoming',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/YellowstonefallJUN05.JPG',
      price: 20,
      description: `Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation
        area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana
        and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests,
        hot springs and gushing geysers, including its most famous, Old Faithful. It's also home 
        to hundreds of animal species, including bears, wolves, bison, elk and antelope.`,
      userId: 2,
      createdAt: new Date()
    }, {
      name: "Death Valley National Park",
      city: 'Death Valley National Park',
      state: 'California',
      image: 'https://npca.s3.amazonaws.com/images/8833/f619e4f0-bbd7-453c-a9bd-dc823684d174-banner.jpg?1445970801',
      price: 15,
      description: `Death Valley National Park straddles eastern California and Nevada.
      It’s known for Titus Canyon, with a ghost town and colorful rocks, and Badwater 
      Basin’s salt flats, North America's lowest point. Above, Telescope Peak Trail 
      weaves past pine trees. North of the spiky salt mounds known as the Devil’s Golf Course,
      rattlesnakes live in Mesquite Flat Sand Dunes.`,
      userId: 2,
      createdAt: new Date()
    }, {
      name: "Great Basin National Park",
      city: 'Great Basin National Park',
      state: 'Nevada',
      image: 'https://npca.s3.amazonaws.com/images/8836/6ac52280-7e56-49ef-ad62-591427eb9308-banner.jpg?1445970809',
      price: 20,
      description: `Great Basin National Park is in eastern Nevada near the Utah border. 
      It's in the Great Basin Desert and contains most of the South Snake mountains. 
      In the north, the mountain-hugging Wheeler Peak Scenic Drive leads to towering Wheeler Peak. 
      Nearby is one of several ancient bristlecone pine groves. The marble Lehman Caves have 
      distinctive stalactites and other formations. Park wildlife includes bighorn sheep.`,
      userId: 2,
      createdAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
