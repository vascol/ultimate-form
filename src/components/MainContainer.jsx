import { styled } from "@mui/material/styles"
import Container from "@mui/material/Container"
import React from "react"

const ContainerItem = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}))

export const MainContainer = ({ children, ...props }) => {
  return (
    <ContainerItem component="main" maxWidth="xs" {...props}>
      {children}
    </ContainerItem>
  )
}
