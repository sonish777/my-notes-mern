import React, { useContext, useEffect, useRef, useState } from "react";
import BreadcrumbLinksContext from "../../context/BreadcrumbLinks";
import BreadcrumbLinks from "../../components/BreadcrumbLinks/BreadcrumbLinks";
import { useParams } from "react-router-dom";
import {
  Container,
  makeStyles,
  IconButton,
  Typography,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardActions,
} from "@material-ui/core";
import { AttachFile, FileCopy, GetApp } from "@material-ui/icons";
import useHttpClient from "../../hooks/useHttpClient";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";

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
  cardRoot: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
    },
  },
  file: {
    display: "none",
  },
  errText: {
    padding: "10px",
    border: "1px solid red",
    borderRadius: "6px",
    marginBottom: "10px",
  },
});

const Documents = () => {
  const [docs, setDocs] = useState([]);
  const [isLoading, error, clearError, sendRequest] = useHttpClient();
  const { semId, subId } = useParams();
  const breadcrumbLinks = useContext(BreadcrumbLinksContext);
  const fileRef = useRef();
  const classes = useStyles();

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await sendRequest(
          `http://localhost:8000/docs/${semId}/${subId}`
        );
        setDocs(res.docs);
      } catch (error) {}
    };
    fetchDocs();
  }, []);

  const onClickHandler = async (docId, type) => {
    try {
      clearError();
      const res = await sendRequest(
        `http://localhost:8000/docs/${docId}?type=${type}`,
        "GET",
        null,
        {},
        "blob"
      );
      const file = new Blob([res.data], { type: res.headers["content-type"] });
      const fileUrl = URL.createObjectURL(file);
      window.open(fileUrl);
    } catch (error) {}
  };

  const openSelectFileHandler = () => {
    fileRef.current.click();
  };

  const selectFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("doc", e.target.files[0]);
    try {
      const res = await sendRequest(
        `http://localhost:8000/docs/${semId}/${subId}`,
        "POST",
        formData
      );
      if (res.status === "success") {
        setDocs([...docs, res.doc]);
      }
    } catch (error) {}
  };
  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.header}>
          <BreadcrumbLinks
            links={breadcrumbLinks.links}
            active={`/${semId}/${subId}`}
          />
          <div>
            <input
              type="file"
              id="upload"
              className={classes.file}
              ref={fileRef}
              onChange={selectFileHandler}
            />
            Upload File
            <IconButton onClick={openSelectFileHandler}>
              <AttachFile />
            </IconButton>
          </div>
        </div>
        {error && (
          <Typography color="error" align="center" className={classes.errText}>
            Something went wrong. Please try again
          </Typography>
        )}
        {isLoading && docs.length !== 0 && (
          <Modal title="Processing, please wait" showModal={true}>
            <Spinner />
          </Modal>
        )}
        {isLoading && docs.length === 0 ? (
          <Spinner />
        ) : (
          <Grid container spacing={4}>
            {docs.map((doc) => (
              <Grid item key={doc._id} xs={12} sm={6} md={4}>
                <Card className={classes.cardRoot} variant="outlined">
                  <CardHeader
                    title={doc.name}
                    subheader={`${doc.semester}, ${doc.subject}`}
                    avatar={<Avatar>{doc.name.split(".")[1]}</Avatar>}
                  />
                  <CardActions>
                    <IconButton
                      title="Download"
                      onClick={() => onClickHandler(doc._id, "download")}
                    >
                      <GetApp />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Container>
  );
};

export default Documents;