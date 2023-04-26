const database = {
    fish: [
        {
            image: "https://images.theconversation.com/files/238687/original/file-20181001-195278-tmwz82.jpg?ixlib=rb-1.1.0&rect=0%2C11%2C3884%2C2581&q=45&auto=format&w=926&fit=clip",
            species: "clownfish",
            length: 30,
            name: "Bart",
            food: "crustaceans",
            location: "ocean"
        },
        {
            image: "https://magazine.outdoornebraska.gov/wp-content/uploads/2019/03/fishstockingRBTngpc.jpg",
            species: "Trout",
            length: 12,
            name: "Bobby",
            food: "Insects",
            location: "River"
          },
          {
            image: "https://oceana.org/wp-content/uploads/sites/18/noaa_atlantic_salmon.jpg",
            species: "Salmon",
            length: 18,
            name: "Sally",
            food: "Shrimp",
            location: "Ocean"
          },
          {
            image: "https://dep.nj.gov/njfw/wp-content/uploads/njfw/largemouth1-edited-scaled.jpg",
            species: "Bass",
            length: 7,
            name: "Benny",
            food: "Small Fish",
            location: "Lake"
          },
          {
            image: "https://media.npr.org/assets/img/2015/01/06/bluefin-tuna-2_custom-808feafef2fcb638e46945e81c26827fd39a25d9-s1100-c50.jpg",
            species: "Tuna",
            length: 24,
            name: "Tommy",
            food: "Squid",
            location: "Ocean"
          },
          {
            image: "https://images.ctfassets.net/pujs1b1v0165/5peHGhWK3qt9eeWSTKJmUq/3c417584cabfb8dba4a9431422899735/catfish.jpg?w=640&fit=fill",
            species: "Catfish",
            length: 16,
            name: "Cleo",
            food: "Worms",
            location: "River"
          },
          {
            image: "https://media.wired2fish.com/uploads/2023/03/hayden-lake-record-northern-pike-2023.webp",
            species: "Pike",
            length: 20,
            name: "Penny",
            food: "Small Fish",
            location: "Lake"
          },
          {
            image: "https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/11/Hackett-2.jpeg?w=1000&h=600&crop=1",
            species: "Carp",
            length: 14,
            name: "Carl",
            food: "Algae",
            location: "Pond"
          },
          {
            image: "https://cdn.shopify.com/s/files/1/0230/8793/9662/files/Nick_Stanczyk_PELAGIC_Mahi_Mahi.jpg?v=1608243144",
            pecies: "Mahi Mahi",
            length: 22,
            name: "Maggie",
            food: "Squid",
            location: "Ocean"
          },
          {
            image: "https://indie88.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-03-at-7.21.11-PM.png",
            species: "Swordfish",
            length: 28,
            name: "Sara",
            food: "Squid",
            location: "Ocean"
          },
          {
            image: "https://www.bundabergnow.com/wp-content/uploads/2023/02/Leroy.jpg",
            species: "Mackerel",
            length: 10,
            name: "Manny",
            food: "Krill",
            location: "Ocean"
          }
    ],
    tips: [
      {
        id: 1,
        text: "Proper Tank Size: Choose an aquarium that provides ample space for your fish to swim comfortably. Each species of fish has specific space requirements, so research their needs and select an appropriately sized tank. Overcrowding can lead to stress, aggression, and poor water quality."
      },
      {
        id: 2,
        text: "Water Quality: Maintaining good water quality is crucial for the health of your fish. Regularly test the water parameters such as pH, ammonia, nitrite, and nitrate levels. Perform partial water changes every 1-2 weeks to remove accumulated toxins and keep the water clean."
      },
      {
        id: 3,
        text: "Temperature and Lighting: Maintain a stable water temperature suitable for your fish species. Use a heater and a thermometer to monitor and regulate the temperature. Additionally, provide appropriate lighting conditions for your fish, ensuring they receive the necessary light-dark cycles."
      },
      {
        id: 4,
        text: "Proper Filtration: A reliable filtration system is essential to remove debris, excess food, and waste products from the water. Choose a filter that suits the size of your tank and follow the manufacturer's instructions for maintenance and replacement of filter media."
      },
      {
        id: 5,
        text: "Balanced Diet: Offer your fish a varied and balanced diet. Research the specific dietary requirements of your fish species and provide a combination of high-quality commercial fish food, live or frozen foods, and fresh vegetables. Feed them in small portions, only what they can consume in a few minutes, to prevent overfeeding and water pollution."
      },
      {
        id: 6,
        text: "Regular Monitoring: Observe your fish regularly to identify any signs of illness, stress, or aggression. Look for changes in behavior, appetite, coloration, or physical abnormalities. Early detection of problems allows for timely intervention and treatment."
      },
      {
        id: 7,
        text: "Compatibility: Choose fish species that are compatible with each other in terms of temperament, size, and water requirements. Some fish may be territorial or aggressive, while others are more peaceful. Avoid keeping incompatible fish together to minimize stress and potential harm."
      },
    ],
    locations: [
      {
        image: "https://a-z-animals.com/media/2022/03/shutterstock_477445750-1024x614.jpg",
        name: "Lake Superior",
        latitude: 47.7,
        longitude: -87.8,
        type: "Freshwater lake"
      },
      {
        image: "https://www.intrepidtravel.com/sites/intrepid/files/styles/large/public/elements/product/hero/vecuador_amazon_jungle-yasuni-river.jpg",
        name: "Amazon River",
        latitude: -3.4653,
        longitude: -62.2159,
        type: "River"
      },
      {
        image: "https://afar.brightspotcdn.com/dims4/default/2480154/2147483647/strip/false/crop/1600x900+0+84/resize/1200x675!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2Fae%2Ffe%2F6496852583abdad7a0a28cc78fb6%2Foriginal-shutterstock-1158634060-20copy.jpg",
        name: "Great Barrier Reef",
        latitude: -18.2871,
        longitude: 147.6992,
        type: "Coral reef"
      },
      {
        image: "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/12/shutterstock_365522495-2.jpg",
        name: "Lake Titicaca",
        latitude: -15.7667,
        longitude: -69.4167,
        type: "Freshwater lake"
      },
      {
        image: "https://images-global.nhst.tech/image/UmZsUzJqUEdHbS93dmJRdW55ZlNyditXdXNLaHQxNERRM255czk3cEpkYz0=/nhst/binary/d7a98abe7a3407ea058536ad74b19a66",
        name: "Gulf of Mexico",
        latitude: 25.9,
        longitude: -89.7,
        type: "Saltwater gulf"
      },
      {
        image: "https://a-z-animals.com/media/2022/06/Shutterstock_2158380095.jpg",
        name: "Nile River",
        latitude: 30.0444,
        longitude: 31.2357,
        type: "River"
      },
      {
        image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/06/Cover-for-lake-baikal.jpg",
        name: "Lake Baikal",
        latitude: 53.4,
        longitude: 108.1,
        type: "Freshwater lake"
      },
      {
        image: "https://astanatimes.com/wp-content/uploads/2019/02/159056-preview-image.jpg",
        name: "Caspian Sea",
        latitude: 41.4,
        longitude: 50.3,
        type: "Saltwater sea"
      },
      {
        image: "https://www.worldatlas.com/upload/73/05/51/mallorca-balearic-islands-spain-vulcano.jpg",
        name: "Mediterranean Sea",
        latitude: 35.9,
        longitude: 18.1,
        type: "Saltwater sea"
      },
      {
        image: "https://travelunicorns.com/media/posts/137/sammy-wong-QHH3WH1ZBsk-unsplash.jpg",
        name: "Victoria Falls",
        latitude: -17.9244,
        longitude: 25.8572,
        type: "Waterfall"
      },
      {
        image: "https://upload.travelawaits.com/ta/uploads/2021/06/shutterstock_1533304598-800x750.jpg",
        name: "Lake Tahoe",
        latitude: 39.0968,
        longitude: -120.0324,
        type: "Freshwater lake"
      }
    ]
}

export const getFish = () => {
  return database.fish.map(fish => ({...fish}))
}
export const getTips = () => {
  return database.tips.map(tips => ({...tips}))
}
export const getLocations = () => {
  return database.locations.map(locations => ({...locations}))
}