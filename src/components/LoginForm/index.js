import React, {Fragment} from 'react';

class LoginForm extends React.Component {

    state={
        user:'',
        password:'',
        login:''
    };
   

    handleSubmit = (event) => {
        event.preventDefault();
        
        if(this.props.onSubmit){
            const credentials= {
                user: this.state.user,
                password: this.state.password
            };
            this.props.onSubmit(credentials);
        }
            

        this.setState({user: '', password: ''});
    };

    handleUserChange = (event) => {
        this.setState({user: event.target.value});
    };

    handlePwdChange = (event) => {
        this.setState({password: event.target.value});
    };

    render(){

            return(
                    <form onSubmit={this.handleSubmit}> 
                        <label>Usuário</label>
                        <input type="text" id="user" value={this.user} onChange={this.handleUserChange}></input>
                        <label>Senha</label>
                        <input type="password" id="password" value={this.password} onChange={this.handlePwdChange}></input>
                        <button>Entrar</button>
                    </form>
            );
        }
    }


export default LoginForm;