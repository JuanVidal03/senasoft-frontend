import { Link } from 'react-router-dom';
import FormLogin from '../components/FormLogin.jsx';
import senaLogo from "../assets/logoSena.png"

const Login = () => {

    document.title = `Iniciar Sesión | ${import.meta.env.VITE_NOMBRE_APP}`;

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-[50vw] h-screen flex flex-col justify-center items-center p-8'>
                <figure className='w-[550px] mb-4'>
                    <img className='w-16 h-16' src={senaLogo} alt="Logo del SENA" />
                </figure>
                <FormLogin/>
                <p>¿No tienes una cuenta? <Link className='font-semibold' to="/register">Registrame</Link></p>
            </div>
            <div className='w-[50vw] h-screen bg-auth-bg bg-cover bg-no-repeat'></div>
        </div>
    );
}

export default Login;
