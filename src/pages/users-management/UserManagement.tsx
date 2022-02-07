import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const UserManagement = () => {
    return (
        <Box className="user-management">
            <Box className="user-management-header">
                <Typography variant="h2">User Management</Typography>
            </Box>
            <Box className="user-management-container">
                <Outlet />
            </Box>
        </Box>
    );
};
