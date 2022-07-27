import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  
  const AddEvent = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      description: "",
      price: "",
      author: "",
      image: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      
      await axios
        .post("http://localhost:5000/events", {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.extra),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/events"));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={inputs.name}
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          <FormLabel>Event</FormLabel>
          <TextField
            value={inputs.author}
            helperText="Please enter your event name"
            id="demo-helper-text-aligned"
            label="Event"
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
          />
          <FormLabel>Description</FormLabel>
          <TextField
            value={inputs.description}
            helperText="Please enter a description"
            id="demo-helper-text-aligned"
            label="Description"
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
          />
          <FormLabel>Price</FormLabel>
          <TextField
            value={inputs.price}
            helperText="Please enter a price"
            id="demo-helper-text-aligned"
            label="Price"
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />
          <FormLabel>Extra Information</FormLabel>
          <TextField
            value={inputs.extra}
            helperText="Please enter any added information"
            id="demo-helper-text-aligned"
            label="Extra Information"
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="Extra Information"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            }
            label="Available"
          />
  
          <Button variant="contained"  type="submit">
            Add Event
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddEvent;