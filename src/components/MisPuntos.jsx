import React, { useContext, useState } from "react";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import { AuthContext } from "../context/Auth.context";
import { FaLeaf } from "react-icons/fa";


export default function MisPuntos() {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="mr-10 mb-10 bg-green-600"
      >
        <h1 className="font-semibold drop-shadow-lg">Mis Puntos de carbono</h1>
        <FaLeaf className="text-2xl" />
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          {user.puntos ? (
            <h1>
              {" "}
              Tus puntos de carbono obtenidos actualmente son{" "}
              <span className="text-2xl text-green-600">{user.puntos}</span>
            </h1>
          ) : (
            <h1>Todavia no tienes puntos, Invita a tus amigos</h1>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              ¡Invita a más amigos a unirse a nuestra app y contribuye a cuidar
              el planeta! Cuantos más amigos invites, más insignias únicas
              recibirás como reconocimiento a tu esfuerzo. ¡Juntos podemos hacer
              la diferencia!
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
