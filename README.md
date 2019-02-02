# js-wysiwyg
A visual editor to format text in a website.

## How to use
You have to include the file **wysiwyg.js** in your web page, and to call the function **WYSIWYG** on a textarea.
```html
<textarea id="wysiwyg-source"></textarea>

<script src="wysiwyg.js"></script>

<script>
  window.onload = function () {
    WYSIWYG(document.getElementById('wysiwyg-source'));
  };
</script>
```

## Styling
You can use the following classes to customize the style of the different parts.
- **wysiwyg-toolbar** : the group of buttons
- **wysiwyg-button** : a formatting button
- **wysiwyg-content** : the text zone
