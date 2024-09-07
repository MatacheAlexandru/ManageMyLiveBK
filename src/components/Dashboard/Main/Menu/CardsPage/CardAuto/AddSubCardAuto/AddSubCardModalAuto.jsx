import React, { useState } from "react";
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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { IoTrashOutline } from "react-icons/io5";
import "../../../../../../../Styles.css";

const AddSubCardModal = ({ addModal, toggleAddModal, handleAddSubCard }) => {
  const [newCategory, setNewCategory] = useState("");
  const [category, setCategory] = useState("");
  const [customCategories, setCustomCategories] = useState([]);
  const [files, setFiles] = useState([]);
  const [expireDate, setExpireDate] = useState("");
  const [notifyDate, setNotifyDate] = useState("");
  const [details, setDetails] = useState("");

  const resetForm = () => {
    setNewCategory("");
    setCategory("");
    setFiles([]);
    setExpireDate("");
    setNotifyDate("");
    setDetails("");
  };

  const onAddCard = () => {
    handleAddSubCard({
      category: category || newCategory,
      files: files.length > 0 ? files : [],
      expireDate,
      notifyDate,
      details,
    });
    resetForm();
  };

  const handleSelectCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleAddCustomCategory = () => {
    if (newCategory.trim() !== "" && !customCategories.includes(newCategory)) {
      setCustomCategories([...customCategories, newCategory]);
      setNewCategory("");
    }
  };

  const handleDeleteCustomCategory = (categoryToDelete) => {
    setCustomCategories(
      customCategories.filter((category) => category !== categoryToDelete)
    );
  };

  return (
    <MDBModal open={addModal} onClose={toggleAddModal} tabIndex="-1">
      <MDBModalDialog className="modal-dialog-centered modal-lg">
        <MDBModalContent className="bgAddCardModal shadow-lg rounded-lg border border-light">
          <MDBModalHeader className="border-bottom border-light">
            <MDBModalTitle className="text-dark">Add Details</MDBModalTitle>
            <MDBBtn
              className="btn-close btn-close-white"
              color="none"
              onClick={toggleAddModal}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBDropdown className="mb-3">
              <MDBDropdownToggle
                color="bg-primary bg-gradient"
                className="w-100 text-dark"
              >
                {category || "Select Category"}
              </MDBDropdownToggle>
              <MDBDropdownMenu className="w-100 p-2 shadow-lg rounded bgMebuDropdown">
                {/* Categoriile predefinite */}
                <MDBDropdownItem
                  onClick={() => handleSelectCategory("Asigurare")}
                  className="dropdown-item-custom"
                >
                  Asigurare
                </MDBDropdownItem>
                <MDBDropdownItem
                  onClick={() => handleSelectCategory("Rovinieta")}
                  className="dropdown-item-custom"
                >
                  Rovinieta
                </MDBDropdownItem>
                <MDBDropdownItem
                  onClick={() => handleSelectCategory("ITP")}
                  className="dropdown-item-custom"
                >
                  ITP
                </MDBDropdownItem>
                <MDBDropdownItem
                  onClick={() => handleSelectCategory("Casco")}
                  className="dropdown-item-custom"
                >
                  Casco
                </MDBDropdownItem>

                {customCategories.map((customCategory) => (
                  <div
                    key={customCategory}
                    className="d-flex align-items-center"
                  >
                    <MDBDropdownItem
                      onClick={() => handleSelectCategory(customCategory)}
                      className="dropdown-item-custom flex-grow-1 positionCategoryNew"
                    >
                      {customCategory}

                      <IoTrashOutline
                        className="trash-iconAdd"
                        onClick={() =>
                          handleDeleteCustomCategory(customCategory)
                        }
                      />
                    </MDBDropdownItem>
                  </div>
                ))}

                <div className="dropdown-divider my-2"></div>

                <div className="inputCreateCategory ">
                  <MDBInput
                    label="Create Your Own Category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="custom-input-category  flex-grow-1"
                  />
                  <MDBBtn
                    onClick={handleAddCustomCategory}
                    className=" btnAddCategory"
                  >
                    Add
                  </MDBBtn>
                </div>
              </MDBDropdownMenu>
            </MDBDropdown>

            <MDBInput
              type="file"
              multiple
              onChange={(e) =>
                setFiles(Array.from(e.target.files).map((file) => file))
              }
              className="mb-3 border border-info text-dark"
            />

            <MDBInput
              type="date"
              value={expireDate}
              onChange={(e) => setExpireDate(e.target.value)}
              className="mb-3 border border-info text-white"
            />

            <MDBInput
              type="datetime-local"
              value={notifyDate}
              onChange={(e) => setNotifyDate(e.target.value)}
              className="mb-3 border border-info text-white"
            />

            <MDBInput
              type="textarea"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="mb-3 border border-info text-white"
            />
          </MDBModalBody>
          <MDBModalFooter className="border-top border-light">
            <MDBBtn color="dark" onClick={toggleAddModal} className="me-2">
              Cancel
            </MDBBtn>
            <MDBBtn color="light" onClick={onAddCard}>
              Add Card
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default AddSubCardModal;
