import React, { useState, useEffect } from "react";
import { FormLabel, TextField, Button } from "@mui/material";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function BookDetail() {
  // state for the checkbox
  const initialState = {
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  };
  const [checked, setChecked] = useState(false);

  const [input, setInput] = useState(initialState);
  const id = useParams().id;

  // state for all the values

  // fetch the data with first call
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8800/books${id}`)
        .then((res) => res.data)
        .then((data) => setInput(data.book));
    };
    fetchHandler();
  }, []);

  // form handling
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8800/books${id}`;
    // put call to update
    await axios.put(url, {
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
          Update book
        </Button>
      </Box>
    </form>
  );
}
