import { withStyles, Typography } from "@material-ui/core";
import React from 'react';
import PropTypes from 'prop-types';
import GlobalConfig from '../components/GlobalConfig';
import Cookies from 'universal-cookie';
import Router from 'next/router'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthService from '../utils/AuthService';

const styles = (/*theme*/) => ({
    root: {
        textAlign: 'center',
        width: '100%',
    },
    heading: {
        marginTop: '2em'
    }
})



class Login extends React.Component {
    static async getInitialProps(ctx) {
        let cookies;
        
        if (ctx && ctx.req) {
            console.log('server side')
            cookies =  new Cookies(ctx.req.headers.cookie);
            ctx.res.writeHead(301, { Location: `/` })
            ctx.res.end()
        } else {
            console.log('client side')
            // check storage and send to profile or do nothing and show the login page
            cookies = new Cookies();
        }
        return {cookies}
    }

    constructor (props) {
        super(props)
        const {cookies} = props
        this.cookie = cookies
        this.responseGoogle = this.responseGoogle.bind(this)
        this.auth =  new AuthService(GlobalConfig.API_URL)
    }

    responseGoogle(resp){
        console.log(resp)
        var token = resp.Zi;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token.accessToken}`,
                'Content-Type': 'application/json',
                'access_token': `${token.accessToken}`
            },
            body: JSON.stringify(token)
        }
      
        return fetch(`${GlobalConfig.API_URL}/auth/request`, requestOptions)
            .then(response => {
                // const expires = new Date();
                // expires.setDate(expires.getDate() + 7);
                // Cookie.set('accesstoken', response.headers.get('access-token'), { expires: expires });
                // Cookie.set('client', response.headers.get('client'), { expires: expires });
                // Cookie.set('tokentype', response.headers.get('token-type'), { expires: expires });
                // Cookie.set('expiry', response.headers.get('expiry'), { expires: expires });
                // Cookie.set('uid', response.headers.get('uid'), { expires: expires });
                // // console.log(response.body)
                this.auth.setToken(response)
                Router.push('/profile')
            })
            .catch((reason) => {
                console.log('Failed to login')
                console.log(reason)
            })
    }
            
    render(){
        const { classes } = this.props
        const clientId = GlobalConfig.GOOGLE_KEY
        if (process.browser) {
            const{ GoogleAPI, GoogleLogin } = require('react-google-oauth')
    
    
            return (
                <div className={classes.root}>
                    <Header />
                    <main>
                    <Typography variant="h3" className={classes.heading} gutterBottom>
                        Sign in with google
                    </Typography>
                    <GoogleAPI className="GoogleLogin" clientId={clientId}>
                        <div>
                            <GoogleLogin height="10" width="200px" backgroundColor="#4285f4"
                                access="offline" scope="email profile" onLoginSuccess={this.responseGoogle} onFailure={this.responseGoogle} />
                        </div>
                        </GoogleAPI>
                        </main>
                    <Footer />
                </div>
            )
        }
     
    }

}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login)