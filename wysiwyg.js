function WYSIWYG(editor) {
	let container = document.createElement('div');

	let toolbar = document.createElement('div');
	container.appendChild(toolbar);

	let content = document.createElement('div');
	content.contentEditable = true;
	content.innerHTML = editor.value.trim();
	content.style.overflow = 'auto';
	content.style.resize = 'both';
	container.appendChild(content);

	content.addEventListener('keyup', function () {
		editor.value = content.innerHTML;
	});

	editor.parentNode.insertBefore(container, editor);
	editor.style.display = 'none';
}
