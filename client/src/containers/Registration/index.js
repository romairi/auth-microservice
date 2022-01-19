import { Link } from "react-router-dom";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LOGIN_ROUTE } from "../../routes/constants";
// import { schemaRegistration } from "./validation";
// import {
//   EMAIL_FIELD,
//   CONFIRM_PASSWORD_FIELD,
//   PASSWORD_FIELD,
//   USER_NAME_FIELD,
// } from "./constants";
const theme = createTheme();

// const Error = ({ message }) =>
//   message ? <p className="server-error">{message}</p> : null;

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: joiResolver(schemaRegistration),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  autoComplete="given-name"
                  {...register("firstName")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  {...register("lastName")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  {...register("username")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email-address"
                  {...register("email")}
                />
                {/* <p>{errors.email?.message}</p> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="phone number"
                  name="phoneNumber"
                  autoComplete="phone-number"
                  {...register("phoneNumber")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirmPassword"
                  {...register("confirmPassword")}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={LOGIN_ROUTE} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Registration;
