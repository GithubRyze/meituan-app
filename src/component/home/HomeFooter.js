import React from 'react'
import PhoneImage from '../../image/phone.png'
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.state = {
            style:{
                display: 'none',
                position: 'absolute',
                right: -24,
                width: 100,
                bottom: 20
            }
        }
    }
    handleFocus(e){
        const style = {
            display: 'inline',
            position: 'absolute',
            right: -24,
            width: 100,
            bottom: 20
        }
        this.setState({style})
        
    }
    handleOnBlur(e){
        const style = {
            display: 'none',
            position: 'absolute',
            right: -24,
            width: 100,
            bottom: 20
        }
        this.setState({style})
    }
    
    render(){
        return(
            <div className="footer">
                <div className="footer-inner">
                    <div className="footer-entry">
                        <a target="_blank" className="footer-link">
                        <img src={PhoneImage} alt=""/>
                        下载手机版
                        </a>
                        <i>|</i>
                        <a target="_blank" className="footer-link">关注微博</a>
                        <i>|</i>
                        <a target="_blank" href="javascript" rel="nofollow" className="footer-weixin"
                        onMouseOver={this.handleFocus}  onMouseLeave={this.handleOnBlur} >关注微信
                            <img alt="" ref={(img) => this.img = img} src="http://xs01.meituan.net/waimai_web/img/map/weixin.jpg" style={this.state.style}/>
                        </a>
                        <i>|</i>
                        <a name="kd-href" target="_blank">美团外卖开店申请</a>
                        <i>|</i>
                        <a name="kd-href" target="_blank" className="footer-link">配送加盟</a>
                        <i>|</i>
                        <a name="kd-href" target="_blank" className="footer-link">零售加盟</a>
                    </div>
                    <div className="footer-copyright">
                        @2015 meituan.com &nbsp;
                        <a target="_blank" href="http:/www.miibeian.gov.cn/" rel="nofollow">京ICP证070791号&nbsp;
                        </a>
                         京公网安备11010502025545号
                    </div>
                </div>
            </div>    
        );
    }
}
export default Footer;