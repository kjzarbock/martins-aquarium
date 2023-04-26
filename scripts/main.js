import { getFish } from "./database.js"
import { FishList } from "./fish/fishlist.js"

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
    const parentHTMLElement = document.querySelector(".list")


    parentHTMLElement.innerHTML = FishList()
    const allFish = getFish()
    
    for (const fish of allFish) {
        //console.log(fish)
    }