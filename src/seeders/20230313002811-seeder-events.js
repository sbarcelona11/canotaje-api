"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const events = [
      {
        userId: 1,
        placeId: 1,
        name: "Kayaking and Hiking Day Trip",
        description:
          "Join us for a day of adventure and exploration as we kayak and hike along the beautiful Lake Tahoe shoreline. We'll paddle through the crystal-clear waters, hike through the forested trails, and enjoy a picnic lunch with stunning views.",
        date: "2023-06-15",
        images: JSON.stringify([ 
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        placeId: 2,
        name: "Whitewater Rafting Weekend",
        description:
          "Experience the thrill of whitewater rafting on the rapids of the Ocoee River. We'll provide all the gear, including helmets, life vests, and paddles. You'll need to bring your sense of adventure!",
        date: "2023-07-20",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        placeId: 3,
        name: "Canoeing and Wildlife Watching",
        description:
          "Join us for a relaxing day of canoeing and wildlife watching on the calm waters of the Waccamaw River. We'll paddle through cypress swamps and see alligators, turtles, and a variety of bird species.",
        date: "2023-08-05",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        placeId: 4,
        name: "Kayaking and Wine Tasting",
        description:
          "Experience the beauty of the Russian River Valley as we kayak down the river and stop at local wineries for tastings. We'll paddle through gentle rapids and take in the stunning scenery of vineyards and redwood trees.",
        date: "2023-09-01",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        placeId: 5,
        name: "Whitewater Rafting on the Gauley River",
        description:
          "Take on the heart-pumping rapids of the Gauley River in West Virginia. We'll spend two days navigating some of the best whitewater in the country, with plenty of thrills and spills along the way.",
        date: "2023-10-15",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        placeId: 6,
        name: "Kayaking and Camping in the Adirondacks",
        description:
          "Join us for a weekend of kayaking, camping, and exploring the Adirondack Mountains. We'll paddle on pristine lakes, hike through the woods, and roast marshmallows around the campfire at night.",
        date: "2023-06-25",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        placeId: 7,
        name: "Kayaking Adventure",
        description:
          "Experience the thrill of kayaking through the rapids of the Ocoee River",
        date: "2023-06-27",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        placeId: 8,
        name: "Kayaking tour of the San Juan Islands",
        description:
          "Join us for a fun and adventurous rafting and camping trip on the beautiful Ocoee River. We will explore the stunning scenery of the surrounding mountains and forests while navigating the exciting rapids of the river.",
        date: "2023-06-28",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        placeId: 9,
        name: "Rafting and camping trip",
        description:
          "Explore the stunning beauty of the San Juan Islands on this guided kayaking tour. We will paddle through pristine waters and scenic coves while enjoying the abundant wildlife and breathtaking views.",
        date: "2023-06-27",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        placeId: 10,
        name: "Whitewater kayaking clinic",
        description:
          "Take your kayaking skills to the next level with this intensive clinic taught by world-class instructors. We will focus on advanced techniques for navigating the challenging whitewater rapids of the Ocoee River.",
        date: "2023-07-12",
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Events", events, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Events", null, {});
  },
};
