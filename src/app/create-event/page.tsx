import CreateForm from "@/components/CreateForm/CreateForm";
import Modal from "@/components/Modal/Modal";
import React from "react";

const CreateEventPage = () => {
  return (
    <Modal>
      <h3 className="modal-head-text"></h3>
      Create Event
      <CreateForm />
    </Modal>
  );
};

export default CreateEventPage;
