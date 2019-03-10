// let journalEntries = 
//     {
//     date: "07/24/2018",
//     covered: "Array methods",
//     journal: "We learned about array methods, but only forEach made sense",

//     mood: "Ok"
// };


/*
Purpose: To create, and return, a string template that
represents a single journal entry object as HTML

Arguments: journalEntry (object)
*/
const enterJournal = document.querySelector(".enterylog")

const makeJournalEntryComponent = (journalEnteries) => {
    // Create your own HTML structure for a journal entry
    return `<div>
    <h2>${journalEnteries.journalData}</h2>
    <h3>${journalEnteries.covered}</h3>
    <p>${journalEnteries.journalEntery}</p>
    <h4>${journalEnteries.mod}</h4>
    
    </div> `
}

fetch("http://localhost:3000/entries")
    .then(response => response.json())
    .then(parsedResponse => {
        for (let element of parsedResponse) {
            enterJournal.innerHTML += makeJournalEntryComponent(element)
        }
        console.log(parsedResponse)
    })