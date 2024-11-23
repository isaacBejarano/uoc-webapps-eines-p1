# uoc-webapps-eines-p1

Static website (on the Sahara desert) made with HTML, CSS and Parcel as module bundler.

# NPM scripts

Execute the command `npm start` to launch the development server.

Execute the command `npm run build` to compile the source code, apply all the preprocessors and save that distributable compilation in the folder "dist".

# Post-processors

The project uses **postCSS** with the plugin **postcss-custom-properties** to be able to use CSS variables and transpile them to classic CSS.

We are also using **postHTML** with the plugin **posthtml-include** to be able to markup HTML templates (aka **includes**) to be writen once but reusied in different pages.

# Responsive Images

For the semantic images, we are using the `<figure>` tag and the `<img>` tag. The latest defines a default size for small screens (aka **mobile first** approach), and then loads biger sizes depending on 4 screen breakpoints (iPad, FullHD and 4K) via the `srcset` and the `sizes` attributes. Bare in mind the preparatoin of those images as **assets** in case you want to incorporate more images to the project.

The embedded videos unfortunatelly have no such attributes for responsiveness, but we have used CSS classes which need to be place din this order:

```
<div class="responsive-iframe-wrapper">
<iframe class="responsive-iframe"
```

# Responsive Layout

The layout of media and paragraphs present in the `<article>` tag follows a structure of 1 column for mobile, and 2 columns for iPad and bigger screens. To use it, declare the `.columns-md` class in those wrappers serving for that porpouse, and then placve all the content inside maximum to children `<div>` to mark the 2 columns.

Please, keep the responsive layout consistent -it will add margins to inner `h2` and `iframes` and `img` tags, so they align automaticallly with the paragraphs.
