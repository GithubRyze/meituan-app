import React from 'react'
class Footer extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <a target="_blank">
                    <img src="/public/static/image/phone.png"/>
                    "下载手机版"
                    </a>
                    <i>|</i>
                    <a target="_blank">关注微博</a>
                    <i>|</i>
                    <a target="_blank" href="javascript" rel="nofollow">"关注微信"
                    <img src="http://xs01.meituan.net/waimai_web/img/map/weixin.jpg"/>
                    </a>
                    <i>|</i>
                    <a name="kd-href" target="_blank">美团外卖开店申请</a>
                    <i>|</i>
                    <a name="kd-href" target="_blank">配送加盟</a>
                    <i>|</i>
                    <a name="kd-href" target="_blank">零售加盟</a>
                </div>
                <div>
                    <a target="_blank" href="http:/www.miibeian.gov.cn/" rel="nofollow">京ICP证070791号
                    </a>
                    "京公网安备11010502025545号"
                </div>
            </div>
        );
    }
}
export default Footer;