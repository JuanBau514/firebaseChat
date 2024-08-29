import React from "react";
import "./loginForm.css"; // Reutilizamos el CSS existente

const RegisterForm = () => {
    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Register</h1>
                <div className='inputbox'>
                    <input type='text' placeholder='Username' name='username' required='required' />
                </div>
                <div className='inputbox'>
                    <input type='email' placeholder='Email' name='email' required='required' />
                </div>
                <div className='inputbox'>
                    <input type='password' placeholder='Password' name='password' required='required' />
                </div>
                <div className='inputbox'>
                    <input type='password' placeholder='Confirm Password' name='confirm-password' required='required' />
                </div>

                <button type='submit' className='login-btn'>Register</button>
            </form>

            <div className="registerLogin">
                <p> Already have an account? <a href='/'>Login here</a> </p>
            </div>
        </div>
    );
}

export default RegisterForm;
