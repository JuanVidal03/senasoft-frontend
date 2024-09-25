import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Label, TextInput, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import { register as registerService } from "../services/auth.services.js";
import { getAllRegionales } from "../services/regional.services.js";
import Loader from "../components/Loader.jsx";

const FormRegister = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);


  // render all the regionales to the dropdown
  const [regionales, setRegionales] = useState([]);
  useEffect(() => {
    setLoading(true);

    const renderAllRegionales = async() => {

      const regionales = await getAllRegionales();
      setRegionales(regionales.data.data);
      return setLoading(false);
  
    }
    renderAllRegionales();
  }, []);


  const handleRegister = handleSubmit(async (data) => {
    setLoading(true);

    // parsear el estrato de string a number
    data.estrato = parseInt(data.estrato);
    data.rol = "Usuario";

    try {
      
      const registerResponse = await registerService(data);

      if (registerResponse.status === 400) {
        toast.error(registerResponse.response.data.message);
        return setLoading(false);
      }

      if (registerResponse.status === 201) {
        toast.success(registerResponse.data.message);
        navigate("/login");
        return setLoading(false);
      }

    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  });

  return (
    <div className="pb-4 px-4 w-[600px]">

      { loading && <Loader/> }

      <div className="flex flex-col mb-8 gap-2">
        <h1 className="font-semibold text-4xl">¡Bienvenido!</h1>
        <p className="text-lg">Registrate para empezar a pedalear.</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
        className="flex flex-col gap-4"
      >
        {/* nombre completo */}
        <div>
          <div className="mb-2 block">
            <Label value="Nombre Completo*" />
          </div>
          <TextInput
            type="text"
            placeholder="Jhon Doe"
            {...register("nombreCompleto", {
              required: {
                value: true,
                message: "Este campo es obligatorio.",
              },
            })}
          />
          {errors.nombreCompleto && (
            <span className="text-red-500">{errors.nombreCompleto.message}</span>
          )}
        </div>
        {/* email */}
        <div>
          <div className="mb-2 block">
            <Label value="Correo Eléctronico*" />
          </div>
          <TextInput
            type="email"
            placeholder="test@test.com"
            {...register("email", {
              required: {
                value: true,
                message: "Este campo es obligatorio.",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "El formato del email no es válido.",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        {/* password */}
        <div>
          <div className="mb-2 block">
            <Label value="Contraseña*" />
          </div>
          <TextInput
            type="password"
            placeholder="*******"
            {...register("password", {
              required: {
                value: true,
                message: "Este campo es obligatorio.",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        {/* estrato */}
        <div>
          <div className="mb-2 block">
            <Label value="Estrato socio economico*" />
          </div>
          <TextInput
            type="text"
            placeholder="1 - 6"
            {...register("estrato", {
              required: {
                value: true,
                message: "Este campo es obligatorio.",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "En este campo solamente deben ir números."
              },
              min: {
                value: 1,
                message: 'El estrato minimo es 1.',
              },
              max: {
                value: 6,
                message: 'El estrato mayor es 6.',
              },
            })}
          />
          {errors.estrato && (
            <span className="text-red-500">{errors.estrato.message}</span>
          )}
        </div>
        {/* regional */}
        <div>
          <div className="mb-2 block">
            <Label value="Selecciona tu regional*" />
          </div>
          <Select
            {...register("regional", {
              required: {
                value: true,
                message: "Este campo es obligatorio.",
              },
            })}
          >
            <option value="">Seleciona una regional</option>
            {
              regionales?.map(regional => (
                <option key={regional._id} value={regional._id}>{ regional.nombre }</option>
              ))
            }
          </Select>
          
          {errors.regional && (
            <span className="text-red-500">{errors.regional.message}</span>
          )}
        </div>

        <button
          className="w-full bg-green-sena transition-all hover:bg-green-sena-medium text-white font-semibold py-3 rounded-md"
          type="submit"
        >
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
