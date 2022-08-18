# Crypto By Id

Build a barebones Crypto price lookup page.

1. The user enters the crypto id in a text field, then clicks the **_Go_** button.
2. The price of the crypto should display:

API Call:

https://api.coingecko.com/api/v3/simple/price?ids=[id]&vs_currencies=usd

Test with the id: "immutable-x"

Edit the file index.js
When you are done, compare your answer to index.answer.js

## Instructions

```
npm install
```

### Development

1. Start the local server:

```
npm start
```

2. Open the browser at the url specified in the terminal.

3. Open another terminal and run the following to start developing:

```
npm run dev
```

4. Add/edit React files in the src folder.

5. After saving, your files are built automaticallty. The file /public/js/bundle.js will be created in development mode.

6. Refresh the browser window.

### Production

Build the app:

```
npm run build
```

The file /public/js/bundle.js will be overwritten and minfied in production mode (with source maps as a separate file).
