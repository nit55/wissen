import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function InputAdornments(props) {
  const {
    type,
    change,
    value,
    handleClickShowPassword,
    handleMouseDownPassword,
    showPassword,
  } = props;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        {type !== "password" ? (
          <FormControl sx={{ m: 1, width: "25ch" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              {type}
            </InputLabel>
            <OutlinedInput
              id={"outlined-adornment-password" + " " + type}
              type={type !== "password" ? "text" : "password"}
              value={value}
              onChange={change(type)}
              label={type}
            />
          </FormControl>
        ) : (
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              {type}
            </InputLabel>
            <OutlinedInput
              id={"outlined-adornment-password" + " " + type}
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={change(type)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={type}
            />
          </FormControl>
        )}
      </div>
    </Box>
  );
}
