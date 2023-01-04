# cognito-authentication-client
frontend client to use with cognito-authentication

## Install
```
npm install @pd-js/cognito-authentication-client
```

## Usage
```
const APP_NAME=<example_app
const LOGIN_URL=<example http://localhost:3000/login>

import CognitoAuthentication from '@pd-js/cognito-authentication-client'

const cognito = new CognitoAuthentication(APP_NAME, LOGIN_URL)

cognito.isAuthenticated() // It should show if exists access_token stored
cognito.login() // It redirect and manipulate the login process
```
* example:
```
if (!cognito.isAuthenticated()) {
  cognito.login()
}
```
