import React from "react"
import Navbar from "../navbar/Navbar"
import "./Forms.css"

export default function ModifyProduct() {

    const [formData, setFormData] = React.useState(
        {
            name: "",
            category: "",
            manufacturer: "",
            availableItems: "",
            price: "",
            imageUrl: "",
            productDescription:""
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
        console.log("Product Modified")
    }


    return (
        <div>
            <Navbar/>
            <div className="form-container">

                <form onSubmit={handleSubmit} className="form--signup">
                    
                    <h3>Modify Product</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={handleChange}
                        name="name"
                        value={formData.firstName}
                        className="form-input"
                        required
                    />
                     <select
                        // type="text"
                        placeholder="Category"
                        onChange={handleChange}
                        name="category"
                        // value={formData.category}
                        className="form--select"
                        required

                    >
                        <option>Apparel</option>
                        <option>Electronics</option>
                        <option>Personal Care</option>

                    </select>
                    <input
                        type="text"
                        placeholder=""
                        onChange={handleChange}
                        name="Manufacturer"
                        value={formData.manufacturer}
                        className="form-input"
                        required

                    />
                    <input
                        type="text"
                        placeholder="City"
                        onChange={handleChange}
                        name="availableItems"
                        value={formData.availableItems}
                        className="form-input"
                        required

                    />
                    <input
                        type="text"
                        placeholder=""
                        onChange={handleChange}
                        name="price"
                        value={formData.price}
                        className="form-input"
                        required

                    />
                    <input
                        type="text"
                        placeholder=""
                        onChange={handleChange}
                        name="imageUrl"
                        value={formData.imageUrl}
                        className="form-input"
                        required

                    />
                    <input
                        type="text"
                        placeholder=""
                        onChange={handleChange}
                        name="productDescription"
                        value={formData.productDescription}
                        className="form-input"
                        required

                    />
                   
                    <br />
                    <br />
                    <button className="form-button">Modify Product</button>
                    
                </form>

            </div>
        </div>
    )
}