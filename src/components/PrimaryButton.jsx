import React from "react"

import { styled } from "@mui/material/styles"
import { Button } from "@mui/material"

const Div = styled("div")(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}))

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <Div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        {...props}
      >
        {children}
      </Button>
    </Div>
  )
}
