# Picsum photo-gallery

You can check the live version deployed on Netlify (https://vsimagegallery.netlify.app/)

# Features
- The requests of the paginations options are Debounced to reduce requests to the API.
- This project uses Vue i18n to switch among languages.
- Clicking the download button shows the corresponding image in an other another browser's tab, using the url field.
- Users can
  - Set the number of images per page (Page size)
  - Navigate to next and revious pages
  - Go to an specific page. If the page doesn't have images the system remains in the current page.
  - Switch the appereance of an image among: Blur, Grayscale & Normal state.  
- When click on an image shows a modal panel using an iFrame to show the unsplash site of the image selected. But the unsplash site has X-Frame-Options seted to Sameorigin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
