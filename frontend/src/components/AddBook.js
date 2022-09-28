import React, { useState } from "react";
import { FormLabel, TextField, Button } from "@mui/material";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
export default function AddBook() {
  // state for the checkbox
  const [checked, setChecked] = useState(false);

  // state for all the values
  const initialState = {
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  };
  const [input, setInput] = useState(initialState);

  // form handling
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8800/books";
    await axios.post(url, {
      name: String(input.name),
      author: String(input.author),
      description: String(input.description),
      price: Number(input.price),
      available: Boolean(checked),
      image: String(input.image),
    });
    // set the form back to empty
    setInput(initialState);
    setChecked(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        maxWidth={550}
        display="flex"
        flexDirection="column"
        marginTop="50px"
        // justifyContent="center"
        // alignItems="center"
        marginLeft="auto"
        marginRight="auto"
      >
        <FormLabel>Name *</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          value={input.name}
          onChange={handleChange}
        />

        <FormLabel>Author *</FormLabel>
        <TextField
          required
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          value={input.author}
          onChange={handleChange}
        />

        <FormLabel>Description *</FormLabel>
        <TextField
          required
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          value={input.description}
          onChange={handleChange}
        />
        <FormLabel>Price *</FormLabel>
        <TextField
          required
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          value={input.price}
          onChange={handleChange}
        />
        <FormLabel>Image url *</FormLabel>
        <TextField
          required
          type=""
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
          value={input.image}
          onChange={handleChange}
        />
        {/* toggle availablity */}
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <Button variant="contained" type="submit">
          Add book
        </Button>
      </Box>
    </form>
  );
}
