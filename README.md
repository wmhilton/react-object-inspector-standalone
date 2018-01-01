# react-object-inspector-standalone

Get the goodness of [react-object-inspector](http://xyc.github.io/react-inspector/) without actually dealing with React.
Forked from [react-webpack-wrapper-example](https://github.com/sevenleaps/react-webpack-wrapper-example).

## Example Usage

See this [example live](https://wmhilton.github.io/react-object-inspector-standalone)

```html
<body>
  <p>Here is some fancy data:</p>
  <div id="inspector"></div>

  <script src="https://unpkg.com/react-object-inspector-standalone"></script>
  <script>
    ObjectInspector(document.getElementById('inspector'), {
      here: {
        is: ['some', 'fancy', 'data'],
      }
    })
  </script>
</body>
```

## To build manually

1. Clone the repo
2. Run `npm install`
3. Run `npm run build`
4. Run the example `npx serve`

Step 3 will generate two files in the dist folder. A object-inspector.js and object-inspector.min.js.
