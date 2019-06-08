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

### How to make model

[Migration Docs](http://docs.sequelizejs.com/manual/migrations.html)

#### When you create new table (model)

```
$ npx sequelize model:generate --name User --attributes name:string,nickname:string
```

- models/user.js 를 ts파일로 바꾸고 컨벤션 맞춰 처리
- migrations/\*-create-users.js 파일 확인 후 파일 변경 및 수정사항 반영

#### When you create new migration (alter table)

```
npx sequelize migration:generate --name add-password-to-users
```

- migrations/\*-add-password-to-users.js 파일 확인 후 파일 변경. 마이그레이션 명령 코드는 [여기](http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html)에서 확인
- 관련 모델 수정사항 반영
