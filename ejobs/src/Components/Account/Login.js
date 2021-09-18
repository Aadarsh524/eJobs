import React , { Component } from 'react'
import "../../Css/Login.css"
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authAction.js';
import { withRouter } from "react-router-dom";
import  { clearErrors }  from '../../actions/error';

class Login extends Component {
     constructor(){
         super();
             this.state = {
                 email: '',
                 password: '',
                 errors: {}
             };
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

     }
     componentWillReceiveProps(nextProps){
         if(nextProps.auth.isAuthenticated){
             this.props.history.push('/dashboard');
         }
            if(nextProps.errors){
                this.setState({
                    errors: nextProps.errors
                });
            }
     }
     onChange(e){
         this.setState({[e.target.name]: e.target.value});
     }
      onSubmit(e){
         e.preventDefault();

         const userData = {
           email: this.state.email,
           password: this.state.password,
         };
         this.props.login(userData);
     }
      render() {
   const { errors } = this.props.error;
       if(errors){
           if(errors.email){
           alert(errors.email);
       }
       if(errors.password){
           alert(errors.password);
       }
           this.props.clearErrors();
       }

    return (
        <div className="login">
            <Link to="/" style={{textDecoration:0}}>
                 <h1 className="ejobs">eJobs</h1>
                   
            </Link>
            <div className="loginBox">
                <h3>Welcome Back</h3> 
                <form autoComplete="off" className="loginForm" onSubmit={this.onSubmit}>
                    <h5>Email</h5>
                    <input type='text'  name= 'email'
                    value={this.state.name} 
                    onChange={this.onChange}  />

                    <h5>Password</h5>
                    <input type='password'  name= 'password'
                      value={this.state.name}
                     onChange={this.onChange} />
                    <div className="other">
                        <div>No Account.<Link to="/register" style={{textDecoration:0}}><span className="accountRouting">Register</span></Link></div>
                        <button type='submit'className='loginBtn'>Login</button>
                    </div>
                </form>

       
            </div>
               
        </div>
    )

  }
}

Login.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps,{clearErrors, login })(withRouter(Login));

