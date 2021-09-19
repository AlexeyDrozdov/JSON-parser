import React from "react";
import './Login.css';

function Login(props) {
    const user = props.user;
    return (
        <form className='loginForm' onSubmit={props.onSubmit}>
            <div className='loginFormRow'>
                <label className='loginLabel'>
                    Login:
                </label>
                <input 
                    className='loginInput'
                    type='text'
                    value={user.login}
                    name='login'
                    onChange={props.onChange}
                />
            </div>
            <div className='loginFormRow'>
                <label className='loginLabel'>
                    Password:
                </label>
                <input
                    className='loginInput'
                    type='password'
                    value={user.password}
                    name='password'
                    onChange={props.onChange}
                />
            </div>
            <input
                className='loginSubmit'
                type='submit'
                value='Login'
            />
        </form>
    );
}
export default Login;