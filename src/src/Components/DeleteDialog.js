import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import I18n from '@iobroker/adapter-react/i18n';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import DeleteIcon from '@material-ui/icons/Delete';
import UndoIcon from '@material-ui/icons/Undo';

const DeleteDialog = (props) => {
    const [disableWarnings, setDisableWarnings] = useState(false);
    useEffect(() => {
        setDisableWarnings(false);
    }, [props.open]);

    return props.open ? <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>{I18n.t('Delete item')}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                <p>{I18n.t('Are you sure to delete')} {props.item._address}?</p>
                <p><FormControlLabel
                    label={I18n.t('Don\'t show this message in 5 minutes')}
                    control={<Checkbox
                        checked={disableWarnings}
                        onChange={e => setDisableWarnings(e.target.checked)}
                />}/></p>
            </DialogContentText>
            <DialogActions>
                <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => {
                    props.action(disableWarnings);
                    props.onClose();
                }}>{I18n.t('Delete')}</Button>
                <Button variant="contained" onClick={props.onClose} startIcon={<UndoIcon />}>{I18n.t('Cancel')}</Button>
            </DialogActions>
        </DialogContent>
    </Dialog> : null;
}

DeleteDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    classes: PropTypes.object,
    action: PropTypes.func,
    item: PropTypes.object,
}

export default DeleteDialog;