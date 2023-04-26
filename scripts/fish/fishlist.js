import { getFish } from "../database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length}</div>
            <div class="fish__location">Location Harvested: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

const fishCopy = getFish()

export const mostHolyFish = () => {
    const holyFish = []
    for (const fish of fishCopy) {
        if (fish.length % 3 === 0){
            holyFish.push(fish)
        }
    }
    return holyFish
}
console.log(mostHolyFish())

export const soldierFish = () => {
    const soldiers = []
    for (const fish of fishCopy) {
        if (fish.length % 5 === 0){
            soldiers.push(fish)
        }
    } 
    return soldiers
}
console.log(soldierFish())

export const nonHolyFish = () => {
    const regularFish = []
    for (const fish of fishCopy) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0){
            regularFish.push(fish)
        }
    }
    return regularFish
}
console.log(nonHolyFish())
