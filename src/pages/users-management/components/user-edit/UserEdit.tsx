import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { UserForm } from '..';
import { User, useUsers } from '../../../../api';

export const UserEdit = () => {
    const { id } = useParams();
    const { users } = useUsers();
    const { data, isLoading, isFetching } = users.find(Number(id));
    const { mutate: updateUser } = users.update();
    const navigate = useNavigate();

    const goToUserList = () => {
        navigate('/users');
    };

    const handleSubmit = async (user: User) => {
        updateUser(user, {
            onSuccess: () => goToUserList(),
        });
    };

    if (isLoading || isFetching) {
        return <Typography variant="h2">LOADING...</Typography>;
    }

    return (
        <>
            <Box className="edit-user-header">
                <Typography variant="h5">Edit User</Typography>
            </Box>
            <Box className="edit-user-container">
                <UserForm
                    initialValues={data}
                    onSubmit={handleSubmit}
                    isEdit={true}
                />
            </Box>
        </>
    );
};
