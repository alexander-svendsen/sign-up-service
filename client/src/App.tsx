import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import Header from "./Header";

const App = () => {
  return (
      <ThemeProvider>
          <ColorModeProvider>
              <CSSReset />
              <Header/>
          </ColorModeProvider>
      </ThemeProvider>
  );
}

export default App;
