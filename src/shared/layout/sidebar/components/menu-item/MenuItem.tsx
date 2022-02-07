import {
    Icon,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

export type MenuItemProps = {
    id: string;
    icon: string;
    to: string;
    label: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ id, to, icon, label }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleListItemClick = (to: string) => {
        navigate(to);
    };

    return (
        <ListItemButton
            selected={!!match}
            id={id}
            onClick={() => handleListItemClick(to)}
        >
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={t(label)} />
        </ListItemButton>
    );
};
