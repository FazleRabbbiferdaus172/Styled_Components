import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import PrimaryButton,{SecondaryButton, TartiaryButton}  from './components/Button';
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(true);

    return (    
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button style={{ margin:"0 16px 24px", padding: "8px", background: "none" }} onClick={() => setUseDarkTheme(true)}>Dark Theme</button>
            <button style={{ margin:"0 16px 24px", padding: "8px", background: "none" }} onClick={() => setUseDarkTheme(false)}>Default Theme</button>
            <div style={{
                background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: 'center',
                justifyContent: "space-around"
            }}>
            <PrimaryButton >Primary Button</PrimaryButton>
            <SecondaryButton >Secondary Button</SecondaryButton>
            <TartiaryButton >Tartiary Button</TartiaryButton>
            <GlobalStyle/>
            </div>
        </ThemeProvider>
        );

    };

ReactDOM.render(<App/>, document.getElementById('root'))