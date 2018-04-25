import React  from 'react'
class AddressSeacher extends React.Component{
    render(){
        return(
            <div className="top-map">
                <a className="city"> 
                    <span>深圳</span>
                    <b className="trangle-down"></b>
                    <span className="dvd-line"></span>
                </a>
                <input type="text" autoComplete="off" placeholder="输入地址搜索周边美食" className="seacher-input"/>
                <a >搜索</a>               
            </div>
        );
    }
}
export default AddressSeacher;