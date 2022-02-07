import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import { PropsWithChildren, PropsWithRef, ReactNode } from 'react';
import './confirmation-dialog.scss';

export type DialogProps = {
    title?: string;
    message?: string;
    open: boolean;
    onCancel?: () => void;
    onConfirm?: () => void;
};

type ConfirmationDialogProps = {
    confirmDialog: DialogProps;
    setConfirmDialog: (props: DialogProps) => void;
};

type GenericProps = {
    [props: string]: any;
};

export const ConfirmationDialog = ({
    confirmDialog,
    setConfirmDialog,
    children,
    props,
}: ConfirmationDialogProps & PropsWithChildren<ReactNode> & GenericProps) => {
    return (
        <Dialog
            className="confirmation-dialog"
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            open={confirmDialog.open}
        >
            <DialogTitle>
                {confirmDialog.title || 'Confirmation Required'}
            </DialogTitle>
            <DialogContent className="dialog-content" dividers>
                {confirmDialog.message || children}
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() =>
                        confirmDialog.onCancel ||
                        setConfirmDialog({ ...confirmDialog, open: false })
                    }
                >
                    Cancel
                </Button>
                <Button variant="contained" onClick={confirmDialog.onConfirm}>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};
