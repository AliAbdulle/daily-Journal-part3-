const journalEnteries = document.querySelector(".enterylog")

const makeJournalEntryComponent = (journalEntery) => {

    const covered = document.querySelector("#covered").value;
    const journal = document.querySelector("#journal").value;
    const journalData = document.querySelector("#journalData").value;
    // Create your own HTML structure for a journal entry
    journalEntery.innerHTML += `
    <h3>${covered}</h3>
    <p>${journal}</p>
    <h2>${journalData}</h2>
     `
}

fetch("http://localhost:3000/entries")
    .then(response => response.json())
    .then(parsedResponse => {
        for(let currentEl of parsedResponse) {
            //console.log(parsedResponse)
    journalEntery.innerHTML += makeJournalEntryComponent(currentEl)
        }
        console.log(parsedResponse)
    })