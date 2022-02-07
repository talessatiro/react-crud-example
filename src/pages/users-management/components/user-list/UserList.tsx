import { Box, Button, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './user-list.scss';
import { ConfirmationDialog, DialogProps } from '../../../../shared/components';
import { useState } from 'react';
import { User, useUsers } from '../../../../api';

export const UserList = () => {
    const [confirmDialog, setConfirmDialog] = useState<DialogProps>({
        open: false,
    });
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { users } = useUsers();
    const { data, isLoading } = users.all();
    const { mutate: removeUser } = users.remove();

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            disableColumnMenu: true,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            disableColumnMenu: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            disableColumnMenu: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250,
            disableColumnMenu: true,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            disableColumnMenu: true,
            renderCell: (params) => {
                const { id }: User = params.row;

                return (
                    <Box className="actions-buttons">
                        <IconButton
                            onClick={() => handleEditUser(id)}
                            aria-label="edit"
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                setConfirmDialog({
                                    open: true,
                                    title: 'Delete User',
                                    message:
                                        'Are you sure you want to delete this user?',
                                    onConfirm: () => handleDeleteUser(id),
                                });
                            }}
                            aria-label="delete"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                );
            },
        },
    ];

    const handleEditUser = (id: number | undefined) => {
        navigate(`/users/edit/${id}`);
    };

    const handleDeleteUser = (id: number | undefined) => {
        removeUser(id!, {
            onSuccess: () =>
                setConfirmDialog({ ...confirmDialog, open: false }),
        });
    };

    const goToCreatePage = () => {
        navigate('/users/create');
    };

    return (
        <>
            <Box className="user-list-header">
                <Button
                    onClick={goToCreatePage}
                    variant="contained"
                    startIcon={<AddIcon />}
                >
                    {t('pages.user_management.actions.add')}
                </Button>
            </Box>
            <Box className="user-list-container">
                {data && (
                    <DataGrid
                        isRowSelectable={() => false}
                        loading={isLoading}
                        autoHeight
                        rows={data as User[]}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                )}
            </Box>

            <ConfirmationDialog
                id="delete-user-confirmation"
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            ></ConfirmationDialog>
        </>
    );
};
