import React from "react"
import { MainContainer } from "./components/MainContainer"
import { Typography } from "@mui/material"
import { Form } from "./components/Form"
import { FileInput } from "./components/FileInput"
import { PrimaryButton } from "./components/PrimaryButton"
import { useData } from "./DataContext"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

export const Step3 = () => {
  const navigate = useNavigate()
  const { data, setValues } = useData()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  })

  const onSubmit = (data) => {
    navigate("/result")
    setValues(data)
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  )
}
