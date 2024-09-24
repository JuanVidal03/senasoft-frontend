import React from 'react';
import FormLogin from '../components/FormLogin.jsx';

const Login = () => {

    document.title = `Iniciar Sesión | ${import.meta.env.VITE_NOMBRE_APP}`;

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <FormLogin/>
        </div>
    );
}

export default Login;
