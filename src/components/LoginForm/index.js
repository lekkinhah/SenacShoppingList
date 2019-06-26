import React, {Fragment} from 'react';
import './Login.css';
import axios from 'axios';
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
                email: this.state.user,
                password: this.state.password
            };
            this.props.onSubmit(credentials);
            console.log("credenciais: ", credentials);
            
            axios.post('https://senac-shopping-list-api.herokuapp.com/v1/users/login', credentials)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }  
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
                        <div className="session">
                        <div className="left">
                            <svg enableBackground="new 0 0 300 302.5" version="1.1" viewBox="0 0 300 302.5"></svg>      
                        </div>
                   
                   <form onSubmit={this.handleSubmit} className='form'> 
                      <h4>Bem Vindo ... </h4>
                        <p>Faça seu login para acessar o sistema:</p>
                        <div className='floating-label'>
                            <label htmlFor='user'>Usuário</label>
                            <input placeholder='Usuário' type="text" id="user" className='input' value={this.user} onChange={this.handleUserChange}></input>
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>
                        <div className='floating-label'>
                        <label htmlFor='senha'>Senha</label>
                        <input placeholder='Senha' type="password" id="password" className='input' value={this.password} onChange={this.handlePwdChange}></input>
                        <div className="icon">
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