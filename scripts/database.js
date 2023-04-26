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
    ]
}

export const getFish = () => {
  return database.fish.map(fish => ({...fish}))
}