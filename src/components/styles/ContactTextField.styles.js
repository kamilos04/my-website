import { TextField, styled } from "@mui/material";

export const TextFieldStyled = styled(TextField)({
    "& .MuiInputBase-root": {
      borderColor: "red", // Tutaj możesz zmienić kolor obramowania na dowolny inny
    },
  })