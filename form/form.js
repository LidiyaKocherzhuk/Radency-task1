import {notes} from '../data/data.js';

const createBtn = document.getElementsByClassName('create-note')[0];
const create = document.getElementsByClassName('create')[0];
const noteForm = document.getElementsByClassName('note-form')[0];
const closeBtn = document.getElementsByClassName('close-btn')[0];

createBtn.addEventListener('click', (e) => {
  e.preventDefault();
  noteForm.classList.toggle('note-form-show');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  noteForm.classList.toggle('note-form-show');
});

const inputBloc = document.getElementsByTagName('input');
const selectBloc = document.getElementsByTagName('select')[0];

create.addEventListener('click', (e) => {
  e.preventDefault();
  
  notes.push({
    id: new Date().getMilliseconds(),
    name: inputBloc.namedItem('name').value,
    content: inputBloc.namedItem('content').value,
    category: selectBloc.value,
    created: new Date().toDateString(),
    dates: new Date().toDateString()
  });
  
  noteForm.classList.toggle('note-form-show');
  inputBloc.namedItem('name').innerText = '';
  inputBloc.namedItem('content').innerText = '';
});


