import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./loginForm.css";

const RegisterForm = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User registered:", user);
            navigate("/"); 
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className='inputbox'>
                    <input 
                        type='text' 
                        placeholder='Username' 
                        name='username' 
                        required='required'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div className='inputbox'>
                    <input 
                        type='email' 
                        placeholder='Email' 
                        name='email' 
                        required='required'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='inputbox'>
                    <input 
                        type='password' 
                        placeholder='Password' 
                        name='password' 
                        required='required'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='inputbox'>
                    <input 
                        type='password' 
                        placeholder='Confirm Password' 
                        name='confirm-password' 
                        required='required'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
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

