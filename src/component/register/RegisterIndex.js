import React  from 'react'
import RegisterHeader from './RegiserHeater';
import RegisterContent from './RegisterContent';
class RegisterIndex extends React.Component{


    render(){
        return(
            <div>
                <RegisterHeader />
                <RegisterContent />
            </div>  
        );  
    }
}
export default RegisterIndex;