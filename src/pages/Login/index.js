import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
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
                <Fragment>
                    <div>Olá Login</div>
                    <LoginForm onSubmit={this.handleLoginFormSubmit}></LoginForm>
                    
                </Fragment>
            );
        }
    }
}

export default Login;