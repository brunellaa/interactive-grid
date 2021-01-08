import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ModalContent from "./ModalContent";
import "./modalstyles.scss";

function ModalWrapper({ modalData, isModalOpen, setModal }) {
  const toggle = () => setModal(false);

  return (
    <Modal
      isOpen={isModalOpen}
      toggle={toggle}
      backdrop={true}
      keyboard={true}
      contentClassName="custom-modal-style"
    >
      <ModalHeader toggle={toggle}>{modalData.data.title}</ModalHeader>
      <ModalBody>
        <ModalContent modalData={modalData} />
      </ModalBody>
    </Modal>
  );
}

ModalWrapper.propTypes = {
  modalData: PropTypes.object,
  isModalOpen: PropTypes.bool,
  setModal: PropTypes.func,
};

export default ModalWrapper;
