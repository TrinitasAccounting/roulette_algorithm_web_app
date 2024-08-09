
import { useState } from "react";

function CodeInputForm({ formData, setFormData, handleSubmit, wrongCodeDiv, setWrongCodeDiv }) {

    // initalizing state for the controlled form
    // const [formData, setFormData] = useState({
    //     inputCode: ''
    // })

    // On Change handler
    function handleChange(event) {
        event.preventDefault();

        let newFormData = { ...formData, [event.target.name]: event.target.value }
        setFormData(newFormData)
    }




    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Your Code For Access:
                    <input type="text" name="inputCode" value={formData.inputCode} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {wrongCodeDiv ? <h1 style={{ color: 'red' }}>Incorrect Code, Please Try Again</h1> : <></>}

        </>
    )
}

export default CodeInputForm;