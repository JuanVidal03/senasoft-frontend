import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { login } from "../services/auth.services.js";
import { AuthContext } from "../context/Auth.context.jsx";

const FormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = handleSubmit(async (data) => {
    try {
      const loginResponse = await login(data);

      if (loginResponse.status === 404)
        return toast.error("El usuario no existe.");

      if (loginResponse.status === 400)
        return toast.error("Credenciales incorrectas.");

      if (loginResponse.status === 200) {
        setUser(loginResponse.data.data.user);
        setIsAuthenticated(true);
        navigate("/");
        return reset();
      }
    } catch (error) {
      toast.error(error.message);
    }
  });

  return (
    <div className="bg-white shadow-md rounded-xl py-8 px-4 w-[400px]">
      <h2 className="mb-8 font-semibold text-2xl">¡Bienvenido de vuelta!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="flex flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Correo Eléctronico*" />
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Contraseña*" />
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
        <Button type="submit">Ingresar</Button>
      </form>
    </div>
  );
};

export default FormLogin;
