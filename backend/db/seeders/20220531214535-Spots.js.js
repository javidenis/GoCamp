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
    }, {
      name: "Yosemite National Park",
      city: 'Yosemite',
      state: 'California',
      image: 'https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/09/1140-yosemite-hero.imgcache.rev.web.1740.1000.jpg',
      price: 30,
      description: `Yosemite National Park is in California’s Sierra Nevada mountains.
      It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic
      vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.
      In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the
      Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white 
      landscapes of the area.`,
      userId: 1,
      createdAt: new Date()
    }, {
      name: "Grand Canyon National Park",
      city: 'Grand Canyon National Park',
      state: 'Arizona',
      image: 'https://media.cntraveler.com/photos/5ebeef63f52f4c0911cac483/master/pass/GrandCanyonNationalPark-2020-GettyImages-858637934.jpg',
      price: 25,
      description: `Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon,
      with its layered bands of red rock revealing millions of years of geological history.
      Viewpoints include Mather Point, Yavapai Observation Station and architect Mary Colter’s
      Lookout Studio and her Desert View Watchtower. Lipan Point, with wide views of the canyon
      and Colorado River, is a popular, especially at sunrise and sunset.`,
      userId: 1,
      createdAt: new Date()
    }, {
      name: "Everglades National Park",
      city: 'Everglades National Park',
      state: 'Florida',
      image: 'https://www.evergladesholidaypark.com/images/20111007160144-1024x682.jpg',
      price: 5,
      description: `Everglades National Park is a 1.5-million-acre wetlands preserve on the
      southern tip of the U.S. state of Florida. Often compared to a grassy, slow-moving river,
      the Everglades is made up of coastal mangroves, sawgrass marshes and pine flatwoods 
      that are home to hundreds of animal species. Among the Everglades' abundant wildlife 
      are the endangered leatherback turtle, Florida panther and West Indian manatee. `,
      userId: 3,
      createdAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
