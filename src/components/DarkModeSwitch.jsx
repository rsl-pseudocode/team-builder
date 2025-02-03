import { FormControlLabel, FormGroup, styled, Switch, Button } from "@mui/material";
import { useState } from "react";

const ThemeSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

function DarkModeSwitch({ setThemeMode, themeMode }) {
    const handleThemeChange = (newMode) => {
        setThemeMode(newMode);
    };

    return (
        <FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: 1, p: 2 }}>
            <Button 
                variant={themeMode === 'light' ? 'contained' : 'outlined'}
                onClick={() => handleThemeChange('light')}
            >
                Light
            </Button>
            <Button 
                variant={themeMode === 'dark' ? 'contained' : 'outlined'}
                onClick={() => handleThemeChange('dark')}
            >
                Dark
            </Button>
            <Button 
                variant={themeMode === 'sepia' ? 'contained' : 'outlined'}
                onClick={() => handleThemeChange('sepia')}
            >
                Sepia
            </Button>
        </FormGroup>
    );
}

export default DarkModeSwitch;