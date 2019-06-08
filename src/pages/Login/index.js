import React from 'react';
import {
    BrowserRouter as Router,
     Redirect,
    
  } from "react-router-dom";
import LoginForm from '../../components/LoginForm';


class Login extends React.Component {

    state={
        credentials: '',
    };

    handleLoginFormSubmit = (result) => {
        this.setState({credentials: result});  
        console.log(result);
    };
  
    render(){

        const {credentials} = this.state;

        if(credentials){
            return(
                <Redirect to="/Home"></Redirect>
            );
        } else {

            return(
                <LoginForm onSubmit={this.handleLoginFormSubmit}></LoginForm>
            );
        }
    }
}

export default Login;