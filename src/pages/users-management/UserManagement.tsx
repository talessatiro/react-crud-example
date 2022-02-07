import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

export const UserManagement = () => {
    const { t } = useTranslation();

    return (
        <Box className="user-management">
            <Box className="user-management-header">
                <Typography variant="h2">{t('pages.userManagement.title')}</Typography>
            </Box>
            <Box className="user-management-container">
                <Outlet />
            </Box>
        </Box>
    );
};
