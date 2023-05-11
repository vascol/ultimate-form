import React from "react"
import { styled } from "@mui/material/styles"
import { Controller } from "react-hook-form"
import Dropzone from "react-dropzone"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material"
import { InsertDriveFile } from "@mui/icons-material"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"

const ItemPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#eee",
  textAlign: "center",
  cursor: "pointer",
  color: "#333",
  padding: "10px",
  marginTop: "20px",
}))

const ItemIkon = styled(CloudUploadIcon)(({ theme }) => ({
  marginTop: "16px",
  color: "#888888",
  fontSize: "42px",
}))

export const FileInput = ({ control, name }) => {
  return (
    <Controller
      shouldUnregister={true}
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <ItemPaper variant="outlined" {...getRootProps()}>
                <ItemIkon />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </ItemPaper>
            )}
          </Dropzone>

          <List>
            {value.map((f, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  )
}
