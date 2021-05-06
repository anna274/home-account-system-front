import React from 'react';
import { Pie } from 'react-chartjs-2';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles';

export default function ChartModal({ isOpen, onClose, title, dataset }) {
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
          <div className={classes.largePaper}>
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
              <Pie type='pie' data={{
                labels: dataset.labels,
                datasets: [{
                  label: title,
                  data: dataset.data,
                  backgroundColor: dataset.backgroundColor,
                  hoverOffset: 4
                }],
              }}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}