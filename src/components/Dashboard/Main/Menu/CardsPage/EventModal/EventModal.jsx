import React from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../../../../../../Styles.css";

const EventModal = ({
  basicModal,
  toggleModal,
  eventTitle,
  setEventTitle,
  handleSaveEvent,
}) => {
  return (
    <MDBModal open={basicModal} onClose={toggleModal} tabIndex="-1">
      <MDBModalDialog className="modal-dialog-centered modal-lg">
        <MDBModalContent className="bgEventModal">
          <MDBModalHeader>
            <MDBModalTitle>Create New Event</MDBModalTitle>
            <MDBBtn
              className="btn-close btn-close-white"
              color="none"
              onClick={toggleModal}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              label="Event Title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="border-light text-white bgEventTitle"
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="secondary"
              onClick={toggleModal}
              className="text-white bg-dark"
            >
              Cancel
            </MDBBtn>
            <MDBBtn
              color="light"
              onClick={handleSaveEvent}
              className="text-dark"
            >
              Save
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default EventModal;
