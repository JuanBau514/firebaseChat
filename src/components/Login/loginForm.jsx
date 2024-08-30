import React, { useState } from 'react';
import './loginForm.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        // Aquí iría la lógica para iniciar sesión con Google a través de Firebase
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Logged in user:", user);
            navigate("/vFinal"); // Redirigir al componente vFinal tras un login exitoso
        } catch (error) {
            setError("Invalid email or password");
        }
    };

    return (
         <div className="contenedor">
            <div className="login-wrapper">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="inputbox">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputbox">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type='checkbox' name='' value='' />
                            Remember me
                        </label>
                        <a href='register'>Forgot password?</a>
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>
                <button onClick={handleGoogleLogin} className="google-btn">
                    <div className="btnG">
                        <div className="circle">
                            <img src="/src/assets/google-icon.png" alt="Google" />
                        </div>
                        <p>Sign in with Google</p>
                    </div>
                </button>

            </div>
        </div>
    );
}

export default LoginForm;
