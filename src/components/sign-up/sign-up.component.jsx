import React from 'react'
import './sign-up.styles.scss'

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { auth, createUserProfileDoc } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
    event.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
        alert('passwords do not match!')
        return
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password)

        await createUserProfileDoc(user, { displayName })
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    } catch (error) {
        console.log(error);
    }
}

handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
        [name]: value
    })
}
render() {
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with email and password</span>
            <form className="sign-up-form">
                <FormInput
                    type='text'
                    name='displayName'
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                ></FormInput>
                <FormInput
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                ></FormInput>
                <FormInput
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                ></FormInput>
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                ></FormInput>
                <CustomButton type='submit' onClick={this.handleSubmit}>SIGN UP</CustomButton>
            </form>
        </div>
    );
}
}

export default SignUp