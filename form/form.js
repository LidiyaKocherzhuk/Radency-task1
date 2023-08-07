const createBtn = document.getElementsByClassName('create-note')[0];
const noteForm = document.getElementsByClassName('note-form')[0];
const closeBtn = document.getElementsByClassName('close-btn')[0];

createBtn.addEventListener('click', (e) => {
  noteForm.classList.toggle('note-form-show');
});
closeBtn.addEventListener('click', (e) => {
  noteForm.classList.toggle('note-form-show');
});

// const inputBloc = document.getElementsByTagName('form');
//
// console.log(inputBloc[0]);