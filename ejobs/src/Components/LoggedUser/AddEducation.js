import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileAction';
import InputField  from '../../Reusing/InputField'
import "../../Css/AddEducation.css"

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institute: '',
      degree: '',
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
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const eduData = {
      institute: this.state.institute,
      degree: this.state.degree,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
    };

    this.props.addEducation(eduData);
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
                                    <h2>Education</h2>
                                    <div className="fieldGroup">
                                        <InputField 
                                                fieldName="Institute" 
                                                type="text"  name="institute"
                                                value={this.state.name} 
                                                onChange={this.onChange}/>
                                        <InputField 
                                                fieldName="Degree" 
                                                type="text"  name="degree"
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
                                         <button  className='eduSubmit'>Submit</button> 
                                    </div>
                               
            </form>
        </div>
     
    );
  }
}

AddEducation.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(
  AddEducation
);
