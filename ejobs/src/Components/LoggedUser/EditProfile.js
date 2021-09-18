import React, { Component } from 'react'
import "../../Css/EditProfile.css";
import { setProfileData } from '../../actions/profileAction.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import NavName from './NavName'
import InputField  from '../../Reusing/InputField'
import  TAfield from '../../Reusing/TAfield';
import {   Link} from "react-router-dom";
import {  RiFileCopy2Line} from "react-icons/ri";
import {   IoIosSend } from "react-icons/io";






 class EditProfile extends Component {
     constructor(){
         super();
             this.state = {
                
                 username: '',
                 phone: '', 
                 age:'',
                 address:'',
                 userPhoto:'',

                 profession:'',
                 hourlyRate:'',
                 availibilty:'',
                 experience:'',
                 portfolio:'',

                 github:'',
                 behance:'',
                 facebook:'',
                 linkedin:'',
                 instagram:'',


                 cv:'',
                 certficates:'',
                 description:'',


                 languages:'',
                 skills:'',

                 education:{
                     institute:"",
                     course:"",
                     location:"",
                     from:"",
                     to:""
                 },
                   workexperience:{
                     company:"",
                     Job:"",
                     location:"",
                     from:"",
                     to:""
                 },

             };
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
          this.PhotoHandler = this.PhotoHandler.bind(this);

     }
     onChange(e){
         this.setState({
             [e.target.name]: e.target.value,
             disabled: !this.state.disabled,
            });
     
    }  
    PhotoHandler = event => {  
    this.setState({
         userPhoto: event.target.files[0]
    });
      
    

    }
   
    
      onSubmit(e){
      e.preventDefault();   
         const editProfile = {
           username: this.state.username,
           phone: this.state.phone,
           profession: this.state.profession,
           hourlyRate: this.state.hourlyRate,
           availibilty: this.state.availibilty,
           age: this.state.age,
           address: this.state.address,
           experience: this.state.experience,
           github: this.state.github,
           behance: this.state.behance,
           facebook: this.state.facebook,
           linkedin: this.state.linkedin,
           instagram: this.state.instagram,
           portfolio: this.state.portfolio,
           cv: this.state.facebook,
           certficates: this.state.certficates,
           description: this.state.description,
           languages: this.state.languages,
           skills: this.state.skills,
           education: this.state.education,
           workexperience: this.state.wexperience,
         };
       
          this.props.setProfileData(this.state.userPhoto,editProfile ,this.props.history);
        
     

     
    }
    render() {
        return (
            <div className="editProfile">
                  <NavName pageName="Edit Profile" pageDescription="Add or Update your profile information."  />    
                           

                <div className="editProfile_body">
                        <form onSubmit={this.onSubmit} encType="multipart/form-data">
                                <div className="detailCard">
                                    <h2>Personal Info</h2>
                                    <div className="fieldGroup">
                                        <InputField 
                                                fieldName="Full Name" 
                                                type="text"  name="username"
                                                value={this.state.name}
                                                onChange={this.onChange}
                                                                        />
                                        <InputField 
                                                fieldName="Phone" 
                                                type="text"  
                                                name="phone" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>
                                        <InputField 
                                                fieldName="Age" 
                                                type="text"  
                                                name="age" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>   
                                        <InputField 
                                                fieldName="Address" 
                                                type="text"  
                                                name="address" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>      
                                        <InputField 
                                                fieldName="Photo" 
                                                type="file"  
                                                name="userPhoto" 
                                                onChange={this.PhotoHandler}/> 
                                    </div>
                                </div>
                               
                                <div className="detailCard">
                                    <h2>Social Links</h2>
                                    <div className="fieldGroup">
                                        <InputField 
                                        fieldName="Facebook" 
                                        type="text"  name="facebook"
                                            value={this.state.name} 
                                            onChange={this.onChange}/>
                                        <InputField 
                                                fieldName="Instagram" 
                                                type="text"  
                                                name="instagram" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>
                                        <InputField 
                                                fieldName="GitHub" 
                                                type="text"  
                                                name="github" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>   
                                        <InputField 
                                                fieldName="LinkedIn" 
                                                type="text"  
                                                name="linkedin" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>      
                                        <InputField 
                                                fieldName="Behance" 
                                                type="text"  
                                                name="behance" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/> 
                                    </div>
                                </div>

                                <div className="detailCard">
                                    <h2>Professional Info</h2>
                                    <div className="fieldGroup">
                                        <InputField 
                                           fieldName="Profession" 
                                           type="text"  name="profession"
                                            value={this.state.name} 
                                            onChange={this.onChange}/>
                                        <InputField 
                                                fieldName="Hourly Rate" 
                                                type="text"  
                                                name="hourlyRate" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>
                                        <InputField 
                                                fieldName="Availibilty hrs/week" 
                                                type="text"  
                                                name="availibilty" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>   
                                        <InputField 
                                                fieldName="Experience" 
                                                type="text"  
                                                name="experience" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>      
                                        <InputField 
                                                fieldName="PortFolio Link" 
                                                type="text"  
                                                name="portfolio" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/> 
                                         <InputField 
                                               fieldName="Skills" 
                                               type="text"  name="skills"
                                               value={this.state.name} 
                                               onChange={this.onChange}/>
                                    </div>
                                </div>

                                <div className="detailCard">
                                    <h2>About</h2>
                                    <div className="fieldGroup">
                                        <TAfield 
                                           fieldName="Description" 
                                           type="text"  name="description"
                                            value={this.state.name} 
                                            onChange={this.onChange}/>
                                            
                                        <InputField 
                                                fieldName="C.V" 
                                                type="file"  
                                                name="cv" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>   
                                        <InputField 
                                                fieldName="Certificate" 
                                                type="file"  
                                                name="certificated" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>   
                                          <InputField 
                                                fieldName="Languages" 
                                                type="text"  
                                                name="languages" 
                                                value={this.state.name} 
                                                onChange={this.onChange}/>           
        
                                    </div>
                                </div>
                                     <Link to="/addCredentials" style={{textDecoration:0}}><button className="addCredentialsBtn"><RiFileCopy2Line style={{color: 'gray',fontSize:20, marginRight:25}}/>Add Credentials</button></Link>
                                    <button  className='formSubmit'><IoIosSend style={{color: 'gray',fontSize:25, marginRight:25}}/>Submit Data</button>  
                        </form>
                </div>
            </div>
        )
    }
}
EditProfile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {  setProfileData })(withRouter(EditProfile));
