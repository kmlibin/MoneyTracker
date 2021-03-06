import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import styles from './Signup.module.css'

export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signup, error, isPending } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }
    
    return (
        <form className={styles['signup-form']} onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>
                <span>Email Address:</span>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                <span>Password:</span>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>
                <span>Display Name:</span>
                <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>
            {!isPending && <button className="btn">Sign Up!</button>}
            {isPending && <button className="btn" disabled>Loading...</button>}
            {error && <p>{error}</p>}
            
        </form>
    )
}