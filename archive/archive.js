const archiveBtn = document.getElementsByClassName('show-archived-notes')[0];
const closeBtn = document.getElementsByClassName('close-archive-btn')[0];
const notesArchive = document.getElementsByClassName('notesArchive')[0];
const tbody = document.getElementsByClassName('archive-tbody')[0];

archiveBtn.addEventListener('click', (e) => {
  notesArchive.classList.toggle('notesArchive-show');
});
closeBtn.addEventListener('click', (e) => {
  notesArchive.classList.toggle('notesArchive-show');
});

let archive = JSON.parse(localStorage.getItem("archive"));
const unArchiveIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-layer-forward" viewBox="0 0 16 16"> <path d="M8.354.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l1 1a.5.5 0 0 0 .708 0L7 4.207V12H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9V4.207l.646.647a.5.5 0 0 0 .708 0l1-1a.5.5 0 0 0 0-.708l-3-3z"/> <path d="M1 7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5a.5.5 0 0 0 0-1H1V8h4.5a.5.5 0 0 0 0-1H1zm9.5 0a.5.5 0 0 0 0 1H15v2h-4.5a.5.5 0 0 0 0 1H15a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4.5z"/> </svg>'

archive.forEach(note => {
  const noteTrElement = document.createElement('tr');
  
  for (let [key, value] of Object.entries({...note, unArchiveIcon})) {
    const noteTdElement = document.createElement('td');
    noteTdElement.innerHTML = value;
    noteTdElement.classList.add(key);
    noteTrElement.appendChild(noteTdElement);
  }
  
  tbody.appendChild(noteTrElement);
});


