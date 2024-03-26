import React from "react";
import Modal from "./Modal";
import "./styles/Modal.css";
import { useModal } from "./useModal";
import ModalElement from "./modals/ModalElement";
// import Modal03 from "../assets/image/screenshot/product-app-def.jpg";
// import Proyect03 from "./modals/Proyect03";
import Modal09 from "../assets/image/screenshot/miniatura-refacil.png";
import Proyect09 from "./modals/Proyect09";

const Modals = () => {
  const [isOpenModal9, openModal9, closeModal9] = useModal(false);


  return (
    <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
      <ModalElement
        image={Modal09}
        e={openModal9}
        imgTitle="SuperPagos(Refacil)"
        imgDesc="Plataforma transaccional (StartUp) con su propia pasarella de Pagos"
      />
      <Modal isOpen={isOpenModal9} closeModal={closeModal9}>
        <Proyect09 />
      </Modal>

      {/* <ModalElement image={Modal03} e={openModal3} />
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <Proyect03 />
      </Modal> */}
    </div>
  );
};

export default Modals;
