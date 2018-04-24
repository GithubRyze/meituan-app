import React    from 'react'
import HomeToper from './HomeToper';
import Merchant from './HomeMerchant';
import Footer from './HomeFooter'
class HomeIndex extends React.Component{
    render(){
        return(
            <div>
                <HomeToper />
                <Merchant />
                <Footer />
            </div>
        );
    }
}
export default HomeIndex;