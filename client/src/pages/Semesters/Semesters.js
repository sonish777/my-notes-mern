import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CreateNewFolder } from "@material-ui/icons";
import Folders from "../../components/Folders/Folders";
import useHttpClient from "../../hooks/useHttpClient";
import Spinner from "../../components/Spinner/Spinner";
import CreateFolderModal from "../../components/CreateFolderModal/CreateFolderModal";
import BreadcrumbLinksContext from "../../context/BreadcrumbLinks";
import BreadcrumbLinks from "../../components/BreadcrumbLinks/BreadcrumbLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    border: "1px solid rgba(1,1,1,0.2)",
    padding: "10px",
  },
  header: {
    textAlign: "right",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: "30px",
    fontSize: "1.2rem",
  },
}));

const Semesters = () => {
  const [semesters, setSemesters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, error, clearError, sendRequest] = useHttpClient([]);
  const breadcrumbLinks = useContext(BreadcrumbLinksContext);
  const classes = useStyles();

  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
    clearError();
  };

  useEffect(() => {
    const fetchDirectores = async () => {
      breadcrumbLinks.links = breadcrumbLinks.links.slice(0, 1);
      try {
        const response = await sendRequest("http://localhost:8000/semesters");
        setSemesters(response.semesters);
      } catch (error) {}
    };
    fetchDirectores();
  }, []);

  const updateSemesters = (res) => {
    setSemesters([...semesters, res.semester]);
  };

  return (
    <>
      <CreateFolderModal
        showModal={showModal}
        setDirectories={updateSemesters}
        closeModalHandler={closeModalHandler}
        root
      />
      <Container>
        <div className={classes.root}>
          <div className={classes.header}>
            <BreadcrumbLinks links={breadcrumbLinks.links} active="/" />
            <div>
              Create Folder
              <IconButton onClick={showModalHandler}>
                <CreateNewFolder />
              </IconButton>
            </div>
          </div>
          {isLoading && semesters.length === 0 ? (
            <Spinner />
          ) : (
            <Folders dirs={semesters} root />
          )}
          {error && semesters.length === 0 && (
            <Typography color="error">
              Something went wrong. Please try again
            </Typography>
          )}
        </div>
      </Container>
    </>
  );
};

export default Semesters;
