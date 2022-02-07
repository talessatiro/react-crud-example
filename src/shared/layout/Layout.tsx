import { Box, useTheme } from '@mui/material';
import { Sidebar, TopBar } from '.';
import { RoutesApp } from '../../routes/Routes';
import './layout.scss';

export const Layout = () => {
    const theme = useTheme();

    return (
        <Box display="flex" height="100vh" width="100vw" className="app">
            <Box className="sidebar">
                <Sidebar />
            </Box>
            <Box
                className="main-content"
                marginLeft={theme.spacing(28)}
                flex="1"
            >
                <TopBar />
                {/* Dynamic Content Here */}
                <Box className="routes-content" padding={theme.spacing(2)}>
                    <RoutesApp />
                </Box>
            </Box>
        </Box>
    );
};
