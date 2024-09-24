import { Link } from "react-router-dom";
import FormRegister from "../components/FormRegister.jsx";
import senaLogo from "../assets/logoSena.png"


const Register = () => {
  document.title = `Registrate | ${import.meta.env.VITE_NOMBRE_APP}`;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[50vw] h-screen flex flex-col justify-center items-center pt-20 overflow-y-auto">
        <figure className="w-[550px] mb-4">
          <img className="w-16 h-16" src={senaLogo} alt="Logo del SENA" />
        </figure>
        <FormRegister />
        <p className="mb-8">
          ¿Ya tienes una cuenta? <Link className="font-semibold" to="/login">Iniciar Sesión</Link>
        </p>
      </div>
      {/*  */}
      <div className="w-[50vw] h-screen bg-auth-bg bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Register;
