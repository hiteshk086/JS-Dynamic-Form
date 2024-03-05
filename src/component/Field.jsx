import React, { useCallback, useState } from "react";
import { TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Field = ({ field }) => {
  const [name, setName] = useState("");

  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dropDown, setDropdown] = useState("");

  if (!field?.visible) return null;

  const handleLogin = (data) => {
    let finalData = {
      name: name,
      number: number,
      dropDown: dropDown,
      email: email,
    };

    console.log("Final Data :", finalData);
    console.log("🚀 ~ Field ~ name:", name);
  };

  switch (field?.field_type) {
    case "text":
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            required
            margin="normal"
            style={{ width: "30%" }}
            size="medium"
            name="companyName"
            type="text"
            placeholder="name"
            label={field?.display_name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            autoFocus
          />
        </div>
      );
    case "email":
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            required
            margin="normal"
            style={{ width: "30%" }}
            size="medium"
            type="text"
            label={field?.display_name}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            autoFocus
          />
        </div>
      );
    case "number":
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            required
            margin="normal"
            style={{ width: "30%" }}
            size="medium"
            type="number"
            label={field?.display_name}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            variant="outlined"
            autoFocus
          />
        </div>
      );
    case "array":
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            required
            margin="normal"
            style={{ width: "30%" }}
            size="medium"
            type="number"
            label={field?.display_name}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            variant="outlined"
            autoFocus
          />
        </div>
      );

    case "select":
      return (
        <FormControl style={{ width: "30%" }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dropDown}
            label="Age"
            onChange={(e) => setDropdown(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      );
    case "button":
      return (
        <>
          <Button
            className="btn"
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              height: "51px",
              borderRadius: 2,
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            onClick={handleLogin}
          >
            Submit
          </Button>
        </>
      );
    default:
      return null;
  }
};

export default Field;
