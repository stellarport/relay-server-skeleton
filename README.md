# relay-server-skeleton

This is a relay server skeleton project to connect to the Stellarport A3S platform. If you don't know what A3S is, checkout the [a3s documentation](http://a3s.stellarport.io).

## Getting Started

1. Download the dependencies:
   ```
   npm install
   ```

2. Rename `example-config.js` to `config.js` and fill in with custom info.

3. Run the app:
   ```
   npm start
   ```
   The relay server is not available on localhost:1337

4. Implement the methods in `/controllers`

5. Build a production bundle:
   ```
   npm start -- build
   ```

6. Dockerize for production:
   ```
   npm start -- dockerize
   ```
