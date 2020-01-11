const login = require('./login');
const jwt = require('jsonwebtoken');
const { user, jwtConfig } = require('./config.json');
const errors = require('./errors');

test('given correct username/password, return jwt', () => {
    /**
     * 1. expect the returned token to be a valid JWT
     * 2. run verify(...) and expect it to not throw an error
     */
    const token = login(user);
    expect(() => jwt.verify(token)).not.toThrow();
    
    const decodedPayload = jwt.decode(response);
    expect(decodedPayload.username).toBe(user.username);
});

test("given incorrect username/password, throw error", () => {
    expect(() => {
        login({
          username: user.username,
          password: "wrong_password"
        });   
    }).toThrow(errors.InvalidCredentialsError);
});

test('Expect generated token to expire in 2s', () => {
    const token = login(user);

    setInterval(() => {
       console.log('Waiting for 2s...');
    }, 2000);

    expect(() => jwt.verify(token)).toThrow(jwt.TokenExpiredError);
});
