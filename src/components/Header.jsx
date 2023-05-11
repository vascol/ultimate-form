import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const Div = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  justifyContent: "center",
}))

export const Header = () => {
  return (
    <Div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 840,
          boxShadow: 4,
          textShadow: "1px 1px #263238",
          bgcolor: "#a2cf6e",
          color: "#263238",
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Typography component="h1" variant="h4">
          The Ultimate Form Challenge
        </Typography>
      </Box>
    </Div>
  )
}
