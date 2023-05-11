import React from "react"
import { MainContainer } from "./components/MainContainer"
import { Checkbox, FormControlLabel, Typography } from "@mui/material"
import { Form } from "./components/Form"
import { Input } from "./components/Input"
import { useData } from "./DataContext"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { PrimaryButton } from "./components/PrimaryButton"
import parsePhoneNumberFromString from "libphonenumber-js"

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
})

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value)
  if (!phoneNumber) {
    return value
  }
  return phoneNumber.formatInternational()
}

export const Step2 = () => {
  const { setValues, data } = useData()
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    resolver: yupResolver(schema),
  })

  const hasPhone = watch("hasPhone")

  const onSubmit = (data) => {
    console.log(data)
    navigate("/step3")
    setValues(data)
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5" align="center">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              color="primary"
              // inputRef={register}/>
              {...register("hasPhone")}
              name="hasPhone"
            />
          }
          label="Do you have a phone"
        />
        {hasPhone && (
          <Input
            {...register("phoneNumber")}
            id="phoneNumber"
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value)
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  )
}
