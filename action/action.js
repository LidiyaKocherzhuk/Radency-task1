import {notes} from '../data/data.js';
import {archived} from '../data/archive.js';

const noteForm = document.getElementsByClassName('update-note-form')[0];

export const update = (note) => {
  noteForm.classList.toggle('note-form-show');
  const form = document.createElement('form');
  
  for (const [key, value] of Object.entries({
    name: note.name,
    content: note.content,
    dates: note.dates,
  })) {
    const labelElement = document.createElement('label');
    const inputElement = document.createElement('input');
    
    labelElement.innerText = key[0].toUpperCase() + key.slice(1);
    inputElement.innerText = value;
    
    labelElement.appendChild(inputElement);
    form.appendChild(labelElement);
  }
  
  const selectElement = document.getElementsByTagName('select')[0];
  const inputElement = document.getElementsByTagName('input');
  const updateBtn = document.createElement('button');
  const closeBtn = document.createElement('button');
  
  selectElement.value = note.category;
  updateBtn.innerText = "Update";
  closeBtn.innerText = "X";
  closeBtn.classList.add('close-btn');
  
  form.append(selectElement, updateBtn, closeBtn);
  noteForm.appendChild(form);
  
  updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === note.id) {
        notes[i] = {
          ...note,
          name: inputElement.namedItem('name').value,
          content: inputElement.namedItem('content').value,
          category: selectElement.value,
          dates: `${note.dates}/${new Date().toDateString()}`
        }
      }
    }
    
    closeAndReset();
  });
  
  console.log(notes);
  
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeAndReset();
  });
  
  function closeAndReset() {
    noteForm.classList.toggle('note-form-show');
    noteForm.removeChild(form);
  }
};

export const archive = (note, index) => {
  deleteNote(note, index);
  archived.push(note);
};

export const deleteNote = (deleteElement, index) => {
  notes.splice(index, 1);
};
