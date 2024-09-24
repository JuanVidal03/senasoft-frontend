import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { register as registerService } from "../services/auth.services.js";

const FormRegister = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleRegister = handleSubmit(async (data) => {
    try {
      const registerResponse = await registerService(data);

      if (registerResponse.status === 400)
        return toast.error(registerResponse.response.data.message);

      if (registerResponse.status === 201) {
        toast.success(registerResponse.data.message);
        navigate("/login");
        return reset();
      }
    } catch (error) {
      toast.error(error.message);
    }
  });

  return (
    <div className="bg-white shadow-md rounded-xl py-8 px-4 w-[400px]">
      <h2 className="mb-8 font-semibold text-2xl">¡Te estabamos esperando!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
        className="flex flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label value="Nombre Completo*" />
          </div>
          <TextInput
            type="text"
            placeholder="Jhon Doe"
            {...register("nombre", {
              required: {
                value: true,
                message: "Este campo es obligatorio.",
              },
            })}
          />
          {errors.nombre && (
            <span className="text-red-500">{errors.nombre.message}</span>
          )}
        </div>

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
        <Button type="submit">Registrarme</Button>
      </form>
    </div>
  );
};

export default FormRegister;
