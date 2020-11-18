import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
} from "@material-ui/core";
import Spinner from "../Spinner/Spinner";

const Modal = ({
  showModal,
  closeModalHandler,
  title,
  isLoading,
  error,
  children,
  footer,
}) => {
  return (
    <Dialog open={showModal} onClose={closeModalHandler}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {isLoading ? <Spinner /> : children}
        {error && <Typography color="secondary">{error}</Typography>}
        <DialogActions>{footer}</DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
