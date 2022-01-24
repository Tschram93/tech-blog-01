const newPostFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#title').value.trim();
	const content = document.querySelector('#content').value.trim();

	if (title && content) {
		const response = await fetch('/api/posts/', {
			method: 'POST',
			body: JSON.stringify({ title, content }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create Post.');
		}
	}
};

document
	.querySelector('.newPost-form')
	.addEventListener('submit', newPostFormHandler);

const updatePostFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#updateTitle').value.trim();
	const content = document.querySelector('#updateContent').value.trim();

	//grab post id to put into line 13
	const id = window.location.toString().split('/')[
		window.location.toString().split('/').length - 1
	];

	if (title && content) {
		const response = await fetch(`/api/posts/${id}`, {
			method: 'PUT',
			body: JSON.stringify({ title, content }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to update post.');
		}
	}
};

document
	.querySelector('.updatePost-form')
	.addEventListener('submit', updatePostFormHandler);

const deleteFormHandler = async (event) => {
	event.preventDefault();

	//grab post id to put into line 13
	const id = window.location.toString().split('/')[
		window.location.toString().split('/').length - 1
	];

	const response = await fetch(`/api/posts/${id}`, {
		method: 'DELETE',
		body: JSON.stringify({ id }),
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert('Failed to delete post.');
	}
};

document
	.querySelector('.deletePost-btn')
	.addEventListener('click', deleteFormHandler);
