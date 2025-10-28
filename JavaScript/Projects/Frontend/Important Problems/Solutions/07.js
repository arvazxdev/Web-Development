function saveNoteToLocalStorage() {
    let savedNote = localStorage.getItem("note");
    if (savedNote) {
        document.write(savedNote)
    } else {
        let newNote = prompt("Enter your note...")
        localStorage.setItem("note", newNote)
        document.write(newNote);
    }

}

saveNoteToLocalStorage()