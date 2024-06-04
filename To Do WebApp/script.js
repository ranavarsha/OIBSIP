// get elements from the DOM
const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

// add event listener for form submission
form.addEventListener('submit', function(event) {
	event.preventDefault(); // prevent default form submission behavior

	// get values from form inputs
	const title = this.querySelector('#title').value;
	const description = this.querySelector('#description').value;

	if (!title || !description) {
		alert('Please enter a title and description.'); 
		return;
	}

	// create new task item
	const taskItem = document.createElement('li');
	taskItem.innerHTML = `
		<span>${title}</span>
		<button>Delete</button>
	`;

	// add event listener for delete button click
	taskItem.querySelector('button').addEventListener('click', function() {
		taskItem.remove(); // remove task item from task list
	});

	// add event listener for task item click
	taskItem.querySelector('span').addEventListener('click', function() {
		taskItem.classList.toggle('done'); // toggle "done" class on task item
	});

	// add task item to task list
	taskList.appendChild(taskItem);

	// clear form inputs
	this.reset();
});