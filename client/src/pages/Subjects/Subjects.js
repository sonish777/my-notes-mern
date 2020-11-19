import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Folders from "../../components/Folders/Folders";
import useHttpClient from "../../hooks/useHttpClient";
import {
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CreateNewFolder } from "@material-ui/icons";
import Spinner from "../../components/Spinner/Spinner";
import CreateFolderModal from "../../components/CreateFolderModal/CreateFolderModal";
import BreadcrumbLinksContext from "../../context/BreadcrumbLinks";
import BreadcrumbLinks from "../../components/BreadcrumbLinks/BreadcrumbLinks";

const useStyles = makeStyles({
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
});

const Subjects = () => {
  const { semId } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, error, clearError, sendRequest] = useHttpClient();
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
    const fetchSubjects = async () => {
      breadcrumbLinks.links = breadcrumbLinks.links.slice(0, 2);
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_URL}/subjects/${semId}`
        );
        setSubjects(response.subjects);
      } catch (error) {}
    };
    fetchSubjects();
  }, []);

  const updateSubjects = (res) => {
    setSubjects([...subjects, res.subject]);
  };
  return (
    <>
      <CreateFolderModal
        showModal={showModal}
        setDirectories={updateSubjects}
        closeModalHandler={closeModalHandler}
        semId={semId}
      />
      <Container>
        <div className={classes.root}>
          <div className={classes.header}>
            <BreadcrumbLinks
              links={breadcrumbLinks.links}
              active={`/${semId}`}
            />
            <div>
              <IconButton onClick={showModalHandler} title="Create new folder">
                <CreateNewFolder />
              </IconButton>
            </div>
          </div>
          {isLoading && subjects.length === 0 ? (
            <Spinner />
          ) : (
            <Folders dirs={subjects} />
          )}
          {error && subjects.length === 0 && (
            <Typography color="error">
              Something went wrong. Please try again
            </Typography>
          )}
        </div>
      </Container>
    </>
  );
};

export default Subjects;
