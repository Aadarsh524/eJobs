import React , { Component } from 'react'
import "../../Css/Register.css"
import { Link } from "react-router-dom";
import { register } from '../../actions/authAction.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import  { clearErrors }  from '../../actions/error';
 class Register extends Component {
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
         
         const newUser = {
           email: this.state.email,
           password: this.state.password,
         };
         this.props.register(newUser, this.props.history);
     }
    render() {
        const { errors } = this.props.error;
       if(errors){
           if(errors.email){
           alert(errors.email);
       }
           this.props.clearErrors();

       }
        return (
            <div>
                <div className="register">
            <Link to="/" style={{textDecoration:0}}>
                 <h1 className="ejobs">eJobs</h1>
            </Link>
            <div className="registerBox">
                <h3>Create Account</h3> 
                <form autoComplete="off" className="registerForm" onSubmit={this.onSubmit}>
                    <h5>Email</h5>
                    <input  type='text'  
                    name= 'email'
                    value={this.state.name} 
                    onChange={this.onChange} 
                     />

                    <h5>Password</h5>
                    <input type='password'
                     name= 'password'
                      value={this.state.name}
                     onChange={this.onChange}  
                             />
                    <div className="other">
                        <div>Have Account.<Link to="/login" style={{textDecoration:0}}><span className="accountRouting">Login</span></Link></div>
                        <button type='submit' className='registerBtn'>Register</button>
                    </div>
                </form>
                  <p>
                    By signing-in you agree to the ejobs Conditions. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
       
            </div>
               
        </div>
            </div>
        )
    }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error
});
export default connect(mapStateToProps, { clearErrors, register })(withRouter(Register));
