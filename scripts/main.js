import { getFish } from "./database.js"
import { FishList } from "./fish/fishlist.js"
import { tipList } from "./tips/tips.js"
import { getTips } from "./database.js"
import { getLocations } from "./database.js"
import { locationList } from "./locations/locations.js"

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const htmlLocations = document.querySelector(".locations_card")
const parentHTMLElement = document.querySelector(".list")
const tipHTMLElement = document.querySelector(".tips")

htmlLocations.innerHTML = locationList()
for (const location of getLocations()) {
    console.log(location)
}

tipHTMLElement.innerHTML = tipList()
for (const tip of getTips()) {
    console.log(tip)
}
parentHTMLElement.innerHTML = FishList()
const allFish = getFish()
    
for (const fish of allFish) {
    console.log(fish)
}