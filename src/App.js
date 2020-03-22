import React from 'react';
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { GetStarted }    from "./GetStarted";

function App() {
  return (
    <HashRouter>
      <ThemeProvider withToastContainer>
        <GetStarted />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
