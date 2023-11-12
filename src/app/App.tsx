import React from 'react';
import '../css/App.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';

function App() {
  return (
    <Container>
      <Stack flexDirection={"column"}>
        <Box sx={{my: 4}}>
          <Typography variant="h1" component={"h1"} gutterBottom> Create React on Typescript with React</Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
            <Button variant="contained">Contained</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
