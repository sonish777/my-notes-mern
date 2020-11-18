import React, { useState } from "react";
import useHttpClient from "../../hooks/useHttpClient";
import Modal from "../../components/Modal/Modal";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    height: "30px",
    fontSize: "1.2rem",
  },
}));

const CreateFolderModal = ({
  setDirectories,
  showModal,
  closeModalHandler,
  semId,
}) => {
  const [dirName, setDirName] = useState("");
  const [isLoading, error, clearError, sendRequest] = useHttpClient();
  const classes = useStyles();

  const inputChangeHandler = (e) => {
    setDirName(e.target.value);
    clearError();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let url = semId
      ? `${process.env.REACT_APP_URL}/subjects/${semId}`
      : `${process.env.REACT_APP_URL}/semesters`;

    try {
      const res = await sendRequest(url, "POST", {
        name: dirName,
      });
      setDirectories(res);
      closeModalHandler();
      setDirName("");
    } catch (error) {}
  };

  return (
    <Modal
      title="Create a New Folder"
      showModal={showModal}
      closeModalHandler={closeModalHandler}
      isLoading={isLoading}
      error={error}
      footer={
        <>
          <Button variant="outlined" color="primary" onClick={submitHandler}>
            Create
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={closeModalHandler}
          >
            Cancel
          </Button>
        </>
      }
    >
      <input
        type="text"
        className={classes.input}
        value={dirName}
        onChange={inputChangeHandler}
      />
    </Modal>
  );
};

export default CreateFolderModal;
