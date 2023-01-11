import React from "react";
import Navbar from "../navbar/Navbar";
import "./Forms.css";
import axios from 'axios';
import logo from './../../assets/loginlogo.png'

export default function Signup() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmpassword: "",
            contactNumber: ""
        }
    )


    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.confirmpassword) {
            axios.post('http://localhost:3001/signup', formData).then((response) => {
                console.log(response);
                window.location.href = "/login"
            });
        } else {
            console.log("passord doesn't match")
        }
    }


    return (
        <div>
            <Navbar />
            <div className="form-container">

                <form onSubmit={handleSubmit} className="form--signup">
                    <img src={logo} style={{ width: '30px' }} />
                    <h3>Sign up</h3>
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastName}
                        className="form-input"
                        required

                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        className="form-input"
                        required

                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                        value={formData.password}
                        className="form-input"
                        required

                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        name="confirmpassword"
                        value={formData.confirmpassword}
                        className="form-input"
                        required

                    />
                    <input
                        type="number"
                        placeholder="Contact Number"
                        onChange={handleChange}
                        name="contactNumber"
                        value={formData.number}
                        className="form-input"
                        required

                    />
                    <br />
                    <br />
                    <button className="form-button">Submit</button>
                    <a href="/login" style={{ marginTop: '10px', marginRight: '-160px' }}>Already have an account?Sign in</a>

                </form>
            </div>
        </div>
    )
}