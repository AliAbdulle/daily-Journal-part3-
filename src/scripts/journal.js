const journalEntery = document.querySelector(".enterylog")

const makeJournalEntryComponent = (journalEnteries) => {
    // Create your own HTML structure for a journal entry
    return `
    <h3>${journalEnteries.covered}</h3>
    <p>${journalEnteries.journalEntery}</p>
    <h2>${journalEnteries.journalData}</h2>
    
     `
}

fetch("http://localhost:3000/entries")
    .then(response => response.json())
    .then(parsedResponse => {
        for(let currentEl of parsedResponse) {
            journalEntery.innerHTML += makeJournalEntryComponent(currentEl)
        }
        console.log(parsedResponse)
    })