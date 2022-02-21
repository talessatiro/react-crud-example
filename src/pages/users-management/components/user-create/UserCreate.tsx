import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { UserForm } from '..';
import { User, useUsers } from '../../../../api';

export const UserCreate = () => {
    const { users } = useUsers();
    const { mutate: createUser } = users.create();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const initialValues: User = {
        name: '',
        age: 0,
        email: '',
    };

    const goToUserList = () => {
        navigate('/users');
    };

    const handleSubmit = async (user: User): Promise<void> => {
        createUser(user, {
            onSuccess: () => goToUserList(),
        });
    };

    return (
        <>
            <Box className="create-user-header">
                <Typography variant="h5">
                    {t('pages.userManagement.createUser.title')}
                </Typography>
            </Box>
            <Box className="create-user-container">
                <UserForm
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </Box>
        </>
    );
};
