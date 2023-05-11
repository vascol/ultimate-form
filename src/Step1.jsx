import React from "react"
import { Typography } from "@mui/material"
import { useData } from "./DataContext"
import { Form } from "./components/Form"
import { Input } from "./components/Input"
import { MainContainer } from "./components/MainContainer"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { PrimaryButton } from "./components/PrimaryButton"
import { useNavigate } from "react-router-dom"

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3)
    .max(20)
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .min(3)
    .max(20)
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
})

export const Step1 = () => {
  const { setValues, data } = useData()
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
    navigate("/step2")
    setValues(data)
    reset()
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5" align="center">
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName")}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register("lastName")}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  )
}
