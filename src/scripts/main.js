const domOutput = document.querySelector("#ouput")
const domArticle = document.createElement("div")
domArticle.id = domArticle
const renderJournalEntries = (journal) => {
    journal.forEach(entries => {
        domArticle.innerHTML += display(entries)
    })
    domOutput.appendChild(domArticle)
}