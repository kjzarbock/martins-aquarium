import { getLocations } from "../database.js"

export const locationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationList">'

    // Create HTNL representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location_card">
        <div><img  class="location_img" src="${location.image}" /></div>
        <div class="location_name">Location Name: ${location.name}</div>
        <div class="location__latitude">Latitude: ${location.latitude}</div>
        <div class="location__longitude">Longitude: ${location.longitude}</div>
        <div class="location__location">Water type: ${location.type}</div>
        <br>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
