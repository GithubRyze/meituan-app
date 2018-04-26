import React  from 'react'
class AddressSeacher extends React.Component{
    render(){
        return(
            <div className="top-map">
                <div className="top">
                    <div className="address m-shadow clearfix">
                        <a className="city fl"> 
                            <span>深圳</span>
                            <b className="trangle-down  "></b>
                            <span className="dvd-line"></span>
                        </a>
                    </div>
                    <div className="fl">
                        <input type="text" autoComplete="off" placeholder="输入地址搜索周边美食" className="seacher-input"/>
                        <a className="div-search-input-a">搜索</a>    
                    </div> 
                </div>          
            </div>
        );
    }
}
export default AddressSeacher;