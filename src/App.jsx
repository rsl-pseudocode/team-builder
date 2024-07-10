import './App.css'
import UnitsBuilder from "./UnitsBuilder";
import {Grid, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeSwitch from "./components/DarkModeSwich.jsx";
import {useState} from "react";

function App() {
    const [toggleDarkMode, setToggleDarkTheme] = useState(true);

    const darkTheme = createTheme({
        palette: {
            mode: toggleDarkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <div style={{position: 'absolute', top: 0, right: 0}}>
                <DarkModeSwitch setDarkThemeClicked={setToggleDarkTheme}/>
            </div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{minHeight: '95vh'}}
            >
                <Grid item>
                    <Typography variant="h2" gutterBottom>
                        Random units
                    </Typography>
                    <p>
                        Add your friends names and randomize teams/units
                    </p>
                </Grid>
                <Grid item>
                    <UnitsBuilder/>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App
