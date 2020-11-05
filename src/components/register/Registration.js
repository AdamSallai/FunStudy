import React, {useState, useEffect} from 'react'

export default function Registration() {

    return (
        <div id="registration" className="authentication-box">
            <h2>Registration</h2>
            <div className="authentication-textbox">
                <label htmlFor="authentication-input"></label>
                <input id="authentication-input" type="text" placeholder="E-mail" name="email" autoComplete="off" required></input>
                <input id="authentication-input" type="text" placeholder="First name" name="firstName" autoComplete="off" required></input>
                <input id="authentication-input" type="text" placeholder="Last name" name="lastName" autoComplete="off" required></input>
                <input id="authentication-input" type="date" placeholder="YYYY/MM/DD" name="date" autoComplete="off" required></input>
                <input id="authentication-input" type="password" placeholder="Password" name="password" autoComplete="off" required></input>
                <button className="authentication-button" type="submit">Sign Up</button>
            </div>
        </div>    
    )
}
