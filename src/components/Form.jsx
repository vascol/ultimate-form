import React from "react"
import { styled } from "@mui/material/styles"

const FormItem = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}))

export const Form = ({ children, ...props }) => {
  return (
    <FormItem {...props} noValidate>
      {children}
    </FormItem>
  )
}
