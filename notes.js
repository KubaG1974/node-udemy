const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes..'
}



const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)  
        console.log('New note has been added!')  
    } else {
        console.log('Note title already in use!')
    }
    
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)  
}


const removeNote = (title) => {
    const notes = loadNotes()
    
    const notesToKeep = notes.filter(note => note.title !== title)    
    
    const delNote = notes.filter(note => note.title === title)
    
    if (delNote.length === 0) {
        console.log (chalk.bgRed.inverse('No note!'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen.inverse('Chosen note has been removed!'))
    }
    
}


const listNotes = () => {
    const notes = loadNotes()
    console.log('Twoje notatki:')
    const listAll = notes.forEach((note) => {
        console.log(chalk.bgBlack(note.title))  
    });
    
}



const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }

}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}