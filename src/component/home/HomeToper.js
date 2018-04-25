import React  from 'react'
import Logo from '../common/Logo';
import HomeUserBar from './UserBar';
import AddressSeacher from './AddressSeacher';
class HomeToper extends React.Component{
    render(){
        return(
            <div className="top_bg">
                <div className="logo_bg"></div>
                    <Logo />
                    <AddressSeacher/>
                    <HomeUserBar />
            </div>
        );
    }
}
export default HomeToper;