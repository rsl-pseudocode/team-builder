import './App.css'
import TeamBuilder from "./Teambuilder";
import DonateButton from "./components/DonateButton";
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
                sx={{minHeight: '100vh'}}
            >
                <Grid xs={12}>
                    <Typography variant="h2" gutterBottom>
                        Teambuilder
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <TeamBuilder/>
                </Grid>
                <Grid xs={12}>
                    <DonateButton/>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App
