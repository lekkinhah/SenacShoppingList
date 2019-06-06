import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

class Login extends React.Component {

    state={
        user:'',
        password:'',
        login:''
    };
   

    handleSubmit = (event) => {
        event.preventDefault();
        
        const {user, password} = this.state;

        if(user && password){
          this.setState({login:[{user: user, password: password}]});
        }
    };

    handleUserChange = (event) => {
        this.setState({user: event.target.value});
    };

    handlePwdChange = (event) => {
        this.setState({password: event.target.value});
    };

    render(){

        const {login} = this.state;

        if(login){
            return(
                <Redirect to="/"></Redirect>
            );
        } else {

            return(
                <Fragment>
                    <div>Olá Login</div>
                    <form onSubmit={this.handleSubmit}> 
                        <label>Usuário</label>
                        <input type="text" id="user" value={this.user} onChange={this.handleUserChange}></input>
                        <label>Senha</label>
                        <input type="password" id="password" value={this.password} onChange={this.handlePwdChange}></input>
                        <button>Entrar</button>
                    </form>
                    
                </Fragment>
            );
        }
    }
}

export default Login;