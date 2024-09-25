import { useState, useEffect } from "react";
import { Button, Modal, Label, TextInput, Textarea, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import { getAllRegionales } from "../services/regional.services.js";
import { createEvento } from "../services/eventos.services.js";
import Loader from "./Loader.jsx";
import { toast } from "react-toastify";


const EventosModal = () => {

  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // render all the regionales to the dropdown
  const [regionales, setRegionales] = useState([]);
  useEffect(() => {
    setLoading(true);
    const renderAllRegionales = async() => {

        const regionales = await getAllRegionales();
        setRegionales(regionales.data.data);
        setLoading(false);
    }
    renderAllRegionales();
  }, []);


  // function ti add an event
  const handleAddEvento = handleSubmit(async(data) => {

    try {

        const response = await createEvento(data);

        if(response.status === 201) {
            toast.success("Evento agregado correctamente!");
            setOpenModal(false);
            return reset();
        }

        return toast.error("Error al agregar el evento.");

    } catch (error) {
        console.log(error);
        return toast.error(error.message);
    }


  });

  return (
    <>
        { loading && <Loader/> }
      <Button size="lg" onClick={() => setOpenModal(true)}>
        Agregar Evento
      </Button>

      <Modal
        className="backdrop-blur-md"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Agrega un nuevo evento</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">

            <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                handleAddEvento();
            }}>
                {/* titulo y estado */}
                <div className="flex gap-4">
                    {/* titulo */}
                    <div className="w-full">
                        <div className="mb-2 block">
                        <Label value="Titulo*" />
                        </div>
                        <TextInput
                        type="text"
                        placeholder="Titulo del evento"
                        {...register("titulo", {
                            required: {
                            value: true,
                            message: "Este campo es obligatorio.",
                            },
                        })}
                        />
                        {errors.titulo && (
                        <span className="text-red-500">{errors.titulo.message}</span>
                        )}
                    </div>

                    {/* estado */}
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label value="Selecciona el estado del evento*" />
                        </div>
                        <Select
                            {...register("estado", {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio.",
                                },
                            })}
                        >
                            <option value="">Seleciona un estado</option>
                            <option value="Proximo">Proximo</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Finalizado">Finalizado</option>
                        </Select>
                        
                        {errors.estado && (
                            <span className="text-red-500">{errors.estado.message}</span>
                        )}
                    </div>

                </div>

                {/* dirección */}
                <div className="w-full">
                    <div className="mb-2 block">
                        <Label value="Direccion*" />
                    </div>
                    <TextInput
                        type="text"
                        placeholder="Dirección del evento"
                        {...register("direccion", {
                            required: {
                            value: true,
                            message: "Este campo es obligatorio.",
                            },
                        })}
                    />
                        {errors.direccion && ( <span className="text-red-500">{errors.direccion.message}</span> )}
                </div>


                {/* descripcion */}
                <div>
                    <div className="mb-2 block">
                        <Label value="Descripción*" />
                    </div>
                    <Textarea
                        placeholder="Ingresa la descripción del evento"
                        rows={4}
                        {
                            ...register("descripcion", {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio.", 
                                }
                            })
                        }
                    />

                    {errors.descripcion && (
                        <span className="text-red-500">{errors.descripcion.message}</span>
                    )}
                </div>

                {/* fecha y regional */}
                <div className="flex gap-4">

                    {/* fecha */}
                    <div className="w-full">
                        
                        <div className="mb-2 block">
                        <Label value="Fecha*" />
                        </div>

                        <input
                            className="rounded-lg w-full border-gray-300 bg-gray-50"
                            type="datetime-local"
                            {
                                ...register("fecha", {
                                    required: {
                                        value: true,
                                        message: "Este campo es obligatorio."
                                    }
                                })
                            }
                        
                        />
                    
                        {errors.titulo && (
                        <span className="text-red-500">{errors.titulo.message}</span>
                        )}

                    </div>

                    {/* regional */}
                    <div className="w-full">
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

                </div>


                <Modal.Footer>
                    <Button size="lg" type="submit">Aceptar</Button>
                    <Button size="lg" type="button" color="gray" onClick={() => setOpenModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>

            </form>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventosModal;
