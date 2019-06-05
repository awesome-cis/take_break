# Guide for OAuth implement

## Github

### Client

1. create oauth app
2. https://github.com/login/oauth/authorize?scope=user:email&client_id=YOUR_CLIENT_ID&redirect_uri=REDIRECT_URI_YOU_SET
3. check `code` value in URI
4. Transfer to server with `code`

### Server

5. POST https://github.com/login/oauth/access_token

   ```
   Request
   {
       "client_id": "YOUR_CLIENT_ID",
       "client_secret": "YOUR_CLIENT_SECRET",
       "code": "CODE_FROM_STEP3"
   }

   Response
   {
       "access_token": "ACCESS_TOKEN",
       "token_type": "bearer",
       "scope": "user:email"
   }
   ```

6. Use GitHub API

   ```
   GET https://api.github.com/user

   Authorization token ACCESS_TOKEN
   ```

7. Login response to client
