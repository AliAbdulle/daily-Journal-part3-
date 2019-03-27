//building DOM Container for all entity
const display = document.querySelector("#display-container")
const header = document.createElement("dive")
const title = document.createElement("h1")
title.textContent = "Welcome to Ali Abdulle Daily Journal Entry";
header.appendChild(title)
display.appendChild(header)

//Date Entry
const date = document.createElement("fieldset")
display.appendChild(date)
const dateLabel =document.createElement("label")
dateLabel.textContent = "Journal Date Entry:"
const journalDate = document.createElement("input")
journalDate.id ="journalDate"
journalDate.setAttribute("type", "date")

date.appendChild(dateLabel)
date.appendChild(journalDate)

//Concept
const concepts = document.createElement("fieldset")
display.appendChild(concepts)
const conceptsLabel = document.createElement("h4")
conceptsLabel.textContent = "Concepts Covered:"
const conceptsCovered = document.createElement("input")
conceptsCovered.id = "covered"

concepts.appendChild(conceptsLabel)
concepts.appendChild(conceptsCovered)

//Journal Entry
const textField = document.createElement("fieldset")
display.appendChild(textField)
const messageLabel = document.createElement("h4")
messageLabel.textContent = "Daily Journal:"
const messageInput = document.createElement("input")
messageInput.id = "journal"

textField.appendChild(messageLabel)
textField.appendChild(messageInput)

//Feeling Mood
const moodOtion = ["Ok", "Sad", "Happy"]
const moodField = document.createElement("fieldset")
display.appendChild(moodField)
const moodLabel = document.createElement("h4")
moodLabel.textContent = "Mood of the Day:"
const moodInput = document.createElement("Select")
moodInput.id = "mood"
moodOtion.forEach(mood => {
    const moodOption = document.createElement("option")
    moodOption.setAttribute = ("value", mood)
    moodOption.textContent = mood
    moodInput.appendChild(moodOption)

    moodField.appendChild(moodLabel)
    moodField.appendChild(moodInput)
})


//Button Record
const recordButton = document.createElement("button")
recordButton.id = "record-entry"
recordButton.textContent = "Record Journal Entry"
display.appendChild(recordButton)

const clearElemet = domElement => {
    while(domElement.firstChild) {
        return domElement.removeChild(domElement.firstChild)
    }
}