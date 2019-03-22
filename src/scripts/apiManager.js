const api = {
    getApiData() {
        return fetch("http://localhost:8088/entries")
        .then(entries => entries.json())
    },
     getPostdata(journalEntries) {
         return fetch("http://localhost:8088/entries", {
             method: "POST",
             body: JSON.stringify(journalEntries),
             headers: {
                 "Content-Type": "application/json"
             }
         })
         .then(entries => entries.json())
     }
}