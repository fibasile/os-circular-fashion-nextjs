import {
    Component,
    Fragment
} from 'react'
import GlobalConfig from '../components/GlobalConfig'
import AuthService from './AuthService'
import Router from 'next/router'

export default function (AuthComponent) {
    return class Authenticated extends Component {

        static async getInitialProps({
            req
        }) {
            const auth_cookies = req ? req.headers.cookie : null
            return {
                auth_cookies
            }
        }

        constructor (props) {
            super(props)
            this.state = {
                isLoading: true,
                user: null
            };
            const cookie_store = this.props.auth_cookies || {}
            this.auth = new AuthService(GlobalConfig.API_URL, cookie_store)

        }

        componentDidMount() {
            if (!this.auth.loggedIn()) {
                Router.push('/')
                return
            }
            this.auth.loadProfile().then(() => {
                this.setState({
                    user: this.auth.getProfile(),
                    isLoading: false
                })
            }).catch(() => {
                console.log('Cannot load profile')
                Router.push('/')
            })
        }

        render() {
            const Auth = this.auth
            return (<Fragment> {
                this.state.isLoading ? (<div> LOADING.... </div>) : ( <AuthComponent {...this.props} auth={Auth} /> )
                } </Fragment>
                )
        }
                }
}