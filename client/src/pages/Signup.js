import { useState } from "react"
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password, role)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>Email:</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <label>Role:</label>
                <div className="input-box">
                    <input 
                        type="text"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                        placeholder="Enter role"
                    />
                </div>

            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup;