import React, {useState, useRef} from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function UnitsBuilder() {
    const [names, setNames] = useState([]);
    const [name, setName] = useState('');
    const nameTextFieldRef = useRef(null);
    const [editedName, setEditedName] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [numUnits, setNumUnits] = useState('');
    const [units, setUnits] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddName = () => {
        setErrorMessage('');
        if (name.trim() !== '' && !names.includes(name.trim())) {
            setNames([...names, name.trim()]);
            setName('');            
        }
        if(names.includes(name.trim()))
        {
            setErrorMessage('Name already exists');           
        }

        nameTextFieldRef.current.focus();
    };

    const handleRemoveName = (index) => {
        const updatedNames = [...names];
        updatedNames.splice(index, 1);
        setNames(updatedNames);
        if (index === editIndex) {
            setEditIndex(null);
            setEditedName('');
            setErrorMessage('');
        }
    };

    const handleEditName = (index) => {
        setEditIndex(index);
        setEditedName(names[index]);
        setErrorMessage('');
    };

    const handleSaveEdit = () => {
        if (editedName.trim() !== '' && !names.includes(editedName.trim())) {
            const updatedNames = [...names];
            updatedNames[editIndex] = editedName.trim();
            setNames(updatedNames);
            setEditIndex(null);
            setEditedName('');
            setErrorMessage('');
        }
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
        setEditedName('');
    };

    const handleGenerateUnits = () => {
        const numberOfUnits = parseInt(numUnits, 10);
        if (isNaN(numberOfUnits) || numberOfUnits <= 1) {
            alert('Please enter a valid number of units');
            return;
        }

        setErrorMessage('');
        const shuffledNames = [...names].sort(() => Math.random() - 0.5);
        const unitsArray = Array.from({length: numberOfUnits}, () => []);

        shuffledNames.forEach((name, index) => {
            unitsArray[index % numberOfUnits].push(name);
        });

        setUnits(unitsArray);
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={0} style={{padding: '2rem'}}>               
                {names.length > 0 && (
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h6">Added friends:</Typography>
                            <List>
                                {names.map((name, index) => (
                                    <ListItem key={index}>
                                        {editIndex === index ? (
                                            <>
                                                <TextField
                                                    value={editedName}
                                                    onChange={(e) => setEditedName(e.target.value)}
                                                    variant="outlined"
                                                    fullWidth
                                                />
                                                <Button onClick={handleSaveEdit} variant="contained" color="primary"
                                                        style={{marginLeft: '10px'}}>
                                                    Save
                                                </Button>
                                                <Button onClick={handleCancelEdit} variant="contained" color="inherit"
                                                        style={{marginLeft: '10px'}}>
                                                    Cancel
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <ListItemText primary={name}/>
                                                <ListItemSecondaryAction>
                                                    <IconButton edge="end" aria-label="edit"
                                                                onClick={() => handleEditName(index)}>
                                                        <EditIcon/>
                                                    </IconButton>
                                                    <IconButton edge="end" aria-label="delete"
                                                                onClick={() => handleRemoveName(index)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </>
                                        )}
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                )}
                 <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={7}>
                        <TextField
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="outlined"
                            fullWidth
                            inputRef={nameTextFieldRef}
                        />
                    </Grid>
                    <Grid item sm={5} container justifyContent="center">
                        <Button onClick={handleAddName} variant="contained" color="primary">
                            Add Name
                        </Button>                                                
                    </Grid>
                    {(errorMessage !== '') && (
                        <Grid item xs={12} sm={7} container>
                            <Typography color="error">
                                {errorMessage}
                            </Typography>
                        </Grid>
                    )}
                </Grid>

                <Grid container marginTop={3}>
                    <Typography>Amount of friends: {names.length}</Typography>
                </Grid>

                <Grid container spacing={2} marginTop={1} alignItems="center">
                    <Grid item xs={12} sm={7}>
                        <TextField
                            label="How many units?"
                            value={numUnits}
                            onChange={(e) => setNumUnits(e.target.value)}
                            variant="outlined"
                            type="number"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid container marginTop={6} direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Button onClick={handleGenerateUnits} variant="contained" color="secondary">
                            Randomize Units
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={2} alignItems="center">
                    <Grid item>
                        {units.map((unit, index) => (
                            <Box key={index} mt={1}>
                                <Typography variant="h6">Unit {index + 1}</Typography>
                                <List>
                                    {unit.map((member, idx) => (
                                        <ListItem key={idx}>{member}</ListItem>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default UnitsBuilder;
