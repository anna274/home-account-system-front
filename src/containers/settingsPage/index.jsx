import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from 'redux/actions';
import { PASSWORD_SETTINGS_MODAL, LOGIN_SETTINGS_MODAL } from 'consts';
import { Button } from '@material-ui/core'
import useStyles from '../styles';

const SettingsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const settingsItems = [
    {
      id: 0,
      text: 'Настройка логина',
      onClick: () => dispatch(showModal({
        modalType: LOGIN_SETTINGS_MODAL,
      }))
    },
    {
      id: 1,
      text: 'Настройка пароля',
      onClick: () => dispatch(showModal({
        modalType: PASSWORD_SETTINGS_MODAL,
      }))
    }
  ]
  return (
    <div className={classes.page}>
      <div className={classes.linksContainer}>
        {
          settingsItems.map(
            ({ id, text, onClick }) =>
              <Button className={classes.settingsItem} key={id} onClick={onClick}>{text}</Button>
          )
        }
      </div>
    </div>
  );
}

export default SettingsPage;