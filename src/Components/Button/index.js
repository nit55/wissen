import * as React from "react";
import Button from "@mui/material/Button";

export default function ContainedButtons(props) {
  const { click, type, disabled, text } = props;
  return (
    <Button
      variant="contained"
      onClick={click}
      type={type}
      disabled={disabled}
      style={{ width: "200px", left: "6%" }}
    >
      {text}
    </Button>
  );
}
