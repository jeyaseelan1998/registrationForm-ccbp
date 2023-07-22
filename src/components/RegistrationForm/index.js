import { Component } from "react";
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errorMsgFirstName: false,
    errorMsgLastName: false,
    isRegistrationSuccess: false
  }

  onChangeInput = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  onValidateFirstName = () => {
    const { firstName } = this.state
    if (firstName === '') {
      this.setState({ errorMsgFirstName: true })
    } else {
      this.setState({ errorMsgFirstName: false })
    }
  }

  onValidateLastName = () => {
    const { lastName } = this.state
    if (lastName === '') {
      this.setState({ errorMsgLastName: true })
    } else {
      this.setState({ errorMsgLastName: false })
    }
  }

  onFormSubmit = event => {
    event.preventDefault()
    this.onValidateFirstName()
    this.onValidateLastName()

    const { firstName, lastName } = this.state
    if(!firstName || !lastName) return

    this.setState({isRegistrationSuccess: true})
  }

  renderFormFields = () => {
    const { firstName, lastName, errorMsgFirstName, errorMsgLastName } = this.state
    return (
      <form className="registration-form" onSubmit={this.onFormSubmit}>
        <label>FIRST NAME</label>
        <input
          placeholder="First name"
          className={errorMsgFirstName ? 'error-input' : ''}
          type="text"
          value={firstName}
          name="firstName"
          onChange={this.onChangeInput}
          onBlur={this.onValidateFirstName}
        />
        {errorMsgFirstName && <p className="error-msg">*Required</p>}
        <label>LAST NAME</label>
        <input className={errorMsgLastName ? 'error-input' : ''}
          placeholder="First name"
          type="text"
          value={lastName}
          name="lastName"
          onChange={this.onChangeInput}
          onBlur={this.onValidateLastName}
        />
        {errorMsgLastName && <p className="error-msg">*Required</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    )
  }

  onSubmitAnotherResponse = () => {
    this.setState({isRegistrationSuccess: false, firstName:'', lastName:''})
  }

  onSuccessfulRegistration = () => {
    return (
      <>
        <img className="success-image" src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" alt="success"/>
        <p className="success-msg">Submitted Successfully</p>
        <button className="submit-button" type="button" onClick={this.onSubmitAnotherResponse}>Submit Another Response</button>
      </>
    )
  }

  render() {
    const {isRegistrationSuccess} = this.state
    return (
      <div className="registration-form-bg-container">
        <h1 className="main-heading">Registration</h1>
        <div className="registration-form-card">
          {!isRegistrationSuccess && this.renderFormFields()}
          {isRegistrationSuccess && this.onSuccessfulRegistration()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm