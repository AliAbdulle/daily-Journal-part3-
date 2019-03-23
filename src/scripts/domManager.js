const display = document.querySelector("#display-container")
const header = document.createElement("dive")
const title = document.createElement("h1")
title.textContent = "Welcome to Ali Abdulle Daily Journal Entry";
header.appendChild(title)
display.appendChild(header)

const date = document.createElement("fieldset")
display.appendChild(date)
const dateLabel =document.createElement("label")
dateLabel.textContent = "Date Entry:"
const journalData = document.createElement("input")
journalData.id ="journalData:"
journalData.setAttribute("type", "date")


date.appendChild(dateLabel)
date.appendChild(journalData)

const concepts = document.createElement("fieldset")
display.appendChild(concepts)
const conceptsLabel =document.createElement("label")
conceptsLabel.textContent = "Concepts covered:"
const conceptsCovered = document.createElement("input")
conceptsCovered.id ="covered"

concepts.appendChild(conceptsLabel)
concepts.appendChild(conceptsCovered)

const textField = document.createElement("fieldset")
display.appendChild(textField)
const messageLabel =document.createElement("label")
messageLabel.textContent = "Journal Message:"
const messageInput = document.createElement("input")
messageInput.id ="journal"


textField.appendChild(messageLabel)
textField.appendChild(messageInput)

const moodOtion = ["Ok", "Sad", "Happy"]
const moodField = document.createElement("fieldset")
display.appendChild(moodField)
const moodLabel =document.createElement("label")
moodLabel.textContent = "Mood of the Day:"
const moodInput = document.createElement("Select")
moodInput.id = "mood"
moodOtion.forEach(mood => {
    const moodOption = document.createElement("option")
    moodOption.setAttribute = ("value", mood)
    moodOption.textContent = mood
    moodInput.appendChild(moodOption)
})

moodField.appendChild(moodLabel)
moodField.appendChild(moodInput)

const recordButton = document.createElement("button")
recordButton.id = "record-entry"
recordButton.textContent = "Record Journal Entry"
display.appendChild(recordButton)
recordButton.addEventListener("click", recordButton)
