import GlobalConfig from '../components/GlobalConfig';
import {
    setStorage,
    getStorage,
    removeStorage
} from './LocalStorage';
import Cookies from 'universal-cookie';
import fetch from 'isomorphic-unfetch'

export default class AuthService {
    constructor(domain, cookie_store) {
        this.domain = domain || this.GlobalConfig.API_URL
        this.fetch = this.fetch.bind(this)
            // this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.setProfile = this.setProfile.bind(this)
        this.setToken = this.setToken.bind(this)
        this.loadProfile = this.loadProfile.bind(this)
        this.loggedIn = this.loggedIn.bind(this)
        this.logout = this.logout.bind(this)
        this.cookie = new Cookies(cookie_store)
    }

    // login(email, password) {
    //     // Get a token
    //     return this.fetch(`${this.domain}/api/token`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             email,
    //             password
    //         })
    //     }).then(res => {
    //         this.setToken(res)
    //         return this.fetch(`${this.domain}/api/user`, {
    //             method: 'GET'
    //         })
    //     }).then(res => {
    //         this.setProfile(res)
    //         return Promise.resolve(res)
    //     })
    // }

    setToken(response) {
        console.log('setting token')
            // const expires = 24 * 60 * 60 * 7;
        const expireDate = new Date()
        expireDate.setDate(expireDate.getDate() + 7);

        this.cookie.set('accesstoken', response.headers.get('access-token'), {
            expires: expireDate
        });
        this.cookie.set('client', response.headers.get('client'), {
            expires: expireDate
        });
        this.cookie.set('tokentype', response.headers.get('token-type'), {
            expires: expireDate
        });
        this.cookie.set('expiry', response.headers.get('expiry'), {
            expires: expireDate
        });
        this.cookie.set('uid', response.headers.get('uid'), {
            expires: expireDate
        });

        // Cookie.set('client', response.headers.get('client'), {
        //     expires: expires
        // });
        // Cookie.set('tokentype', response.headers.get('token-type'), {
        //     expires: expires
        // });
        // Cookie.set('expiry', response.headers.get('expiry'), {
        //     expires: expires
        // });
        // Cookie.set('uid', response.headers.get('uid'), {
        //     expires: expires
        // });
        // setStorage("id_token", response.headers.get('access-token'), expires)

    }

    loadProfile() {
        console.log('loading profile')
        const url = `${this.domain}/auth/me`
        return this.fetch(url).then((response) => {
            this.setProfile(response.user)
        })
    }
    setProfile(profile) {
        console.log('setting profile')
            // Saves profile data to localStorage
        setStorage('profile', JSON.stringify(profile))
    }

    getProfile() {
        // Retrieves the profile data from localStorage
        const profile = getStorage('profile')
        return profile ? JSON.parse(profile) : {}
    }


    loggedIn() {
        return this.getToken() !== null
    }

    getToken() {
        // Retrieves the user token from localStorage
        return this.cookie.get('accesstoken')
    }

    getClient() {
        // Retrieves the user token from localStorage
        return this.cookie.get('client')
    }

    getExpiry() {
        // Retrieves the user token from localStorage
        return this.cookie.get('expiry')
    }

    getUID() {
        return this.cookie.get('uid')
    }

    logout() {
        console.log('logout called')
        const now = new Date()
            // Clear user token and profile data from localStorage
        this.cookie.set('accesstoken', '', {
            expires: now
        });
        this.cookie.set('client', '', {
            expires: now
        });
        this.cookie.set('expiry', '', {
            expires: now
        });
        this.cookie.set('uid', '', {
            expires: now
        });
        this.cookie.set('tokentype', '', {
            expires: now
        });
        removeStorage('profile');
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if (this.loggedIn()) {
            headers['access-token'] = this.getToken()
            headers['client'] = this.getClient()
            headers['uid'] = this.getUID()
            headers['expiry'] = this.getExpiry()
            console.log('Sending headers')
            console.log(headers)
        } else {
            console.log('Warning not logged in')
        }

        return fetch(url, {
                headers,
                ...options
            })
            .then(this._checkStatus)
            .then(response => response.json())
    }
}