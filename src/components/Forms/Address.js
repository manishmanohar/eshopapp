import React from "react"
import "./Forms.css"

export default function Address({isLoggedIn,setLoginState}) {

    const [formData, setFormData] = React.useState(
        {
            name: "",
            number: "",
            street: "",
            city: "",
            state: "",
            landmark: "",
            zipcode:""
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
        console.log("Address submitted")
    }


    return (
        <div>
            <div className="form-container">

                <form onSubmit={handleSubmit} className="form--signup">
                    
                    <h3>Add Address</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={handleChange}
                        name="name"
                        value={formData.firstName}
                        className="form-input"
                        required
                    />
                     <input
                        type="text"
                        placeholder="Contact Number"
                        onChange={handleChange}
                        name="number"
                        value={formData.number}
                        className="form-input"
                        required

                    />
                    <input
                        type="text"
                        placeholder="Street"
                        onChange={handleChange}
                        name="street"
                        value={formData.street}
                        className="form-input"
                        required

                    />
                    <input
                        type="text"
                        placeholder="City"
                        onChange={handleChange}
                        name="city"
                        value={formData.city}
                        className="form-input"
                        required

                    />
                    <input
                        type="text"
                        placeholder="State"
                        onChange={handleChange}
                        name="state"
                        value={formData.state}
                        className="form-input"
                        required

                    />
                    <input
                        type="text"
                        placeholder="Landmark"
                        onChange={handleChange}
                        name="landmark"
                        value={formData.landmark}
                        className="form-input"
                        required

                    />
                    <input
                        type="text"
                        placeholder="Zip Code"
                        onChange={handleChange}
                        name="zipcode"
                        value={formData.zipcode}
                        className="form-input"
                        required

                    />
                   
                    <br />
                    <br />
                    <button className="form-button">Save Address</button>
                    

                </form>
                <button> Back</button> <button> Next</button>

            </div>
        </div>
    )
}