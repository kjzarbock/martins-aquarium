import { getTips } from "../database.js"

export const tipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipList">'

    // Create HTNL representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tip card">
            <div class="tip_id">${tip.id}. ${tip.text}</div>
            <br>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

