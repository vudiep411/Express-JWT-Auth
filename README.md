<h1  align="center">Express User Auth microservice</h1>
<p  align="center">User authentication micro service using Express, Node.js, authorize and authenticate users using JWT (JsonWebToken). Register a user login and this service will return a jwt token back to the client side. User data will be saved in MongoDb</p>

## What's in here?
*jwt* for authentication<br/>
*mongoose* for mongodb database(you can use different database service if you'd like) <br/>
*nodemon* for development <br/>
*bcrypt* hashing password with bcrypt <br/>

## Routes
/user/login POST METHOD<br/>

```javascript
{
   "email" : "example@gmail.com",
   "password" : "password"
}
```

/user/register POST METHOD<br/>

```javascript
{
   "firstName": "John",
   "lastName": "Doe",
   "email" : "example@gmail.com",
   "password" : "password"
}
```

/user/refresh POST METHOD<br/>

<p>If cookies already have a refreshToken, this route will automatically generate a new refresh and access token</p>

/test *authenticated* GET METHOD<br/>
Set auth header<br/>
```javascript
{
   "headers": {
      "Authorization": "Your JWT token"
   } 
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
