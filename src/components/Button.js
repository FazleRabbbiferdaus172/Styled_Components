import styled from 'styled-components';
import { defaultTheme,typeScale } from "../utils";

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Major Mono Display", monospace; 
`;

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;
`;

export const SecondaryButton = styled(Button)`
    border: 4px solid ${defaultTheme.primaryColor};
    background: none;
    box-sizing: border-box;
    border-radius: 35px;
`

export const TartiaryButton = styled(Button)`
    border: none;
    box-sizing: border-box;
    background: none;
    border-radius: 35px;
    color: ${defaultTheme.primaryColor};
`

export default PrimaryButton;