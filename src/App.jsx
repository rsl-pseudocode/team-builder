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
    const [themeMode, setThemeMode] = useState('dark');    
    const [isResultView, setIsResultView] = useState(false);

    const theme = createTheme({
        palette: {
            mode: themeMode,
            ...(themeMode === 'sepia' && {
                background: {
                    default: '#f4ecd8',
                    paper: '#fff5e6',
                },
                text: {
                    primary: '#5f4b32',
                    secondary: '#7a6045',
                },
                primary: {
                    main: '#8b6b4f',
                    light: '#a88566',
                    dark: '#6e5339',
                },
                secondary: {
                    main: '#6b563f',
                    light: '#8c7357',
                    dark: '#4a3b2b',
                },
            }),
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
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div style={{position: 'absolute', top: 0, right: 0}}>
                <DarkModeSwitch themeMode={themeMode} setThemeMode={setThemeMode}/>
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