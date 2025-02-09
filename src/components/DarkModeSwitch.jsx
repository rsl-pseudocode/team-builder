import { FormControl, Select, MenuItem } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function DarkModeSwitch({ themeMode, setThemeMode }) {
    const handleChange = (event) => {
        setThemeMode(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                value={themeMode}
                onChange={handleChange}
                displayEmpty
                sx={{
                    '& .MuiSelect-select': {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }
                }}
            >
                <MenuItem value="light">
                    <LightModeIcon /> Light
                </MenuItem>
                <MenuItem value="dark">
                    <DarkModeIcon /> Dark
                </MenuItem>
                <MenuItem value="sepia">
                    <AutoStoriesIcon /> Sepia
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default DarkModeSwitch;