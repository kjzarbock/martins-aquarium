const database = {
    fish: [
        {
            species: "clownfish",
            length: 30,
            name: "Bart",
            food: "crustaceans",
            location: "ocean"
        },
        {
            species: "Trout",
            length: 12,
            name: "Bobby",
            food: "Insects",
            location: "River"
          },
          {
            species: "Salmon",
            length: 18,
            name: "Sally",
            food: "Shrimp",
            location: "Ocean"
          },
          {
            species: "Bass",
            length: 8,
            name: "Benny",
            food: "Small Fish",
            location: "Lake"
          },
          {
            species: "Tuna",
            length: 24,
            name: "Tommy",
            food: "Squid",
            location: "Ocean"
          },
          {
            species: "Catfish",
            length: 16,
            name: "Cleo",
            food: "Worms",
            location: "River"
          },
          {
            species: "Pike",
            length: 20,
            name: "Penny",
            food: "Small Fish",
            location: "Lake"
          },
          {
            species: "Carp",
            length: 14,
            name: "Carl",
            food: "Algae",
            location: "Pond"
          },
          {
            species: "Mahi Mahi",
            length: 22,
            name: "Maggie",
            food: "Squid",
            location: "Ocean"
          },
          {
            species: "Swordfish",
            length: 28,
            name: "Sara",
            food: "Squid",
            location: "Ocean"
          },
          {
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