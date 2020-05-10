import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { MobileView, isMobile } from 'react-device-detect';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <MobileView>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId}k />
            </MobileView>
            <Menu open={open} setOpen={setOpen} id={menuId} isMobile={isMobile} />
          </FocusLock>
        </div>
        <div>
          <h1>robert xu</h1>
          <img src="https://image.flaticon.com/icons/svg/2813/2813094.svg" alt="burger icon" />
        </div>

      </>
    </ThemeProvider>
  );
}

export default App;
