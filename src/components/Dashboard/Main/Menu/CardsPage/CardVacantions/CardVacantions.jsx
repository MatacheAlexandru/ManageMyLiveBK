import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  MDBCard,
  MDBCardText,
  MDBBtn,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { db, auth, storage } from "../../../../../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  getMetadata,
} from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import EventModal from "../EventModal/EventModal";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./CardsV.module.css";
import "../../../../../../Styles.css";
import AddSubCardModal from "./AddSubCardTravel/AddSubCardModalTravel";

const getFileType = async (fileUrl) => {
  const fileRef = ref(storage, fileUrl);
  const metadata = await getMetadata(fileRef);
  return metadata.contentType;
};
//al doilea pas
const loadCardsFromFirestore = async (user, setCardsVacantions) => {
  try {
    const docRef = doc(db, `users/${user.uid}/componentV`, "cardsVacantions"); // Folosește componentP și cardsPet
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setCardsVacantions(docSnap.data().cardsVacantions || []); // Folosește cardsPet
    } else {
      console.log("No cardsVacantions found for the user.");
    }
  } catch (error) {
    console.error("Error loading cardsVacantions: ", error);
  }
};

//primul pas
const saveCardsToFirestore = async (user, newCardsVacantions) => {
  try {
    const docRef = doc(db, `users/${user.uid}/componentV`, "cardsVacantions"); // Folosește componentP și cardsPet
    await setDoc(
      docRef,
      { cardsVacantions: newCardsVacantions },
      { merge: true }
    );
    console.log("CardsVacantions saved successfully for ComponentV.");
  } catch (error) {
    console.error("Error saving cardsVacantions for ComponentV: ", error);
  }
};

