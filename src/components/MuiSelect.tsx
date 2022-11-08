import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState("India");
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="Aus">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
