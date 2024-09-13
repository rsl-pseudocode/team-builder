import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Cyan",
  "Magenta",
  "Lime",
  "Olive",
  "Teal",
  "Navy",
  "Maroon",
  "Turquoise",
  "Indigo",
  "Violet",
  "Gold",
  "Silver",
  "Coral",
  "Salmon",
  "Beige",
  "Ivory",
  "Lavender",
  "Mint",
  "Chocolate",
  "Crimson",
  "Plum",
  "Peach",
  "Aqua",
  "Fuchsia",
  "Amber",
  "Mustard",
  "Scarlet",
  "Cerulean",
  "Rose",
  "Sapphire",
  "Chartreuse",
  "Tan",
  "Khaki",
  "Copper",
  "Emerald",
  "Ruby",
  "Jade",
  "Periwinkle",
  "Burgundy",
  "Azure",
];

const animals = [
    "Lions",
    "Tigers",
    "Elephants",
    "Giraffes",
    "Zebras",
    "Pandas",
    "Kangaroos",
    "Koalas",
    "Penguins",
    "Dolphins",
    "Sharks",
    "Whales",
    "Eagles",
    "Falcons",
    "Wolves",
    "Bears",
    "Leopards",
    "Cheetahs",
    "Rhinoceroses",
    "Hippopotamuses",
    "Crocodiles",
    "Alligators",
    "Ostriches",
    "Camels",
    "Gorillas",
    "Chimpanzees",
    "Orangutans",
    "Rabbits",
    "Foxes",
    "Deers",
    "Owls",
    "Peacocks",
    "Horses",
    "Dogs",
    "Cats",
    "Mice",
    "Squirrels",
    "Hamsters",
    "Frogs",
    "Turtles",
    "Snakes",
    "Parrots",
    "Flamingos",
    "Otters",
    "Seals",
    "Polar Bears",
    "Mooses",
    "Bisons",
    "Buffalos",
    "Raccoons",
    "Hedgehogs",
];

