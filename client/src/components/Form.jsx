import { addNumber } from "../api/my-api";
import { Box, TextField, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import ShowData from "./ShowData";

const Form = () => {
  const [formInput, setFormInput] = useState({ num1: "", num2: "" });
  const [result, setResult] = useState("");
  const handleFormInput = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const { num1, num2 } = formInput;
  const handleCalculate = async (e) => {
    e.preventDefault();
    if (!num1 || !num2) return alert("Please provide all number");
    const result = await addNumber(formInput);
    result?.status === 200
      ? setResult(result?.data?.add)
      : alert(result?.response?.data?.message);
  };
  return (
    <Box>
      <Box
        sx={{
          width: "25rem",
          boxShadow: "0 0 4px grey",
          margin: "5rem auto",
          marginBottom: "3rem",
        }}
      >
        <form
          onSubmit={handleCalculate}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            padding: "3rem",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            ADD TWO NUMBER AND DOWNLOAD PDF
          </Typography>
          <TextField
            type="number"
            label="Enter first number"
            name="num1"
            value={num1}
            size="small"
            onChange={handleFormInput}
          />
          <TextField
            type="number"
            label="Enter second number"
            name="num2"
            value={num2}
            size="small"
            onChange={handleFormInput}
          />
          <Button
            type="submit"
            size="small"
            variant="contained"
            color="secondary"
          >
            Calculate
          </Button>
        </form>
      </Box>
      {result && <ShowData formInput={formInput} result={result} />}
    </Box>
  );
};

export default Form;
