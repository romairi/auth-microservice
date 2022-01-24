import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


import "./index.scss";

const Copyright = () => {
  return (
    <Typography variant="body2" color="primary"> 
     
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#1976d2",
        width: "100%",
        py: 3,
        px: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="sm" color="primary">
        <Typography variant="body1"></Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
