import { FormControl, Select, MenuItem } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function ThemeModeSelector({ value, onChange }) {
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Theme mode' }}
            >
                <MenuItem value="light">
                    <LightModeIcon sx={{ mr: 1 }} /> Light
                </MenuItem>
                <MenuItem value="dark">
                    <DarkModeIcon sx={{ mr: 1 }} /> Dark
                </MenuItem>
                <MenuItem value="sepia">
                    <AutoStoriesIcon sx={{ mr: 1 }} /> Sepia
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default ThemeModeSelector;