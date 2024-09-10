"use client"
import * as React from 'react';
import { Box, Container } from '@mui/material';
import Clock from './Components/Clock';
import AutoComplete from './Components/AutoCompelete';
import OnOffSwitch from './OnOffSwitch';

export default function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box  >
        <AutoComplete/>
        <Clock />
        <OnOffSwitch/>
      </Box>
    </Container>
  );
}