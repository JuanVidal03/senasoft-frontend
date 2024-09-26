import React, { useContext, useState } from "react";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import { HiUserAdd } from "react-icons/hi";
import { AuthContext } from "../context/Auth.context";
import axios from "axios";

export const ModalInvitacion = () => {

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState();
  const { user } = useContext(AuthContext);
  const enviarInvitacion = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/enviarcorreo`,
      {
        email,
        idUser: user._id,
      }
    );
    console.log(response.data);
    alert(response.data.msg)
  };
  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="mr-14 mb-10">
        <h1 className="font-semibold drop-shadow-lg">Agregar Amigos</h1>
        <HiUserAdd className="text-2xl" />
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Ingresa el codigo de tu amigo para invitarlo a la app
            </p>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput
                onChange={(e) => setEmail(e.target.value)}
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setOpenModal(false);
              enviarInvitacion();
            }}
          >
            I accept
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
