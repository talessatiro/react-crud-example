import { Box, Button, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './topbar.scss';

type LanguageItem = {
    key: string;
    label: string;
};

export const TopBar = () => {
    const theme = useTheme();

    const languages: LanguageItem[] = [
        {
            key: 'en',
            label: 'layout.topbar.languages.english',
        },
        {
            key: 'ptBr',
            label: 'layout.topbar.languages.portuguese',
        },
    ];
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (languageKey: string) => {
        i18n.changeLanguage(languageKey);
    };

    return (
        <Box className="topbar" height={theme.spacing(8)}>
            {languages.map((languageItem: LanguageItem) => {
                return (
                    <Button
                        key={languageItem.key}
                        onClick={() => handleLanguageChange(languageItem.key)}
                    >
                        {t(languageItem.label)}
                    </Button>
                );
            })}
        </Box>
    );
};
