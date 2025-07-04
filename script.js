function addNote() {
  const input = document.getElementById("noteInput");
  const noteText = input.value.trim();
  if (noteText === "") return;

  const notes = getNotes();
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  displayNotes();
}

function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}
const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.onclick = function () {
    note.remove();
};
note.appendChild(deleteBtn);


function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || "[]");
}

function displayNotes() {
  const notes = getNotes();
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = `
      ${note}
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesList.appendChild(noteDiv);
  });
}

window.onload = displayNotes;
