const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// const command = process.argv

// customize version
yargs.version('1.0.2')

//add, remove, list, read

// Create a add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'
      }
  },
  handler(argv) {
      notes.addNote(argv.title, argv.body)
  }
})


//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    }
  },
  handler(argv) { 
    notes.removeNote(argv.title)
  }

})


//Create a list command
yargs.command({
  command: 'list',
  describe: 'Listing all notes!',
  handler(argv) { 
    notes.listNotes()
  }
})


//Create read command
yargs.command({
  command: 'read',
  describe: 'Reading a note!',
  handler() {
    console.log('Reading a note!')
  }
})

//console.log(yargs.argv)
yargs.parse()









