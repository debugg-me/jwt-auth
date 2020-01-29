Ada is creating an app for her startup, she wants to add authentication to it now.
So she starts by creating a `login` function on the backend. It takes a user's 
credentials (username/password) and returns a JWT if the password is right. Help her
implement the `login` function.

### Test cases

When the login function is called with the right user credentials,
it should return a JWT, with `username` and [`iat`](https://en.wikipedia.org/wiki/JSON_Web_Token)
encoded in it.

When incorrect credentials are passed to `login()`, it should throw an `InvalidCredentialsError`

### User credentials
You can import `config.json` and use the `user` child from it for user credentials. You can also use your own,
but make sure the password is stored encrypted or the tests may fail.

### Install dependencies
You only need to install the dependencies of this project using `npm install`.

### Run test(s)
To check whether your code passes the tests, run `npm test`
