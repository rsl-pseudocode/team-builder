import './App.css'
import TeamBuilder from "./Teambuilder";
import DonateButton from "./components/DonateButton";
import {Typography} from "@mui/material";
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
                <Typography variant="h1" gutterBottom>
                    Teambuilder
                </Typography>
                <TeamBuilder/>
                <br/>
                <DonateButton/>
        </ThemeProvider>
    )
}

export default App
