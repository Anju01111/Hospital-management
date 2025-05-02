// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();


//     // const handleLogin = () => {
//     //     if (username === 'Anjali' && password === 'anjali') {
//     //         alert('Login successful');
//     //         navigate('/dashboard');
//     //     } else {
//     //         alert('Invalid Username or Password');
//     //     }
//     // };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://your-node-backend/api/login', {
//                 username,
//                 password
//             });

//             // Handle successful login
//             console.log(response.data); // Assuming the response contains user data or a token

//             // Redirect to dashboard or perform other actions
//             setError(''); // Clear any previous errors
//         } catch (error) {
//             // Handle login failure
//             console.error('Login failed:', error.response.data.error);
//             setError(error.response.data.error);
//         }
//     };
//     return (
//         <login>
//         <div id="login-container" className="container">
//             <h2>Login</h2>
//             <form id="login-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <input
//                         className="form-control"
//                         placeholder="Username"
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </div><br/>
//                 <div className="form-group">
//                     <input
//                         className="form-control"
//                         placeholder="Password"
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div><br/>
//                 <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
//                     Login
//                 </button><br/>
//                 <div className="sign">
//             Not Registerd? <Link to ="/signup" className="link">Sign Up</Link>
//             </div>
//             </form>
//         </div>
//         </login>
//     );
// }

// export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username,
                password
            });

            // Handle successful login
            console.log(response.data); // Assuming the response contains user data or a token
            setRedirectToDashboard(true);
            setError('');
        } catch (error) {
            // Handle login failure
            console.error('Login failed:', error.response?.data?.error);
            setError(error.response?.data?.error || 'Login failed');
        }
    };

    if (redirectToDashboard) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div id="login-container" className="container">
            <h2>Login</h2>
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Username"
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div><br/>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Password"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div><br/>
                <button type="submit" className="btn btn-primary">
                    Login
                </button><br/>
                <div className="sign">
                    Not Registered? <Link to="/signup" className="link">Sign Up</Link>
                </div>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}

export default LoginForm;
