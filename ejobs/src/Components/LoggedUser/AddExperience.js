import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileAction';
import InputField  from '../../Reusing/InputField'
import "../../Css/AddExperience.css"

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      job: '',
      location: '',
      from: '',
      to: '',
      current: false,
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      company: this.state.company,
      job: this.state.job,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
    };

    this.props.addExperience(expData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {

    return (
        <div className="addExperience">
            <form onSubmit={this.onSubmit}>
                                    <h2>Work Experience</h2>
                                    <div className="fieldGroup">
                                        <InputField 
                                                fieldName="Company" 
                                                type="text"  name="company"
                                                value={this.state.name} 
                                                onChange={this.onChange}/>
                                        <InputField 
                                                fieldName="Job" 
                                                type="text"  name="job"
                                                value={this.state.name} 
                                                onChange={this.onChange}/>
                                         <InputField 
                                                fieldName="Location" 
                                                type="text"  name="location"
                                                value={this.state.name} 
                                                onChange={this.onChange}/>
                                         <InputField 
                                                fieldName="From Date" 
                                                type="date"  name="from"
                                                value={this.state.name} 
                                                onChange={this.onChange}/>
                                        <InputField 
                                                fieldName="Current" 
                                                type="checkBox"  name="currentExp"
                                                value={this.state.name} 
                                                onChange={this.onCheck}/>
                                        <InputField 
                                                fieldName="To Date" 
                                                type="date"  name="to"
                                                value={this.state.name} 
                                                onChange={this.onChange}
                                                disabled={this.state.disabled ? 'disabled' : ''}/>
                                        
                                         <button  className='expSubmit'>Submit</button>
                                    </div>
                               
            </form>
        </div>
     
    );
  }
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(
  AddExperience
);