import React, { useContext } from "react"
import { UserContext } from "../../UserContext"
import Navbar from "../navbar/Navbar"
import "./Forms.css"
import axios from 'axios';
import logo from "./../../assets/loginlogo.png";
import { width } from "@mui/system";

export default function Signup() {
    const { user, setUser } = useContext(UserContext);

    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: ""
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
        event.preventDefault();
        console.log("Submitted");
        axios.post('http://localhost:3001/login', formData).then((response) => {
            setUser({ isAdmin: response.data.isAdmin });
            setUser({ loggedIn: true });
            window.location.href = "/home";
        });
    }


    return (
        <div>

            <Navbar />
            <div className="form-container">

                <form onSubmit={handleSubmit} className="form--signin">
                    <img src={logo} style={{ width: '30px' }} />
                    <h3 style={{ fontWeight: '10px' }}>Sign in</h3>

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

                    <br />
                    <br />
                    <button className="form-button">SIGN IN</button>
                    <a href="/signup" style={{ marginTop: '20px', marginLeft: '-180px' }}> Don't have an account?Sign up</a>

                </form>
            </div>
        </div>
    )
}