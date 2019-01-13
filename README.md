# Shufflin - A React Click Game
A simple click game that utilizes the React framework.

[Live demo on my GitHub Pages](https://misazander.github.io/shufflin)

### How to Play
You are presented a board of 12 dank memes and your mission is to click each indivdual image exactly once.
What's the catch? The board shuffles after each image clicked. Click the same image again and it's game over.

### Under the Hood
Each image is a functional component managed by a single class component, called Page. The Page component is the sole
controller of the app's state, and keeps track of the click status of each image and score. 

## Cloning
How to install on your local machine. Requires npm or yarn on your machine.
1. Dowload and extract the ZIP of this repo, or use `git clone`.
2. Cd to the location of the repo with a terminal.
3. Run `npm i` or `yarn install` in the terminal (depending on your preferred package manager) to install dependencies.
4. Run `npm start` or `yarn start` to start the development server and open the app in your preferred browser.

### Using Custom Images
This repo comes pre-packaged with 12 dank memes that the app uses out of the box. You can swap these image files out with your
own if you wish, however, most servers these days do not allow front-end scripts to get a list of a server's files for security reasons, so all the 
image files must be listed explicitly beforehand for proper functionality. All image links are listed in the `images.json` file.

##### Using Custom Images Steps
1. Replace the 12 image files in `/src/img` with 12 images of your choice. Each image should be 1:1 height:width ratio and all
the same size (I used 200px by 200px images).
2. Open the `/src/images.json` file and replace each src value to the name of your custom images. Each link should end with
an image file extension (like .jpg or .png) and not include any file paths.
3. Run the dev server (see Cloning step 4)
