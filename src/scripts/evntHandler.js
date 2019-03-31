const clearElement = domElement => {
    while (domElement.firstChild) {
        domElement.removeChild(domElement.firstChild);
    }
}

recordButton.addEventListener("click", () => {
    const domOutput = document.querySelector("#output")
    console.log("string")
    let journalEntries = {
        date: journalDate.value,
        concept: covered.value,
        journal: messageInput.value,
        mood: moodInput.value
    }
    clearElement(domOutput)
    api.getPostdata(journalEntries).then(allOutputs.appendDom)

    console.log("string")

})