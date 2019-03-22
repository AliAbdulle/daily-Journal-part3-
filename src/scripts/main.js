let journalEntries =
    {
    date: "07/24/2018",
    covered: "Array methods",
    journal: "We learned about array methods, but only forEach made sense",
    mood: "Ok"
}



/*
Purpose: To create, and return, a string template that
represents a single journal entry object as HTML

Arguments: journalEntry (object)
*/
const enterJournal = document.querySelectorAll(".enterylog")

const makeJournalEntryComponent = (date, covered, journal,mood) =>{
    // Create your own HTML structure for a journal entry
    return `<div>
    <h2>${date}</h2>
    <h3>${covered}</h3>
    <p>${journal}</p>
    <h4>${mood}</h4>

    </div> `
}
makeJournalEntryComponent(journalEntries)

const renderJournalEntries = (date, covered, journal,mood) => {
    journalEntries = {};
    journalEntries.date = date;
    journalEntries.covered = covered;
    journalEntries.journal = journal;
    journalEntries.mood = mood;
    return journalEntries

}

console.table(journalEntries)

// Invoke the render function
renderJournalEntries(journalEntries)