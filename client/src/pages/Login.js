import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = ({ role }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await login(email, password, role)
    }

    return (
        <div className="login-page">
            <div className="login-image"></div>
            <form className="login" onSubmit={handleSubmit}>
                <h1><strong>Login</strong></h1>

                <label>Username:</label>
                <div className="input-box">
                    <input 
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter username"
                    />
                </div>

                <label>Password:</label>
                <div className="input-box">
                    <input 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter password"
                    />
                </div>

                <div className="forgot-pass">
                    <a href="#">Forgot password?</a>
                </div>

                <button disabled={isLoading}>Confirm</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Login;