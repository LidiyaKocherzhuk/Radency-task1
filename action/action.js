export const create = () => {

};

export const update = () => {

};

export const deleteNote = (deleteElement, notes) => {
  console.log('aa');
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].onclick = (e) => {
      notes.splice(i, 1);
      localStorage.setItem("notes", JSON.stringify(notes))
    };
  }
  return JSON.parse(localStorage.getItem("notes"));
};
