import React from 'react'
import Logo_png from '../../image/logo-n.png'
class Logo extends React.Component{
    render(){
        return(
            <div className="logo">
                <img src = {Logo_png}  alt = "美团外卖"/>
            </div>
        );
    }
}
export default Logo;