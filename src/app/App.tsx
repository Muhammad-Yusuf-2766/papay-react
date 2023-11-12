import React from 'react';
import '../css/App.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth='sm'>
      <Stack flexDirection={"column"}>
        <Box sx={{my: 4}}>
          <Typography variant="4" component={"h1"} gutterBottom> Create React on Typescript with React</Typography>
        </Box>
        <Button variant="contained">Contained</Button>
      </Stack>
    </Container>
  );
}

export default App;
