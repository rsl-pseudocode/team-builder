import './App.css'
import UnitsBuilder from "./UnitsBuilder";
import {Grid, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import ThemeModeSelector from "./components/ThemeModeSelector.jsx";
import DonateButton from "./components/DonateButton.jsx";
import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function App() {
    const [themeMode, setThemeMode] = useState('dark');
    const [isResultView, setIsResultView] = useState(false);

    const themes = {
        light: createTheme({
            palette: {
                mode: 'light',
            },
        }),
        dark: createTheme({
            palette: {
                mode: 'dark',
            },
        }),
        sepia: createTheme({
            palette: {
                mode: 'light',
                background: {
                    default: '#f4ecd8',
                    paper: '#fff7e6',
                },
                text: {
                    primary: '#5c4b37',
                    secondary: '#7a6352',
                },
                primary: {
                    main: '#8b6b4f',
                    light: '#a68669',
                    dark: '#6f4e35',
                },
                secondary: {
                    main: '#6b563f',
                    light: '#8b7355',
                    dark: '#4d3c2c',
                },
            },
        }),
    };

    const query = useQuery();

    useEffect(() => {
        const hasResultsParam = query.has('results');
        if (hasResultsParam) {        
            setIsResultView(true);        
        }
    }, [window.location.href]);

    return (
        <ThemeProvider theme={themes[themeMode]}>
            <CssBaseline/>
            <div style={{position: 'absolute', top: 0, right: 0}}>
                <ThemeModeSelector value={themeMode} onChange={setThemeMode}/>
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