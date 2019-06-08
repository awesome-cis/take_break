# TAKE BREAK SERVER

## Getting Started

### Development

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
  $ npx sequelize db:drop
  $ npx sequelize db:create
  $ npx sequelize db:migrate
  ```

  ```
  $ cd take_break_server
  $ npm install
  $ npm run dev
  ```
