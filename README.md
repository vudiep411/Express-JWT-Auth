<h1  align="center">Express Node.js Template</h1>
<p  align="center">This is a template to write REST API in express following MVC pattern</p>

## What's in here?
*DockerFile* if using docker<br/>
*mongoose* for mongodb (you can use different database service if you'd like) <br/>
*nodemon* for development <br/>

## Folder Structure
<p>Folder Structure for this template</p>

### `controllers`
Create your REST API logic functions in here. See [hello.js](/controllers/hello.js) for reference

### `middleware`
Create your middleware functions here. For references, visit <a  href="https://expressjs.com/en/guide/using-middleware.html">Express middleware</a>

### `models`
Create your mongodb models here. See [model.js](/models/model.js) for reference

### `routes`
Create your REST API endpoints here. See [hello.js](/routes/hello.js) for reference

### `index.js`
This is the main file for the express server. This file will start the express app on a port of your choice in .env file.

## Installation
Follow the instructions below

### Prerequisites
* [npm][npm]
* [Node.js][Node.js-url]

1. Clone the repo
   ```sh
   git clone https://github.com/vudiep411/Express-Node.js-Template.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the Express server
   ```sh
   npm run dev
   ```
4. Set up .env file similar to [.env.example](.env.example)
   <br/>
 
## License
Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js-url]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/