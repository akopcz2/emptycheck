##Post Build Process Module to check for empty elements and populate them with a non-breaking space.

Specify your directory structure in the glob
```js
glob("**/*.html"
```
To run
```js
node index
```

You can customize what you want to enter in the element by editing the value passed into the html function here
```js
$(node).html('&#160;');
```
The value is currently a non-breaking space.
fs.write converts decimal unicode to hex because of encoding not being specified