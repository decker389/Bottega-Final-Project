import { useState } from 'react';

export default function LoginForm() {
    const [usernameEmail, setUsernameEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form className='Login-form'>
            <div className="login-form__username-email">
                <label>Email:</label>
                <input name="username-email" value={usernameEmail} onChange={(e) => setUsernameEmail(e.target.value)} required />
            </div>

            <div className="login-form__password">
                <label>Password:</label>
                <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
        </form>
    )

}