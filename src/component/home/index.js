import React    from 'react'
import Logo from '../common/Logo';
import UserBar from './UserBar';
import Merchant from './Merchant';
import Footer from './Footer'
class HomeIndex extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Logo />
                    <UserBar />
                </div>
                <Merchant />
                <Footer />
            </div>
        )
    }
}
export default HomeIndex;