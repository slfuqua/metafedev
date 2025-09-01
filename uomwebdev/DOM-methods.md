- [Some Commonly Used DOM Methods](#some-commonly-used-dom-methods)
  - [Finding HTML Elements](#finding-html-elements)
  - [Changing HTML Elements](#changing-html-elements)
  - [Adding and Deleting Elements](#adding-and-deleting-elements)
  - [Adding Events Handlers](#adding-events-handlers)
  - [Finding HTML Objects](#finding-html-objects)

# Some Commonly Used DOM Methods

## Finding HTML Elements

`document.getElementById(id)`

Find an element by element id

```js

```

`document.getElementsByTagName(name)`

Find elements by tag name

```js

```

`document.getElementsByClassName(name)`

Find elements by class name

```js

```

## Changing HTML Elements

`element.innerHTML =  new html content`

Change the inner HTML of an element

```js

```

`element.attribute = new value`

Change the attribute value of an HTML element

```js

```

`element.style.property = new style`

Change the style of an HTML element

```js

```

`element.setAttribute(attribute, value)`

Change the attribute value of an HTML element

```js

```

## Adding and Deleting Elements

`document.createElement(element)`

Create an HTML element

```js

```

`document.removeChild(element)`

Remove an HTML element

```js

```

`document.appendChild(element)`

Add an HTML element

```js

```

`document.replaceChild(new, old)`

Replace an HTML element

```js

```

`document.write(text)`

Write into the HTML output stream

```js

```

## Adding Events Handlers

`document.getElementById(id).onclick = function(){code}`

Adding event handler code to an onclick event

```js

```

## Finding HTML Objects

The first HTML DOM Level 1 (1998), defined 11 HTML objects, object collections, and properties. These are still valid in HTML5.

Later, in HTML DOM Level 3, more objects, collections, and properties were added.

`document.anchors`

Deprecated. Do not use it.

```js

```

`document.applets`

Deprecated. Do not use it.

```js

```

`document.baseURI`

Returns the absolute base URI of the document

```js

```

`document.body`

Returns the `<body>` element

```js

```

`document.cookie`
Returns the document's cookie

```js

```

`document.doctype`

Returns the document's doctype

```js

```

`document.documentElement`

Returns the `<html>` element

```js

```

`document.documentMode`

Returns the mode used by the browser

```js

```

`document.documentURI`

Returns the URI of the document

```js

```

`document.domain`

Deprecated. Do not use it.

```js

```

`document.domConfig`

Deprecated. Do not use it.

```js

```

`document.embeds`

Returns all `<embed>` elements

```js

```

`document.forms`

Returns all `<form>` elements

```js

```

`document.head`

Returns the `<head>` element

```js

```

`document.images`

Returns all `<img>` elements

```js

```

`document.implementation`

Returns the DOM implementation

```js

```

`document.inputEncoding`

Returns the document's encoding (character set)

```js

```

`document.lastModified`

Returns the date and time the document was updated

```js

```

`document.links`

Returns all `<area>` and `<a>` elements that have a href attribute

```js

```

`document.readyState`

Returns the (loading) status of the document

```js

```

`document.referrer`

Returns the URI of the referrer (the linking document)

```js

```

`document.scripts`

Returns all `<script>` elements

```js

```

`document.strictErrorChecking`

Returns if error checking is enforced

```js

```

`document.title`

Returns the `<title>` element

```js

```

`document.URL`

Returns the complete URL of the document

```js

```
