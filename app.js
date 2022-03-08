const form = document.querySelector('form');
const list = document.querySelector('ul');
const input = document.querySelector('form input');

let alltask = [];

const createTask = (task) => {
  const todo = {
    task,
    id: Date.now(),
  };

  showTask(todo);
}

const showTask = (todo) => {
  const item = document.createElement('li');
  item.setAttribute('data-key', todo.id);

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.addEventListener('click', taskDone);
  item.appendChild(input);

  const text = document.createElement('span');
  text.innerText = todo.task;
  item.appendChild(text);

  const button = document.createElement('button');
  button.addEventListener('click', removeTask);

  const icon = document.createElement('img');
  icon.setAttribute('src', 'ressources/fermer.svg');
  button.appendChild(icon);
  item.appendChild(button);

  list.appendChild(item);
  alltask.push(item);
}

const taskDone = (e) => {
  const item = e.target.parentElement;
  const key = item.getAttribute('data-key');
  const todo = alltask.find(todo => todo.getAttribute('data-key') === key);
  todo.classList.toggle('finDeTache');
}

const removeTask = (e) => {
  const item = e.target.parentNode;
  const key = item.getAttribute('data-key');
  const todo = alltask.find(todo => todo.getAttribute('data-key') === key);
  list.removeChild(todo);
  console.log(list);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value.trim();
    if (task !== '') {
        createTask(task);
        input.value = '';
    }
});