const {
  VITE_APP_NAME: appName,
  VITE_LOGIN_URL: loginURL
} = import.meta.env

class CognitoAuthentication {
  #appName
  #loginURL
  #storage

  constructor () {
    this.#appName = appName?.toUpperCase()
    this.#loginURL = loginURL
    this.#storage = sessionStorage
  }

  #setToken ({ access_token: token }) {
    this.#storage.setItem(`${this.#appName}_TOKEN`, token)
  }

  #fetchData (url) {
    const { origin, pathname } = window.location
    const headers = {
      originalUrl: `${origin}${pathname}`
    }
    return fetch(url, { headers })
      .then((response) => response.json())
  }

  #getToken (url) {
    return this.#fetchData(url)
      .then((data) => data)
      .catch((error) => console.log(error))
  }

  #redirectLogin (url) {
    this.#fetchData(url)
      .then((data) => window.location.href = data.loginURL)
      .catch((error) => console.error(error))
  }

  isAuthenticated () {
    const token = this.#storage.getItem(`${this.#appName}_TOKEN`)
    return !!token
  }

  login () {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    if (code) {
      const url = `${this.#loginURL}?code=${code}`
      return this.#getToken(`${this.#loginURL}?code=${code}`)
        .then((sessionData) => { 
          if (sessionData) this.#setToken(sessionData)
        })
    }
    return this.#redirectLogin(this.#loginURL)
  }
}

export default CognitoAuthentication
