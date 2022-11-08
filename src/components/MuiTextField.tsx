import React from "react";
import { Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Email" color="secondary" size="small" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="form-input" required/>
        <TextField label="Password" helperText="do not share your password with anyone" type="password"/>
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
