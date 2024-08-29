import React, { useState } from 'react';
import './loginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogleLogin = () => {
        // Aquí iría la lógica para iniciar sesión con Google a través de Firebase
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para iniciar sesión con nombre de usuario y contraseña
    };

    return (
        <div className="contenedor">
            <div className="login-wrapper">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="inputbox">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputbox">
                        <input
                            type="password"
                            placeholder="Password"
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
