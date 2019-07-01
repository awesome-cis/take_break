# TAKE BREAK SERVER

## Getting Started

### Production

```
$ cp .env.sample .env
$ vi .env
# => start server
```

### Development

> `.env.local`은 로컬(development, test)에서 공통으로 사용되며 .gitignore에 포함되어 변경사항 개발자마다 다른 값을 가질 수 있도록 해줍니다.

- `.env.local` 세팅
  ```
  $ cp .env.local.sample .env.local
  ```
- `.env.development` 세팅
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

### Test

- `.env.local` 세팅
  ```
  $ cp .env.local.sample .env.local
  ```
- `.env.test` 세팅
- reset database

  ```
  $ NODE_ENV=test npx sequelize db:drop
  $ NODE_ENV=test npx sequelize db:create
  $ NODE_ENV=test npx sequelize db:migrate
  ```

- run test

  ```
  $ npm run test
  ```

  기본적으로 watch 모드로 동작합니다. <kbd>a<kbd> 키를 눌려 전체 테스트 수행

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
