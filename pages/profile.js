import {
    // React,
    Component, Fragment
} from 'react'
import withAuth from '../utils/withAuth'



import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import Footer from '../components/Footer';



class ProfilePage extends Component {
    render() {
     
        const { auth } = this.props
        const profile = auth.getProfile()

       
        const Profile = () => {
            if (profile) {
                return (
                    <UserProfile  user={profile}></UserProfile>
                )
            } else {
                return (
                    <div>Loading...</div>
                )
            }
        }

         return (
            <Fragment>
                <Header />
                <main>
                    <Profile />
                </main>
                <Footer />
            </Fragment >
        )
    }
}


export default withAuth(ProfilePage)