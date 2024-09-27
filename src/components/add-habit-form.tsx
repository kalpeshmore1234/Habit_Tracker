import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { addHabit } from "../store/habit-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

const AddHabitForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily"); //This ensures that the function only accepts those two specific string values

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim()) {
      dispatch(
        addHabit({
          name,
          frequency,
        })
      );

      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter habit name"
          fullWidth
        />

        <FormControl
          fullWidth
        >
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")} // This ensures that the setFrequency function only accepts those two specific string values
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="secondary">
          {" "}
          {/* contained---->button with filled background */}
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabitForm;
