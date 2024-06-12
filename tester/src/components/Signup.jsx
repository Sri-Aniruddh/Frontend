import React, { useState } from 'react'
import axios from 'axios'


export function Signup(props) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        fullname: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/v1/users/register", formData)
            console.log(response.data)
        } catch (error) {
            console.log("error in signup", error)
        }
    }
    return (
        <form onSubmit={handleSubmit}>

            <input type="text"
                placeholder='Username'
                name='username'
                value={formData.username}
                onChange={handleChange} />
            <input type="text"
                placeholder='Fullname'
                name='fullname'
                value={formData.fullname}
                onChange={handleChange} />

            <input type="text"
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange} />

            <input type="password"
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={handleChange} />

            <button type="submit">Signup</button>
        </form>
    )
}
