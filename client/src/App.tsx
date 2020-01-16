import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  return (
      <ThemeProvider>
          <ColorModeProvider>
              <CSSReset />
              <Header/>
              <Content/>
          </ColorModeProvider>
      </ThemeProvider>
  );
}

export default App;
