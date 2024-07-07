import React, {useState} from 'react';
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


function TeamBuilder() {
    const [names, setNames] = useState([]);
    const [name, setName] = useState('');
    const [editedName, setEditedName] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [numTeams, setNumTeams] = useState('');
    const [teams, setTeams] = useState([]);

    const handleAddName = () => {
        if (name.trim() !== '') {
            setNames([...names, name.trim()]);
            setName('');
        }
    };

    const handleRemoveName = (index) => {
        const updatedNames = [...names];
        updatedNames.splice(index, 1);
        setNames(updatedNames);
        if (index === editIndex) {
            setEditIndex(null);
            setEditedName('');
        }
    };

    const handleEditName = (index) => {
        setEditIndex(index);
        setEditedName(names[index]);
    };

    const handleSaveEdit = () => {
        if (editedName.trim() !== '') {
            const updatedNames = [...names];
            updatedNames[editIndex] = editedName.trim();
            setNames(updatedNames);
            setEditIndex(null);
            setEditedName('');
        }
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
        setEditedName('');
    };

    const handleGenerateTeams = () => {
        const numberOfTeams = parseInt(numTeams, 10);
        if (isNaN(numberOfTeams) || numberOfTeams <= 1) {
            alert('Please enter a valid number of teams');
            return;
        }

        const shuffledNames = [...names].sort(() => Math.random() - 0.5);
        const teamsArray = Array.from({length: numberOfTeams}, () => []);

        shuffledNames.forEach((name, index) => {
            teamsArray[index % numberOfTeams].push(name);
        });

        setTeams(teamsArray);
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={0} style={{padding: '2rem'}}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={8}>
                        <TextField
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <Button onClick={handleAddName} variant="contained" color="primary">
                            Add Name
                        </Button>
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={2} alignItems="center">
                    <Grid item xs={12} sm={8}>
                        <TextField
                            label="How many teams?"
                            value={numTeams}
                            onChange={(e) => setNumTeams(e.target.value)}
                            variant="outlined"
                            type="number"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                {names.length > 0 && (
                    <Grid container spacing={2} marginTop={2} alignItems="center">
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h6">Added names:</Typography>
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
                <Grid container marginTop={6} direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Button onClick={handleGenerateTeams} variant="contained" color="secondary">
                            Generate Teams
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={2} alignItems="center">
                    <Grid item>
                        {teams.map((team, index) => (
                            <Box key={index} mt={1}>
                                <Typography variant="h6">Team {index + 1}</Typography>
                                <List>
                                    {team.map((member, idx) => (
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

export default TeamBuilder;
