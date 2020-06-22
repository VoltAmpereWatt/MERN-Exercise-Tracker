## PROJECT LINK:  [exercise-tracker-final.herokuapp.com](exercise-tracker-final.herokuapp.com)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project is based on [this project](https://github.com/beaucarnes/mern-exercise-tracker-mongodb) offered at FreeCodeCamp.
## Summary
<p>This is a very simple full-stack project based on the MERN stack. This is an exercise tracking project. Users can be added, their exercises can be tracked by adding the workout name, description, and date performed. The exercises can be modified or deleted.
<p> The project uses the free tier of MongoDB Atlas, which is a MongoDB server hosted on the cloud, Express.js on the backend for routing and creating models, React.js to build the front-end, and a Node.js runtime.

## Screenshots
<img src='./screenshots/mobile.png' width='40%'>
<img src='./screenshots/addexercise.png' width='40%'>
<img src='./screenshots/records.png' width='80%'>

## Available Scripts
In the project directory, you can run to get the fron-end running:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### Backend Server
Go to the backend folder and run 
### `nodemon server`
This assumes that nodemon is installed. To setup the backend, create a directory. Then install the packages _axios, react-router-dom, react-datepicker_.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

The app was deployed on Heroku on a Node.js dyno.