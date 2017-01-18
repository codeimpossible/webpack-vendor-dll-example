# webpack-vendor-dll-example
example of configuring DLLPlugin for Webpack 2.x

This repo contains two example projects:
  - app-code: an admittedly pretty basic react application. It renders "Hello from react v{version} :)" to the DOM. App-code includes Vendor-code as a dependency.
  - vendor-code: a platform library that includes both React and ReactDOM as a DLL.

# Building
```
$ # in vendor-code
$ npm install && npm run build
$ # in app-code
$ npm install && npm run build
```

# Running
Start a web server in the `./app-code` directory and load the Index.html file (or just open the index.html file in your browser, either should work).

# How does this all work?
The app-code project, when built via `npm run build` will only generate a `app.js` inside the `output` directory. Both `react` and `react-dom` will be dynamically linked from within the `vendor-code` package, and will not need to be processed by webpack.

```
Hash: 4fe7ac1ae2000ee97e2b
Version: webpack 2.2.0
Time: 86ms
          Asset     Size  Chunks             Chunk Names
./output/app.js  3.41 kB       0  [emitted]  app
   [0] ./index.js 188 bytes {0} [built]
 [180] delegated ./node_modules/react/react.js from dll-reference vendor_0ef5df22b0e16ddf1a0d 42 bytes {0} [not cacheable] [built]
 [182] delegated ./node_modules/react-dom/index.js from dll-reference vendor_0ef5df22b0e16ddf1a0d 42 bytes {0} [not cacheable] [built]
 [298] ./welcome.js 223 bytes {0} [built]
    + 1 hidden modules
```
