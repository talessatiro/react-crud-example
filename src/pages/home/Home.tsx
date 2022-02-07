import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Home = () => {
    const { t } = useTranslation();

    return (
        <Box className="home">
            <Box className="home-header">
                <Typography variant="h2">{t('pages.home.title')}</Typography>
                <p>{t('pages.home.description')}</p>
            </Box>
            <Box className="home-container"></Box>
        </Box>
    );
};
