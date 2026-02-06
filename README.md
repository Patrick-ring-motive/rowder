# rowder# rowder 🚣

`rowder` is a minimalist, client-side router for modern web applications. It provides a simple way to handle navigation and URL routing without the overhead of larger frameworks, focusing on performance and ease of use.

## Features

- **Lightweight**: Minimal footprint, zero dependencies.
- **Client-Side Routing**: Handles URL changes and view updates entirely in the browser.
- **Simple API**: Easy to define routes and associate them with handler functions.
- **History API Support**: Leverages the browser's History API for clean URLs and back/forward button support.

## Usage

```javascript
import Router from './client-router.js';

const router = new Router();

router.addRoute('/', () => {
  console.log('Home page');
});

router.addRoute('/about', () => {
  console.log('About page');
});

router.init();
```
