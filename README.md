# cognito-authentication-client
frontend client to use with cognito-authentication

## Install
```
npm install @pd-js/cognito-authentication-client
```

## Requirements
- Use with Vite

Environment variables
```
VITE_APP_NAME=<example_app>
VITE_LOGIN_URL=<example http://localhost:3000/login>
```

## Usage
```
import CognitoAuthentication from '@pd-js/cognito-authentication-client'

const cognito = new CognitoAuthentication()

cognito.isAuthenticated() // It should show if exists access_token stored
cognito.login() // It redirect and manipulate the login process
```
* example:
```
if (!cognito.isAuthenticated()) {
  cognito.login()
}
```