function UnitsBuilder() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const nameTextFieldRef = useRef(null);
  const [editedName, setEditedName] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [numUnits, setNumUnits] = useState("");
  const [units, setUnits] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [isResultView, setIsResultView] = useState(false);
  const [shuffledColors, setShuffledTeamNames] = useState([]);

  const query = useQuery();

  useEffect(() => {
    const encodedResults = query.get("results");
    if (encodedResults) {
      try {
        const decodedResults = JSON.parse(atob(encodedResults));
        console.log("Decoded results:", decodedResults);
        setUnits(decodedResults);
        setIsResultView(true);
      } catch (error) {
        console.error("Failed to parse results from URL", error);
      }
    }
  }, [window.location.href]);

  const updateURL = (unitsArray) => {
    const encodedResults = btoa(JSON.stringify(unitsArray));
    setShareUrl(`${window.location.origin}/#/?results=${encodedResults}`);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setCopySuccess("URL copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 3000);
      })
      .catch((err) => {
        setCopySuccess("Failed to copy URL");
        setTimeout(() => setCopySuccess(""), 3000);
        console.error("Failed to copy URL: ", err);
      });
  };

  const reset = () => {
    setErrorMessage("");
    setShareUrl("");
  };

  const handleAddName = () => {
    reset();
    if (name.trim() !== "" && !names.includes(name.trim())) {
      setNames([...names, name.trim()]);
      setName("");
    }
    if (names.includes(name.trim())) {
      setErrorMessage("Name already exists");
    }

    nameTextFieldRef.current.focus();
  };

  const handleRemoveName = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
    if (index === editIndex) {
      setEditIndex(null);
      setEditedName("");
      reset();
    }
  };

  const handleEditName = (index) => {
    setEditIndex(index);
    setEditedName(names[index]);
    reset();
  };

  const handleSaveEdit = () => {
    if (editedName.trim() !== "" && !names.includes(editedName.trim())) {
      const updatedNames = [...names];
      updatedNames[editIndex] = editedName.trim();
      setNames(updatedNames);
      setEditIndex(null);
      setEditedName("");
      reset();
    }
    if (names.includes(editedName.trim())) {
      setErrorMessage("Name already exists");
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditedName("");
  };

  const handleGenerateUnits = () => {
    const numberOfUnits = parseInt(numUnits, 10);
    if (isNaN(numberOfUnits) || numberOfUnits <= 1) {
      alert("Please enter a valid number of teams");
      return;
    }

    setErrorMessage("");
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    const unitsArray = Array.from({ length: numberOfUnits }, () => []);

    shuffledNames.forEach((name, index) => {
      unitsArray[index % numberOfUnits].push(name);
    });

    const shuffledColors = [...colors]
      .sort(() => Math.random() - 0.5)
      .slice(0, numberOfUnits);

    const shuffledAnimals = [...animals]
      .sort(() => Math.random() - 0.5)
      .slice(0, numberOfUnits);

    const combinedTeamNames = shuffledColors.map((color, index) => `${color} ${shuffledAnimals[index]}`);

    setShuffledTeamNames(combinedTeamNames);
    setUnits(unitsArray);
    updateURL(unitsArray);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={0} style={{ padding: "2rem" }}>
        {isResultView ? (
          <Typography textAlign="center" variant="h4">
            Your units
          </Typography>
        ) : (
          <>
            {names.length > 0 && (
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={8}>
                  <Typography variant="h6">
                    Added players: {names.length}
                  </Typography>
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
                            <Button
                              onClick={handleSaveEdit}
                              variant="contained"
                              color="primary"
                              style={{ marginLeft: "10px" }}
                            >
                              Save
                            </Button>
                            <Button
                              onClick={handleCancelEdit}
                              variant="contained"
                              color="inherit"
                              style={{ marginLeft: "10px" }}
                            >
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <ListItemText primary={name} />
                            <ListItemSecondaryAction>
                              <IconButton
                                edge="end"
                                aria-label="edit"
                                onClick={() => handleEditName(index)}
                              >
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleRemoveName(index)}
                              >
                                <DeleteIcon />
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
                <Button
                  onClick={handleAddName}
                  variant="contained"
                  color="primary"
                >
                  Add Name
                </Button>
              </Grid>
              {errorMessage !== "" && (
                <Grid item xs={12} sm={7} container>
                  <Typography color="error">{errorMessage}</Typography>
                </Grid>
              )}
            </Grid>

            <Grid container spacing={2} marginTop={1} alignItems="center">
              <Grid item xs={12} sm={7}>
                <TextField
                  label="How many teams?"
                  value={numUnits}
                  onChange={(e) => setNumUnits(e.target.value)}
                  variant="outlined"
                  type="number"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid
              container
              marginTop={6}
              direction="column"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Button
                  onClick={handleGenerateUnits}
                  variant="contained"
                  color="secondary"
                >
                  Randomize Units
                </Button>
              </Grid>
            </Grid>

            {units.length > 0 && shareUrl && (
              <Grid
                container
                marginTop={2}
                direction="column"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Box textAlign="center" style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="textPrimary">
                      Share the results:
                    </Typography>
                    <Button
                      style={{ margin: "0.5rem" }}
                      variant="contained"
                      color="success"
                      endIcon={<ShareIcon />}
                      onClick={handleCopyToClipboard}
                    >
                      Share link
                    </Button>
                    {copySuccess && (
                      <Typography variant="body2" color="success.main">
                        {copySuccess}
                      </Typography>
                    )}
                  </Box>
                </Grid>
              </Grid>
            )}
          </>
        )}
        {units.length > 0 && (
          <Box
            textAlign="center"
            padding={2}
            border={1}
            borderColor="grey.300"
            borderRadius={4}
            marginTop={2}
          >
            <Grid container spacing={2}>
              {units.map((unit, index) => (
                <Grid item xs={12} key={index}>
                  <Box mt={1}>
                    <Typography
                      variant="h6"
                      sx={{ textDecoration: "underline" }}
                    >
                      Team {shuffledColors[index]}
                    </Typography>
                    <List>
                      {unit.map((member, idx) => (
                        <ListItem key={idx}>{member}</ListItem>
                      ))}
                    </List>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default UnitsBuilder;
