import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton,{SecondaryButton, TartiaryButton}  from './components/Button';

const App = () => (
    <div>
    <PrimaryButton>Primary Button</PrimaryButton>
    <SecondaryButton>Secondary Button</SecondaryButton>
    <TartiaryButton>Tartiary Button</TartiaryButton>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'))