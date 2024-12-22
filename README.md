# uoc-webapps-eines-p1

Static website (on the Sahara desert) made with HTML, CSS and Parcel as module bundler.


# NPM scripts

Execute the command 
```
npm start
```
 to launch the development server.

Execute the command 
```
npm run build
```
 to compile the source code, apply all the preprocessors and save that distributable compilation in the folder "dist".

# Parcel's built-in Post and Pre Processors
Parcel comes with `PostCSS` and `PostHTML`. Those dependencies solve most of the pre and post-processing of CSS and HTML. However, some features are not included. If You need to add those features, you can use **PostCSS**  and **PostHTML** plugins, be defining them and configuing them in its respective configuraton files: **.postcssrc**, and **.posthtmlrc**. Just place the **plug-in** names in the `plugins` field -every member of that object should be a different plugin. Furthermore, every plugin defined, may have a nested object for configuration.

For more informationon **PostCSS** configurations, please visit:
https://parceljs.org/languages/css/#postcss
and
https://parceljs.org/languages/html/#posthtml


# devDependencies

These are the core dependencies for developing this project:
- `npm-run-all`
- `parcel`
- `postcss-custom-properties`
- `posthtml-include`
- `rimraf`

To configure them:

## npm-run-all
This dependency is useful to concatenate `npm` instructions. We're using this dependency to concatenate the cache clearing by the `rimraf` dependency and the `parcel` intructions for serving and building the app.

## parcel
We're using this **package bundler** to serve and compile our App. The bundler is already set up in the **package.json** `scripts` field. You don't need to add anything else. There're 2 scripts to run **Parcel** for serving ("parcel:dev": "parcel") and to compile the **distributable**, ("parcel:build": "parcel build").

You don't have to modify any of those, for the main project's commands for serving and compiling are already set. Those will call these 2 Parcel-related scripts.

In other words, you only need to use the npm commands `npm start` and `npm run buld`, as defined in the previous **NPM scripts** section.

It is important, nevertheless, to avoid modifying th entry point as defined in the **source** field of the **package.json**. It points to the relative path `src/index.html`. If you ever reorder the project's folders, yo'll need to adjust this path in the **package.json** too, so that **Parcel** can know where the entry point of our app is located.

## postcss-custom-properties
This is a plug-in to be used by **PostCSS**. The configuratin is already setup to its default value `true`.

This **plug-in** post-processes `CSS variables` so older browsers can undesratnd them. 

## posthtml-include
This is a plug-in to be used by **PostHTML**. The configuratin is already setup to its default value `{}`.

This **plug-in** pre-processes `HTML files` in a `component` manner, using HTML injection, so you can use them in different part of your Application without repiting code.

## rimraf
This dependency will clear the cached files resulting from Parcel's compilation for production in the folder `dist`. 



# Git Tags & Semver

Every time we conclude a phase of the project, we will tag the last commit using the semver syntax. We'll use annotated tags and the message must be `"uoc-webapps-eines <alias>"` where **alias** is teh name of the activity (i.e. "P1", "P2", etc.). The resulting git commands should be like these:
```
git tag -a v1.0.0 -m "uoc-webapps-eines P1: v1.0.0"
```
```
git tag -a v2.0.0 -m "uoc-webapps-eines P2: v2.0.0"
```
```
git tag -a v3.0.0 -m "uoc-webapps-eines P3: v3.0.0"
```

Don't forget to change the **package.json** keys "name" and "version" accordingly.


# Node.js version
Configured in the **package.json**'s section `engines`, is the version range of `Node.js` compatible with the **devDependencies** of this project. Set your development environment accodingly,
or the launch and compilation of the project's source code could fail or cause some side effects.


# Browserslist
Configured in the **package.json**, these are all browsers supported. The aim is to support all new and old browsers which at least are being used by the 0.2% of the global users:
- `and_chr 130`
- `and_ff 130`
- `and_qq 14.9`
- `and_uc 15.5`
- `android 130`
- `chrome 129 `
- `chrome 128 `
- `chrome 127`
- `chrome 109`
- `edge 129`
- `edge 128`
- `firefox 130`
- `firefox 115`
- `ie 11`
- `ios_saf 18.0`
- `ios_saf 17.6-17.7`
- `ios_saf 17.5`
- `ios_saf 16.6-16.7`
- `ios_saf 15.6-15.8`
- `op_mob 80`
- `opera 113`
- `safari 17.6`
- `samsung 26`
- `samsung 25`


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
