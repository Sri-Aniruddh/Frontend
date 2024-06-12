import React, { useState } from 'react'

export function Popup(props) {
    
    const [formData,setFormData] = useState({
        message:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(formData)
        console.log(formData)
        
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='message'
            name="message"
            value={formData.data}
            onChange={handleChange}
            />

            <button type='submit'>submit</button>
        </form>
    )
}
