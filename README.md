# TAKE BREAK (쉴래)

## Getting Started

### Node version setting

```
$ nvm use
// if error: version "10.15.3 -> N/A" is not yet installed.
// $ nvm install v10.15.3
```

### Client

```
$ cd take_break_client
$ npm i
$ npm run dev
```

### Server

- create take_break_server/.env

  ```
  $ cd take_break_server
  $ cp .env.sample .env
  $ vi .env
  //=> Set your environment values
  ```

- start server

  ```
  $ cd take_break_server
  $ npm install
  $ npm run dev
  ```
