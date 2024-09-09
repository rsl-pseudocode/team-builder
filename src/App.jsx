import './App.css'
import UnitsBuilder from "./UnitsBuilder";
import {Grid, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeSwitch from "./components/DarkModeSwitch.jsx";
import DonateButton from "./components/DonateButton.jsx";
import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function App() {
    const [toggleDarkMode, setToggleDarkTheme] = useState(true);    
    const [isResultView, setIsResultView] = useState(false);

    const darkTheme = createTheme({
        palette: {
            mode: toggleDarkMode ? 'dark' : 'light',
        },
    });


    const query = useQuery();

    useEffect(() => {
      const hasResultsParam = query.has('results');
      if (hasResultsParam) {        
          setIsResultView(true);        
      }
    }, [window.location.href]);

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
                    {!isResultView && <Typography>Add your friends names and randomize teams/units</Typography>}                    
                </Grid>
                <Grid item>
                    <UnitsBuilder/>
                </Grid>
                <Grid item>
                    <DonateButton/>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App
