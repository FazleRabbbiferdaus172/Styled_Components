import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton,{SecondaryButton, TartiaryButton}  from './components/Button';
import { GlobalStyle } from "./utils";
const App = () => (
    <div>
    <PrimaryButton disabled>Primary Button</PrimaryButton>
    <SecondaryButton disabled>Secondary Button</SecondaryButton>
    <TartiaryButton disabled>Tartiary Button</TartiaryButton>
    <GlobalStyle/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'))