import React from "react";
// typography props :- 
// variant(h1,h2,..h6,subtitle1(h6-font-size ),subtitle2, body1, body2(paragraph)),component(change the html element),
// gutterBottom(marginBottom) 
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" component={"h3"}>h1-heading</Typography>
      <Typography variant="h2">h2-heading</Typography>
      <Typography variant="h3">h3-heading</Typography>
      <Typography variant="h4">h4-heading</Typography>
      <Typography variant="h5">h5-heading</Typography>
      <Typography variant="h6" gutterBottom>h6-heading</Typography>
      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">sub title 2</Typography>
      <br/>
      <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi porro cum fugit dolorem quidem facere ullam sapiente ipsa neque facilis nemo aut assumenda expedita itaque, adipisci rem libero, blanditiis obcaecati.</Typography>
      <br/>
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in voluptatum qui harum quibusdam dicta ad earum odio fuga inventore! Beatae hic, reiciendis culpa mollitia quos voluptatibus eius! Amet nulla reiciendis iure dicta sapiente neque labore incidunt provident minima nemo?</Typography>
    </div>
  );
};

export default MuiTypography;
