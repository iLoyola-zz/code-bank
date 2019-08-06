// Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const notes = ['Note 1', 'Note 2', 'Note 3'];

const notesObjects = [
  {
    title: 'My next trip',
    body: 'I would like to go to Spain'
  }, {
    title: 'Habbits to work on',
    body: 'Exercise, eat better'
  }, {
    title: 'Office modification',
    body: 'Get a new chair'
  }
]

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

sortNotes(notesObjects);
console.log(notesObjects);


