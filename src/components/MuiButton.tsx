import React, { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

/*
<Stack></Stack> is used as wrapper around Button  for example button
<Button></Button> has main props of variant(contained, text, outlined), color(primary, secondary,success,warning,error)


*/

const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);

  const handleFormatChange = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string | null
  ) => {
    setFormats(newFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Container</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      {/* -------------------------------------------------------------------------- */}
      {/* Color of buttons */}
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      {/* ------------------------------------------------------------------------ */}
      {/* sizes of buttons */}
      <Stack spacing={2} display="block" direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      {/* --------------------------------------------------------------------------------- */}
      {/* Icon with Buttons */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Icon
        </Button>
        <Button variant="contained" color="success" endIcon={<SendIcon />}>
          Icon
        </Button>
        <IconButton aria-label="send" size="small" color="success">
          <SendIcon />
        </IconButton>
      </Stack>
      {/* ----------------------------------------------------------------------------- */}
      {/* ButtonGroup */}
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button onClick={() => alert("left is clicked")}>Left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      {/* ToggleButton */}

      <Stack spacing={2} direction="row">
        <ToggleButtonGroup
          size="small"
          color="success"
          value={formats}
          onChange={handleFormatChange}
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
