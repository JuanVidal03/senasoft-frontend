import FormRegister from "../components/FormRegister.jsx";

const Register = () => {

    document.title = `Registrate | ${import.meta.env.VITE_NOMBRE_APP}`;

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <FormRegister/>
        </div>
    );
}

export default Register;
