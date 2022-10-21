import React from 'react'
import {TextInput, Button} from 'react-materialize'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
export default function Contact() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    const handleSubmit =(e)=> {
        e.preventDefault()
      }
    
    return (
        <div className="contact" >
            <div className="form_container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <h3 className="center-align  ">Contact Us</h3>
            <form onSubmit={handleSubmit}>
                <TextInput
                    icon="email"
                    id="TextInput-38"
                    label="Email"
                />
                <TextInput 
                    icon="password"
                    id="TextInput-41"
                    label="Password"
                    password
                />
                <TextInput
                    icon="email"
                    id="TextInput-38"
                    label="Email"
                />
                <TextInput
                    icon="message"
                    id="TextArea-28"
                    label="Message"
                    />
                <Button className=" pink lighten-3 right">Submit</Button>
            </form>
            </div>
           
        </div>
    )
}
