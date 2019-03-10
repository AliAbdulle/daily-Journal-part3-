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

const makeJournalEntryComponent = (journalEntery) => {
    // Create your own HTML structure for a journal entry
    return `<div>
    <h2>${journalEntery.date}</h2>
    <h3>${journalEntery.covered}</h3>
    <p>${journalEntery.journal}</p>
    <h4>${journalEntery.mood}</h4>
    
    </div> `
}

fetch("http://localhost:3000/entries")
    .then(response => response.json())
    .then(parsedResponse => {
        for (let currentElemet of parsedResponse) {
            enterJournal.innerHTML += makeJournalEntryComponent(currentElemet)
        }
        console.log(parsedResponse)
    })