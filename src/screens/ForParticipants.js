import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import emailjs from "emailjs-com";

import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import styles from "./forParticipants.module.css";

const ForParticipants = ({ data }) => {
  console.log(data);
  const [selectedValue, setSelectedValue] = useState("kobieta");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [born, setBorn] = useState("");
  const [company, setCompany] = useState("");
  const [tel, setTel] = useState("");

  const sendEmail = async (
    name,
    newEmail,
    city,
    lastName,
    born,
    company,
    selectedValue
  ) => {
    try {
      //   const templateParams = {
      //     name,
      //     email,
      //     message,
      //   };
      const templateParamsForAdmin = {
        name,
        lastName,
        city,
        company,
        born,
        email,
        newEmail,
        selectedValue,
        email2: "patrykromanowski90@gmail.com",
      };

      //   await emailjs.send(
      //     "service_6lf46hr",
      //     "template_iz2kmoh",
      //     templateParams,
      //     "4C2Gp4x0WqJ_2IYmK"
      //   );

      await emailjs.send(
        "service_6lf46hr",
        "template_lr0yw3s",
        templateParamsForAdmin,
        "4C2Gp4x0WqJ_2IYmK"
      );

      console.log("E-mail został wysłany.");
    } catch (error) {
      console.error("Błąd podczas wysyłania e-maila:", error);
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const cityHandler = (event) => {
    setCity(event.target.value);
  };

  const bornHandler = (event) => {
    setBorn(event.target.value);
  };

  const companyHandler = (event) => {
    setCompany(event.target.value);
  };

  const telHandler = (event) => {
    setTel(event.target.value);
    console.log(tel);
  };

  const handleSubmit = (
    event,
    name,
    email,
    city,
    lastName,
    born,
    company,
    selectedValue
  ) => {
    event.preventDefault();
    sendEmail(name, email, city, lastName, born, company, selectedValue); // Tu możesz obsłużyć dane z formularza
  };

  return (
    <div className={styles.background}>
      <form
        className={styles.form}
        onSubmit={(event) =>
          handleSubmit(
            event,
            name,
            email,
            city,
            lastName,
            born,
            company,
            selectedValue
          )
        }
      >
        <h2 className={styles.title}>{data.titleParticipants}</h2>
        <div className={styles.formContainer}>
          <Box
            display="flex"
            flexDirection="column"
            margin="20px"
            alignItems="center"
          >
            <TextField
              label={data.nameParticipants}
              variant="outlined"
              margin="normal"
              required
              onChange={nameChangeHandler}
            />
            <TextField
              label={data.lastNameParticipants}
              variant="outlined"
              margin="normal"
              required
              onChange={lastNameChangeHandler}
            />
            <TextField
              label={data.emailParticipants}
              type="email"
              variant="outlined"
              margin="normal"
              required
              onChange={emailHandler}
            />
            <TextField
              label={data.cityParticipants}
              variant="outlined"
              margin="normal"
              required
              onChange={cityHandler}
            />
            <TextField
              label="tel"
              variant="outlined"
              margin="normal"
              required
              onChange={telHandler}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            margin="20px"
            alignItems="center"
          >
            <div className={styles.sexInfo}>{data.sexDescription}</div>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="radiobox-options"
                name="radiobox-options"
                value={selectedValue}
                style={{ display: "flex", flexDirection: "row" }}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="kobieta"
                  control={<Radio />}
                  label={data.womanParticipants}
                />
                <FormControlLabel
                  value="mężczyzna"
                  control={<Radio />}
                  label={data.manParticipants}
                />
                <FormControlLabel
                  value="inne"
                  control={<Radio />}
                  label={data.otherSexParticipants}
                />
              </RadioGroup>
            </FormControl>

            <TextField
              label={born.bornParticipants}
              type="date"
              variant="outlined"
              margin="normal"
              required
              onChange={bornHandler}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label={data.companyParticipants}
              variant="outlined"
              margin="normal"
              required
              onChange={companyHandler}
            />
            <Button
              style={{ margin: "20px 0px 0px 0px" }}
              type="submit"
              variant="contained"
              color="primary"
            >
              {data.buttonParticipants}
            </Button>
          </Box>
        </div>
      </form>
    </div>
  );
};

export default ForParticipants;
