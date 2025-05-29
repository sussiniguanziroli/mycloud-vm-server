import React from 'react'

const Login = ({ setIsPassword, isPassword }) => {
    const error = "Contraseña Incorrecta";

    const handleSubmit = () => {
        setIsPassword();
    }

    console.log(isPassword)

    return (
        <div className='form-container'>
            <h1>MyCloud-VM-Server / Login</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <h2>Ingrese la contraseña</h2>
                <input
                    type="password"
                    value={isPassword}
                    onChange={(e) => setIsPassword(e.target.value)}
                    placeholder="Contraseña"
                    required
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    )
}

export default Login