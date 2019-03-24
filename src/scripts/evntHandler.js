recordButton.addEventListener("click", () => {
    console.log("string")
    let journalEntries = {
        date:journalDate.value,
        concept:covered.value,
        journal: messageInput.value,
        mood:moodInput.value
    }
 api.getPostdata(journalEntries).then(allOutputs.appendDom)
 console.log("string")

})

