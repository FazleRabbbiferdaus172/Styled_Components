import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton,{SecondaryButton, TartiaryButton}  from './components/Button';
import { GlobalStyle } from "./utils";
const App = () => (
    <div>
    <PrimaryButton>Primary Button</PrimaryButton>
    <SecondaryButton>Secondary Button</SecondaryButton>
    <TartiaryButton>Tartiary Button</TartiaryButton>
    <GlobalStyle/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'))