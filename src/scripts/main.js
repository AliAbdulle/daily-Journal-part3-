const domOutput = document.querySelector("#ouput")
const domArticle = document.createElement("div")
const renderJournalEntries = (journal) => {
    journal.forEach(journalEntries => {
        domArticle.innerHTML += display(journalEntries)
    })
}