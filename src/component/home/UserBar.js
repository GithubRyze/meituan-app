
import React from 'react'
import PhoneImage from '../../image/phone.svg'
class UserBar extends React.Component{
    render(){
        return(
            <div className="userbar fr"> 
                <span className="top-disloginbar fl">
                    <a rel="nofollow" className="register-btn fl" >注册</a>
                    <a rel="nofollow" className="login-btn fl">登录</a>
                </span>
                <a target="_blank" className="download-btn fl">
                    <img src={PhoneImage} alt=""/>下载手机版
                </a>
                <a name="kd-href" target="_blank" className="kd-btn fl">美团外卖开店申请</a>
            </div>
        );
    }
}
export default UserBar;