const pageForm = document.getElementById("new-task-form");
pageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTaskInput = document.getElementById("task");
  const tasks = {
    newTask: newTaskInput.value,
  };

  const card = document.createElement("div");
  card.classList.add("new-task-card");
  card.innerHTML = `
  <input type="checkbox" class="task-checkbox" onclick="toggleTaskCompletion(event)">
  <span>${tasks.newTask}</span>
  <button onclick="deleteCard(event)" style="display: block; margin-left: 18em; background-color: rgb(226, 33, 19)">DELETE</button>
  `;
  const cardContainer = document.getElementById("saved-task");
  cardContainer.appendChild(card);

  newTaskInput.value = "";
});

const deleteCard = function (e) {
  console.log("DELETE", e.target.parentElement);
  const pressedButton = e.target;
  const cardToRemove = pressedButton.parentElement;
  cardToRemove.remove();
};

const toggleTaskCompletion = function (e) {
  const taskText = e.target.nextElementSibling;
  if (e.target.checked) {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "gray";
  } else {
    taskText.style.textDecoration = "none";
    taskText.style.color = "white";
  }
};
