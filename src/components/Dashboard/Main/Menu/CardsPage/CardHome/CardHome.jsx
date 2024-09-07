import React, { useState } from "react";
import {
  MDBCard,
  MDBCardText,
  MDBBtn,
  MDBCardBody,
  MDBContainer,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import EventModal from "../EventModal/EventModal";
import AddSubCardModal from "./AddSubCardModalHome/AddSubCardModalHome";
import styles from "./CardH.module.css";
import "../../../../../../Styles.css";

const CardHome = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);

  const toggleModal = () => {
    setBasicModal(!basicModal);
  };

  const toggleAddModal = (index) => {
    setCurrentCardIndex(index);
    setAddModal(!addModal);
  };

  const handleSaveEvent = () => {
    if (eventTitle.trim() !== "") {
      setCards([...cards, { title: eventTitle, subcards: [] }]);
      setEventTitle("");
      toggleModal();
    }
  };

  const handleAddSubCard = (subcardData) => {
    const updatedCards = [...cards];
    if (currentCardIndex !== null) {
      updatedCards[currentCardIndex].subcards.push(subcardData);
      setCards(updatedCards);
      toggleAddModal(null);
    }
  };

  const handleDeleteCard = (indexToDelete) => {
    setCards(cards.filter((_, index) => index !== indexToDelete));
  };

  const handleEditCardTitle = (index, newTitle) => {
    const updatedCards = [...cards];
    updatedCards[index].title = newTitle;
    setCards(updatedCards);
  };

  const handleDeleteSubCard = (cardIndex, subIndex) => {
    const updatedCards = [...cards];
    updatedCards[cardIndex].subcards = updatedCards[cardIndex].subcards.filter(
      (_, index) => index !== subIndex
    );
    setCards(updatedCards);
  };

  const renderFilePreview = (file) => {
    if (!file || !file.type) {
      return <div>Unknown file format</div>;
    }

    if (file.type.startsWith("image/")) {
      return (
        <MDBCardImage src={URL.createObjectURL(file)} alt={file.name} fluid />
      );
    } else if (file.type === "application/pdf") {
      return (
        <object
          data={URL.createObjectURL(file)}
          type="application/pdf"
          width="100%"
          height="250px"
        >
          <p>
            Your browser does not support PDFs. Please download the file{" "}
            <a href={URL.createObjectURL(file)}>here</a>.
          </p>
        </object>
      );
    } else if (file.type.includes("word")) {
      return (
        <div className="doc-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732220.png"
            alt="Word Document"
            style={{ width: "100px", height: "100px" }}
          />
          <p>{file.name}</p>
        </div>
      );
    } else {
      return (
        <div className="doc-icon">
          <p>{file.name} - Unrecognized file type</p>
        </div>
      );
    }
  };

  return (
    <MDBContainer fluid className={styles.customBackground}>
      <MDBRow>
        <MDBCol className="text-center z-1">
          <h2 className="mb-3 custom-font">Create an Event for Home</h2>
          <MDBBtn className="bkCreateEvent" onClick={toggleModal}>
            Create Event
          </MDBBtn>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mt-4 d-flex flex-column align-items-center positionCardHome z-1">
        {cards.map((card, index) => (
          <MDBCol key={index} sm="12" className="mb-4">
            <MDBCard className="shadow-lg position-relative bgCardHome">
              <MDBCardBody className="flexCardBody">
                <MDBCardTitle className="titlecardHome">
                  {card.title}
                  <CiEdit
                    className="edit-icon"
                    onClick={() => {
                      const newTitle = prompt("Edit title:", card.title);
                      if (newTitle !== null && newTitle.trim() !== "") {
                        handleEditCardTitle(index, newTitle);
                      }
                    }}
                  />
                </MDBCardTitle>
                <MDBBtn
                  size="sm"
                  className="addCardHome"
                  onClick={() => toggleAddModal(index)}
                >
                  Add
                </MDBBtn>
                <IoTrashOutline
                  className="trash-icon"
                  onClick={() => handleDeleteCard(index)}
                />
                {card.subcards.map((subcard, subIndex) => (
                  <MDBCard key={subIndex} className="mb-3 CardEventStyles">
                    <MDBRow className="g-0">
                      {subcard.files.length > 0 && (
                        <MDBCol md="4">
                          {renderFilePreview(subcard.files[0])}
                        </MDBCol>
                      )}
                      <MDBCol md={subcard.files.length > 0 ? "8" : "12"}>
                        <MDBCardBody>
                          <MDBCardTitle>{subcard.category}</MDBCardTitle>
                          <MDBCardText>{subcard.details}</MDBCardText>
                          <MDBCardText>
                            <small className="text-muted">
                              Expire Date: {subcard.expireDate}
                            </small>
                          </MDBCardText>
                          <MDBCardText>
                            <small className="text-muted">
                              Notify Date: {subcard.notifyDate}
                            </small>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                    <div className="position-absolute bottom-0 end-0 m-2">
                      <MDBBtn
                        color="danger"
                        size="sm"
                        onClick={() => handleDeleteSubCard(index, subIndex)}
                      >
                        Delete
                      </MDBBtn>
                    </div>
                  </MDBCard>
                ))}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>

      <EventModal
        basicModal={basicModal}
        toggleModal={toggleModal}
        eventTitle={eventTitle}
        setEventTitle={setEventTitle}
        handleSaveEvent={handleSaveEvent}
      />

      <AddSubCardModal
        addModal={addModal}
        toggleAddModal={toggleAddModal}
        handleAddSubCard={handleAddSubCard}
      />
    </MDBContainer>
  );
};

export default CardHome;
