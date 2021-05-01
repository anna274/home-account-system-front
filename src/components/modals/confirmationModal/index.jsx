import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles';

export default function ConfirmationModal({ text, onConfirm, confirmText, isOpen, onClose }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" style={{textAlign: 'center'}}>
              {text}
            </Typography>
            <div className={classes.buttonsContainer}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: '1rem' }}
                onClick={onConfirm}
              >{confirmText}</Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={onClose}
              >Отмена</Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}