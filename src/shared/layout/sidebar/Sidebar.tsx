import {
    Box,
    Divider,
    Drawer,
    List,
    Typography,
    useTheme,
} from '@mui/material';
import { MenuItem, MenuItemProps } from './components';
import './sidebar.scss';

export const Sidebar = () => {
    const theme = useTheme();

    const menuItems: MenuItemProps[] = [
        {
            id: 'home',
            icon: 'home',
            to: '/home',
            label: 'layout.menu.home.label',
        },
        {
            id: 'user-mangement',
            icon: 'management',
            to: '/users',
            label: 'layout.menu.user_management.label',
        },
    ];

    return (
        <Drawer variant="permanent">
            <Box
                height="100%"
                display="flex"
                flexDirection="column"
                width={theme.spacing(28)}
            >
                <Box
                    className="logo-container"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height={theme.spacing(8)}
                >
                    <Typography variant="h5">LOGO</Typography>
                </Box>
                <Divider />
                <Box className="menu-container" flex="1" height="100%">
                    <List>
                        {menuItems.map((menuItem: MenuItemProps) => {
                            return (
                                <MenuItem
                                    key={menuItem.id}
                                    id={menuItem.id}
                                    icon={menuItem.icon}
                                    to={menuItem.to}
                                    label={menuItem.label}
                                />
                            );
                        })}
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
};
