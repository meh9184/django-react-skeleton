import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

function AlertDialog (props) {
  const {
    contentTitle,
    contentText,
    onClickOk,
    fullWidth,
    maxWidth
  } = props;
  const [ dialog, setDialog ] = React.useState(false);

  const handleClickOpen = () => {
    setDialog(true);
  };

  const handleClickClose = () => {
    setDialog(false);
  };

  const handleClickOk = () => {
    onClickOk();
    setDialog(false);
  };

  return (
    <div>
      <Tooltip title="로그아웃">
        <IconButton onClick={handleClickOpen} color="inherit" edge="start">
          <Icon> lock </Icon>
        </IconButton>
      </Tooltip>

      <Dialog open={dialog}
              onClose={handleClickClose}
              fullWidth={fullWidth}
              maxWidth={maxWidth}>
        <DialogTitle id="alert-dialog-title">{contentTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            닫기
          </Button>
          <Button onClick={handleClickOk} color="primary" autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
