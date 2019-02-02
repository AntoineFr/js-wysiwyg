function WYSIWYG(editor) {
	const buttonClass = 'wysiwyg-button';

	let container = document.createElement('div');

	let toolbar = document.createElement('div');
	toolbar.className = 'wysiwyg-toolbar';
	container.appendChild(toolbar);

	let boldButton = document.createElement('button');
	boldButton.type = 'button';
	boldButton.innerText = 'B';
	boldButton.className = buttonClass;
	boldButton.style.fontWeight = 'bold';
	boldButton.addEventListener('click', function () { document.execCommand('bold', false, null); });
	toolbar.appendChild(boldButton);

	let italicButton = document.createElement('button');
	italicButton.type = 'button';
	italicButton.innerText = 'I';
	italicButton.className = buttonClass;
	italicButton.style.fontStyle = 'italic';
	italicButton.addEventListener('click', function () { document.execCommand('italic', false, null); });
	toolbar.appendChild(italicButton);

	let underlineButton = document.createElement('button');
	underlineButton.type = 'button';
	underlineButton.innerText = 'U';
	underlineButton.className = buttonClass;
	underlineButton.style.textDecoration = 'underline';
	underlineButton.addEventListener('click', function () { document.execCommand('underline', false, null); });
	toolbar.appendChild(underlineButton);

	let strikethroughButton = document.createElement('button');
	strikethroughButton.type = 'button';
	strikethroughButton.innerText = 'S';
	strikethroughButton.className = buttonClass;
	strikethroughButton.style.textDecoration = 'line-through';
	strikethroughButton.addEventListener('click', function () { document.execCommand('strikeThrough', false, null); });
	toolbar.appendChild(strikethroughButton);

	let linkButton = document.createElement('button');
	linkButton.type = 'button';
	linkButton.innerText = 'Link';
	linkButton.className = buttonClass;
	linkButton.addEventListener('click', function () { if (url = prompt('Enter link URL')) document.execCommand('createLink', false, url); });
	toolbar.appendChild(linkButton);

	let imageButton = document.createElement('button');
	imageButton.type = 'button';
	imageButton.innerText = 'Image';
	imageButton.className = buttonClass;
	imageButton.addEventListener('click', function () { if (url = prompt('Enter image URL')) document.execCommand('insertImage', false, url); });
	toolbar.appendChild(imageButton);

	let formatSelect = document.createElement('select');
	formatSelect.className = buttonClass;

	let formatOptionNormal = document.createElement('option');
	formatOptionNormal.value = '';
	formatOptionNormal.innerText = 'Normal';
	formatOptionNormal.addEventListener('click', function () { document.execCommand('formatBlock', false, '<p>'); formatSelect.selectedIndex = 0; });
	formatSelect.appendChild(formatOptionNormal);

	for (let level = 1; level <= 6; level++) {
		let formatOptionTitle = document.createElement('option');
		formatOptionTitle.value = 'h' + level;
		formatOptionTitle.innerText = 'Title ' + level;
		formatOptionTitle.addEventListener('click', function () { document.execCommand('formatBlock', false, '<h' + level + '>'); formatSelect.selectedIndex = 0; });
		formatSelect.appendChild(formatOptionTitle);
	}

	let formatOptionPre = document.createElement('option');
	formatOptionPre.value = 'pre';
	formatOptionPre.innerText = 'Pre';
	formatOptionPre.addEventListener('click', function () { document.execCommand('formatBlock', false, '<pre>'); formatSelect.selectedIndex = 0; });
	formatSelect.appendChild(formatOptionPre);

	toolbar.appendChild(formatSelect);

	let unorderedListButton = document.createElement('button');
	unorderedListButton.type = 'button';
	unorderedListButton.innerText = 'UL';
	unorderedListButton.className = buttonClass;
	unorderedListButton.addEventListener('click', function () { document.execCommand('insertUnorderedList', false, null); });
	toolbar.appendChild(unorderedListButton);

	let orderedListButton = document.createElement('button');
	orderedListButton.type = 'button';
	orderedListButton.innerText = 'OL';
	orderedListButton.className = buttonClass;
	orderedListButton.addEventListener('click', function () { document.execCommand('insertOrderedList', false, null); });
	toolbar.appendChild(orderedListButton);

	let content = document.createElement('div');
	content.contentEditable = true;
	content.className = 'wysiwyg-content';
	content.innerHTML = editor.value.trim();
	content.style.overflow = 'auto';
	container.appendChild(content);

	let toggleSourceButton = document.createElement('button');
	toggleSourceButton.type = 'button';
	toggleSourceButton.innerText = 'Source';
	toggleSourceButton.className = buttonClass;
	toggleSourceButton.addEventListener('click', function () {
		if (editor.style.display === 'block') {
			content.innerHTML = editor.value;
			content.style.display = 'block';
			editor.style.display = 'none';
			content.style.width = editor.style.width;
			content.style.height = editor.style.height;
		}
		else {
			editor.value = content.innerHTML;
			content.style.display = 'none';
			editor.style.display = 'block';
			editor.style.width = content.style.width;
			editor.style.height = content.style.height;
		}
	});
	toolbar.appendChild(toggleSourceButton);

	content.addEventListener('keyup', function () {
		editor.value = content.innerHTML;
	});

	content.className = editor.className;
	let editorStyle = window.getComputedStyle(editor);
	content.style.width = editorStyle.getPropertyValue('width');
	content.style.height = editorStyle.getPropertyValue('height');
	content.style.resize = editorStyle.getPropertyValue('resize');

	editor.parentNode.insertBefore(container, editor);
	editor.style.display = 'none';

	document.execCommand('defaultParagraphSeparator', false, 'p');
}
