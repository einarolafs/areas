# Web application to calculate and display the area of geometric data.

This project is a simple demo for uploading a document with specific data, to be processed by a server and then returned to a react application that will store and display results.

The expected uploaded file should be a file containing list of multiple categories that each contain polygons.

The application is design to use a file with the following format: [annotations.json](annotations.json)

The server will organise the categories in the file together and calculate the area of each polygon in each category.

## Running the application

In order to run the project, simple run the following command:

#### `npm start`
This will build a static version of a react app that will then be served by the Express.js server.

Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

____

The react app and server can also be run separately by running the following commands:
#### `npm run app`
#### `npm run server`

The server instance will be run at http://localhost:3001, and the React application can be run by going to [http://localhost:3000](http://localhost:3000) in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Testing

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
