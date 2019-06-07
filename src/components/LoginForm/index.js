import React, {Fragment} from 'react';
//import './Login.css';
import './login2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUnlock } from '@fortawesome/free-solid-svg-icons'

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
                   <Fragment>
                        <div class="session">
                        <div class="left">
                            <svg enable-background="new 0 0 300 302.5" version="1.1" viewBox="0 0 300 302.5"></svg>      
                        </div>
                   
                   <form onSubmit={this.handleSubmit} className='form'> 
                      <h4>Bem Vindo ... </h4>
                        <p>Faça seu login para acessar o sistema:</p>
                        <div className='floating-label'>
                            <label for='user'>Usuário</label>
                            <input placeholder='Usuário' type="text" id="user" value={this.user} onChange={this.handleUserChange}></input>
                            <div class="icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>
                        <div className='floating-label'>
                        <label for='senha'>Senha</label>
                        <input placeholder='Senha' type="password" id="password" value={this.password} onChange={this.handlePwdChange}></input>
                        <div class="icon">
                                <FontAwesomeIcon icon={faUnlock} />
                            </div>
                        </div>
                        <button className='button'><span>Entrar</span></button>
                    </form>
                    </div>
                    </Fragment>
            );
        }
    }


export default LoginForm;