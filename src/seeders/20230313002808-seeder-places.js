"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const places = [
      {
        userId: 1,
        name: "Nantahala Outdoor Center",
        description:
          "The Nantahala Outdoor Center is an outdoor recreation company and center located in western North Carolina. It is one of the largest whitewater rafting companies in the world, offering guided trips on the Nantahala, Ocoee, Pigeon, and Chattooga rivers.",
        address: "13077 W Highway 19 W, Bryson City, NC 28713",
        latitude: 35.3622278,
        longitude: -83.5948486,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Bryson City, NC",
        waterType: "Aguas Bravas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Lake Powell",
        description:
          "Lake Powell is a reservoir located in the Glen Canyon National Recreation Area in northern Arizona and southern Utah. It was created by the construction of the Glen Canyon Dam on the Colorado River and is a popular destination for boating and other water sports.",
        address: "Lake Powell, UT 84533",
        latitude: 37.0664618,
        longitude: -111.0263578,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Lake Powell, UT",
        waterType: "Aguas Tranquilas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Ocoee River",
        description:
          "The Ocoee River is a popular whitewater rafting and kayaking destination located in eastern Tennessee. It is dam-controlled, which ensures consistent water flow throughout the summer, and features Class III and IV rapids.",
        address: "Ocoee River, TN",
        latitude: 35.1017106,
        longitude: -84.5802227,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Ocoee River, TN",
        waterType: "Aguas Tranquilas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Rio Upano",
        description:
          "The Rio Upano is a beautiful river in Ecuador known for its stunning waterfalls and clear blue waters. It's a popular spot for canoeing and kayaking enthusiasts looking for a fun and challenging adventure.",
        address: "Unnamed Road, Baños de Agua Santa, Ecuador",
        latitude: -1.386994,
        longitude: -78.426271,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Ecuador",
        waterType: "Aguas Bravas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Bow River",
        description:
          "The Bow River is a beautiful river in Alberta, Canada, known for its crystal clear waters and incredible scenery. It's a popular spot for canoeing, kayaking, and fishing, and is home to a variety of wildlife including eagles, bears, and elk.",
        address: "Bow Valley Pkwy, Banff, AB T0L 0C0, Canada",
        latitude: 51.1785,
        longitude: -115.5747,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Alberta, Canada",
        waterType: "Aguas tranquilas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Wye River",
        description:
          "The Wye River is a beautiful river in Wales, UK, known for its peaceful and serene surroundings. It's a popular spot for canoeing and kayaking enthusiasts looking for a relaxing and scenic adventure.",
        address: "Wye Valley, Wales, UK",
        latitude: 51.9122,
        longitude: -2.6767,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Wales, UK",
        waterType: "Aguas Tranquilas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Kaituna River",
        description:
          "The Kaituna River is a beautiful river in New Zealand, known for its stunning scenery and exhilarating rapids. It's a popular spot for thrill-seeking canoeing and kayaking enthusiasts, with the highlight being the 7-meter Tutea Falls, the highest commercially rafted waterfall in the world.",
        address: "Okere Falls, New Zealand",
        latitude: -38.0108,
        longitude: 176.3911,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "New Zealand",
        waterType: "Aguas Bravas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Boundary Waters Canoe Area Wilderness",
        description:
          "The Boundary Waters Canoe Area Wilderness is a beautiful wilderness area in Minnesota, USA, known for its pristine lakes and untouched natural beauty. It's a popular spot for canoeing and kayaking enthusiasts looking for a true wilderness adventure.",
        address: "1396 MN-169, Ely, MN 55731, USA",
        latitude: 47.9343,
        longitude: -91.6658,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Minnesota, USA",
        waterType: "Aguas Tranquilas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Rio Futaleufú",
        description:
          "The Rio Futaleufú is a world-renowned river for whitewater rafting and kayaking. It is located in the Los Lagos Region of Chile and runs for approximately 124 km. The river offers a range of rapids, including class III, IV, and V, and is surrounded by stunning mountain landscapes.",
        address: "Futaleufú, Los Lagos, Chile",
        latitude: -43.184444,
        longitude: -71.857778,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Chile",
        waterType: "Aguas Bravas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ottawa River",
        description:
          "The Ottawa River is a popular destination for whitewater rafting and kayaking in Canada. It runs for approximately 1,271 km and offers a variety of rapids, including class III, IV, and V. The river is surrounded by beautiful forests and is home to a diverse range of wildlife.",
        address: "Ottawa River, Ontario and Quebec, Canada",
        latitude: 45.687767,
        longitude: -75.477054,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Canada",
        waterType: "Aguas Bravas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Wailua River",
        description:
          "The Wailua River is a scenic river located on the island of Kauai in Hawaii. It is a popular destination for kayaking and offers calm waters suitable for all levels of paddlers. Along the way, visitors can see lush tropical vegetation, waterfalls, and historic sites such as the Fern Grotto.",
        address: "Wailua River, Kauai, Hawaii",
        latitude: 22.04716,
        longitude: -159.358892,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Hawaii",
        waterType: "Aguas Tranquilas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Nahuel Huapi Lake",
        description:
          "Nahuel Huapi Lake is a stunning glacial lake located in the Andes mountains of Argentina. It is a popular destination for kayaking and offers crystal clear waters surrounded by snow-capped peaks and lush forests. The lake is also home to a variety of wildlife, including eagles, condors, and trout.",
        address: "Nahuel Huapi Lake, Patagonia, Argentina",
        latitude: -41.166542,
        longitude: -71.50515,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Argentina",
        waterType: "Aguas Tranquilas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Soca River",
        description:
          "The Soca River is a picturesque river located in Slovenia. It is a popular destination for whitewater rafting and kayaking, offering a variety of rapids ranging from class II to class V. The river runs through the Julian Alps and is surrounded by stunning mountain landscapes.",
        address: "Soca River, Slovenia",
        latitude: 46.2577,
        longitude: 13.7407,
        images: JSON.stringify([
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WW_Open_Canoe_in_Big_Water.png",
          }, 
          {
            url: "https://cdn.britannica.com/69/155969-050-CF4B71FA/kayaker-ocean-waves.jpg",
          }
        ]),
        location: "Slovenia",
        waterType: "Aguas Bravas",
        createdAt: new Date(),
        updatedAt: new Date(),
      }];
    await queryInterface.bulkInsert("Places", places, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Places", null, {});
  },
};
