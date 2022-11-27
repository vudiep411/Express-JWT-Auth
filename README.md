<h1  align="center">Express User Auth microservice</h1>
<p  align="center">User authentication micro service using Express, Node.js, authorize and authenticate users using JWT(JsonWebToken). Register a user login and this service will return a jwt token back</p>

## What's in here?
*jwt* for authentication<br/>
*mongoose* for mongodb (you can use different database service if you'd like) <br/>
*nodemon* for development <br/>
*bcrypt* hashing password with bcrypt <br/>

## Routes
/user/login POST<br/>

```javascript
{
	"email" : "example@gmail.com",
	"password" : "password"
}
```

/user/register <br/>

```javascript
{
   "firstName": "John",
   "lastName": "Doe",
	"email" : "example@gmail.com",
	"password" : "password"
}
```

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