const CardVacantions = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const [user, setUser] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        loadCardsFromFirestore(currentUser, setCards);
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleModal = () => setBasicModal(!basicModal);
  const toggleAddModal = (index) => {
    setCurrentCardIndex(index);
    setAddModal(!addModal);
  };

  const handleSaveEvent = () => {
    if (eventTitle.trim() !== "") {
      const newCards = [...cards, { title: eventTitle, subcards: [] }];
      setCards(newCards);
      saveCardsToFirestore(user, newCards);
      setEventTitle("");
      toggleModal();
    }
  };

  const handleAddSubCard = async (subcardData) => {
    try {
      let fileURLs = [];
      if (subcardData.files.length > 0) {
        for (const file of subcardData.files) {
          const storageRef = ref(storage, `uploads/${file.name}`);
          await uploadBytes(storageRef, file);
          const fileURL = await getDownloadURL(storageRef);
          fileURLs.push(fileURL);
        }
      }

      const updatedSubcardData = {
        ...subcardData,
        files: fileURLs,
      };

      const updatedCards = [...cards];
      if (currentCardIndex !== null) {
        updatedCards[currentCardIndex].subcards.push(updatedSubcardData);
        setCards(updatedCards);
        saveCardsToFirestore(user, updatedCards);
        toggleAddModal(null);
      }
    } catch (error) {
      console.error("Error adding subcard: ", error);
    }
  };

  const handleDeleteCard = (indexToDelete) => {
    const updatedCards = cards.filter((_, index) => index !== indexToDelete);
    setCards(updatedCards);
    saveCardsToFirestore(user, updatedCards);
  };

  const handleEditCardTitle = (index, newTitle) => {
    const updatedCards = [...cards];
    updatedCards[index].title = newTitle;
    setCards(updatedCards);
    saveCardsToFirestore(user, updatedCards);
  };

  const handleDeleteSubCard = (cardIndex, subIndex) => {
    const updatedCards = [...cards];
    updatedCards[cardIndex].subcards = updatedCards[cardIndex].subcards.filter(
      (_, index) => index !== subIndex
    );
    setCards(updatedCards);
    saveCardsToFirestore(user, updatedCards);
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <MDBContainer fluid className={styles.customBackground}>
      <MDBRow>
        <MDBCol className="text-center z-1">
          <h2 className="mb-3 custom-font">Create an Event for Vacantions</h2>
          <MDBBtn className="bkCreateEvent" onClick={toggleModal}>
            Create Event
          </MDBBtn>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mt-4 d-flex flex-column align-items-center positionCardHome z-1">
        {cards.map((card, index) => (
          <CardItem
            key={index}
            card={card}
            index={index}
            onEdit={handleEditCardTitle}
            onDelete={handleDeleteCard}
            onAddSubCard={toggleAddModal}
            onDeleteSubCard={handleDeleteSubCard}
          />
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

      <div
        className="scrollTop"
        onClick={scrollTop}
        style={{
          position: "fixed",
          right: "30px",
          bottom: "30px",
          zIndex: 1000,
          cursor: "pointer",
          display: showScroll ? "flex" : "none",
        }}
      >
        <IoIosArrowUp size={40} />
      </div>
    </MDBContainer>
  );
};

const CardItem = ({
  card,
  index,
  onEdit,
  onDelete,
  onAddSubCard,
  onDeleteSubCard,
}) => {
  return (
    <MDBCol sm="12" className="mb-4">
      <MDBCard className="shadow-lg position-relative bgCardHome">
        <MDBCardBody className="flexCardBody">
          <MDBCardTitle className="titlecardHome">
            {card.title}
            <CiEdit
              className="edit-icon"
              onClick={() => {
                const newTitle = prompt("Edit title:", card.title);
                if (newTitle !== null && newTitle.trim() !== "") {
                  onEdit(index, newTitle);
                }
              }}
            />
          </MDBCardTitle>
          <MDBBtn
            size="sm"
            className="addCardHome"
            onClick={() => onAddSubCard(index)}
          >
            Add
          </MDBBtn>
          <IoTrashOutline
            className="trash-icon"
            onClick={() => onDelete(index)}
          />

          {card.subcards.map((subcard, subIndex) => (
            <SubCardItem
              key={subIndex}
              subcard={subcard}
              cardIndex={index}
              subIndex={subIndex}
              onDelete={onDeleteSubCard}
            />
          ))}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAddSubCard: PropTypes.func.isRequired,
  onDeleteSubCard: PropTypes.func.isRequired,
};

const SubCardItem = ({ subcard, cardIndex, subIndex, onDelete }) => {
  const [fileTypes, setFileTypes] = useState([]);

  useEffect(() => {
    const loadFileTypes = async () => {
      const types = await Promise.all(
        subcard.files.map(async (fileUrl) => {
          const contentType = await getFileType(fileUrl);
          return { url: fileUrl, type: contentType };
        })
      );
      setFileTypes(types);
    };

    if (subcard.files && subcard.files.length > 0) {
      loadFileTypes();
    }
  }, [subcard.files]);

  const handleDownload = (fileUrl) => {
    if (window.confirm("Ești sigur că vrei să descarci fișierul?")) {
      window.open(fileUrl, "_blank");
    }
  };

  const renderFile = (file) => {
    if (file.type.startsWith("image/")) {
      return (
        <img
          src={file.url}
          alt="Subcard image"
          className={`${styles.zoomImage} img-fluid`}
          onClick={() => handleDownload(file.url)}
          style={{
            paddingTop: "2rem",
            cursor: "pointer",
            width: "90%",
            height: "auto",
          }}
        />
      );
    } else if (file.type === "application/pdf") {
      return (
        <iframe
          src={file.url}
          title="PDF File"
          onClick={() => handleDownload(file.url)}
          style={{
            cursor: "pointer",
            width: "100%",
            height: "400px",
            border: "none",
          }}
        />
      );
    } else if (
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.type === "application/msword"
    ) {
      return (
        <div
          className="d-flex align-items-center justify-content-center"
          onClick={() => handleDownload(file.url)}
          style={{ cursor: "pointer" }}
        >
          <img
            className={`${styles.zoomImage} img-fluid`}
            src="/doc-document-file-svgrepo-com.svg"
            alt="Word Document Icon"
            style={{ width: "90%", height: "auto" }}
          />
        </div>
      );
    } else {
      return <p>Unsupported file type: {file.type}</p>;
    }
  };

  return (
    <MDBCard className="mb-3 CardEventStyles">
      <MDBRow className="g-0 flex-column flex-md-row">
        <MDBCol
          xs="12"
          md={
            fileTypes.some((file) => file.type === "application/pdf")
              ? "5"
              : "7"
          }
          className="order-md-2 order-1"
        >
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

        <MDBCol
          xs="12"
          md={
            fileTypes.some((file) => file.type === "application.pdf")
              ? "7"
              : "5"
          }
          className="order-md-1 order-2"
        >
          <div
            className="file-scroll-container"
            style={{
              display: "flex",
              gap: "10px",
              overflowX: "auto",
              whiteSpace: "nowrap",
            }}
          >
            {fileTypes.map((file, i) => (
              <div key={i} style={{ minWidth: "100%" }}>
                {renderFile(file)}
              </div>
            ))}
          </div>
        </MDBCol>
      </MDBRow>

      <div className="position-relative mt-3 text-center">
        <MDBBtn
          color="danger"
          size="sm"
          onClick={() => onDelete(cardIndex, subIndex)}
        >
          Delete
        </MDBBtn>
      </div>
    </MDBCard>
  );
};

SubCardItem.propTypes = {
  subcard: PropTypes.object.isRequired,
  cardIndex: PropTypes.number.isRequired,
  subIndex: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CardVacantions;
