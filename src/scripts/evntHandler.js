const recordEntry = document.getElementById("record-entry")
recordEntry.addEventListener("click", () =>{
    let journalEntries = {
    date:journalDate.value,
    concept:covered.value,
    journalEntry: journal.value,
    moodInput:mood.value
    }
    console.log(journalEntries)
 api.getPostdata(journalEntries)
})
