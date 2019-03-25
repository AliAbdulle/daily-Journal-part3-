const domOutput = document.querySelector("#output")
const outputDiv = document.createElement("div")
domOutput.appendChild(outputDiv)
const allOutputs = {
    appendDom() {
        api.getApiData()
            .then(entries => {
                entries.forEach((entry) => {
                    console.log(entry)
                    const date = document.createElement("p")
                    date.textContent = entry.date
                    outputDiv.appendChild(date)
                    const concept = document.createElement("h2")
                    concept.textContent = entry.concept
                    outputDiv.appendChild(concept)
                    const journalEntry = document.createElement("p")
                    journalEntry.textContent = entry.journal
                    outputDiv.appendChild(journalEntry)
                    const mood = document.createElement("h3")
                    mood.textContent = entry.mood
                    outputDiv.appendChild(mood)
                })
            })

    }

}