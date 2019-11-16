import React, {useState} from 'react';
import googleIcon from '../assets/images/google-icon.png';
import twiterIcon from '../assets/images/twitter-icon.png';
import {connect} from  'react-redux';
import {loginRequest} from '../actions/index';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';

const Login = props => {

  const { user } = props;

  const hasUser = Object.keys(user).length > 0;

  console.log('hasUser =>',hasUser);

    const [form, setValues] = useState({
      email:'',
    });


    const handleInput = event =>{
        setValues ({
            ...form,
            [event.target.name] : event.target.value
        });
    };
      
    
        const handleSubmit = event =>{
            
          console.log(`Datos Ingresados ${event.target.email.value}`);
          console.log(`Datos Ingresados ${event.target.password.value}`);
          console.log(`Datos Ingresados ${form}`);

            event.preventDefault();
            props.loginRequest(form);
            props.history.push('/login');
            
            
          }


          return (

            <section className="login">
              {}
              <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                  <input name="email" 
                         className="input" 
                         type="text" 
                         placeholder="Correo" 
                         onChange ={handleInput} />
                  <input name ="password"
                         className="input" 
                         type="password" 
                         placeholder="Contraseña"
                         onChange = {handleInput} />
                  
                  <button className="button">Iniciar sesión</button>
                  <div className="login__container--remember-me">
                    <label>
                      <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                  </label>
                    <a href="/">Olvidé mi contraseña</a>
                  </div>
                </form>
                <section className="login__container--social-media">
                  <div><img src={googleIcon} /> Inicia sesión con Google</div>
                  <div><img src={twiterIcon} /> Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta<br/>
                    <Link to="/register">
                            Registrate
                    </Link>
              </p>
              </section>
            </section>
          );
        }
        
        const mapStateToProps = state =>{
          return {
            user:state.user
          }
        }

        const dispatchToProps  ={
          loginRequest,
        }
        
        
        export default connect(mapStateToProps,dispatchToProps) (Login);