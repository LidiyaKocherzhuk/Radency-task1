const notes = JSON.parse(localStorage.getItem("notes"));
const archive = JSON.parse(localStorage.getItem("archive"));
const categories = JSON.parse(localStorage.getItem("categories"));

let notesSumResult = {};
let archiveSumResult = {};

const sumData = (noteData) => {
  return noteData.reduce((prev, current) => {
    if (prev[current.category]) {
      prev[current.category]++;
    } else {
      prev[current.category] = 1;
    }
    return prev;
  }, {});
}

notesSumResult = sumData(notes);
archiveSumResult = sumData(archive);

const tbody = document.getElementsByClassName('summary-tbody')[0];

categories.forEach(category => {
  const noteTrElement = document.createElement('tr');
  for (let [key, value] of Object.entries({
    name: category,
    active: notesSumResult[category],
    archived: archiveSumResult[category]
  })) {
    const noteTdElement = document.createElement('td');
    noteTdElement.innerHTML = value ?? 0;
    noteTdElement.classList.add(key);
    noteTrElement.appendChild(noteTdElement);
  }
  
  tbody.appendChild(noteTrElement);
});