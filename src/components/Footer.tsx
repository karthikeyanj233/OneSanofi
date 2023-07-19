import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import '../styles/Footer.css'
export default function Footer() {
  return (
    <Box
      sx={{
        Color:'white',
        p:3,  
      }}
      component="footer"
      className="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2"  align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}