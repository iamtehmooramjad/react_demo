import React from "react"

export default function App() {

    /**
     * Challenge: Connect the form to local state
     *
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [formData,setFormData] = React.useState({
        email : "",
        password: "",
        confirmPassword:"",
        isJoin : true
    });

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password===formData.confirmPassword){
            console.log('Successfully Signed up')
        }else{
            console.log('Passwords do not match')
            return
        }

        if (formData.isJoin){
            console.log('Thanks for signing up newsletter')
        }
    }

    function handleChange(event) {
        const {name,value,type,checked} = event.target
        setFormData(prevFormData =>{
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.isJoin}
                        onChange={handleChange}
                        name="isJoin"
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit"> Sign up </button>
            </form>
        </div>
    )
}
