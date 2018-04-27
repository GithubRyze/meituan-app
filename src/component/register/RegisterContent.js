import React from 'react'
class RegisterContent extends React.Component{
        render(){
            return(
                <div>
                    <form>
                        <ul>
                            <li><label>手  机  号</label>   <input type="number" /></li>
                            <li><label>短信动态码</label> <input type="number" /></li>
                            <li><label>创建  密码</label>  <input type="password" /></li>
                            <li><label>确认  密码</label>  <input type="password"/></li>
                            <li><label>同意以下协议并注册</label></li>
                        </ul>     
                    </form>
                </div>
            );
        }
}
export default RegisterContent;