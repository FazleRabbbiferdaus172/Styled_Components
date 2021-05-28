import styled from 'styled-components';
import { defaultTheme,typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";


const BUTTON_MODIFIERS = {
    small: () =>` 
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `, 

    warning: ({ props }) =>`
        background-color: ${props.theme.status.warningColor};
        color: ${props.theme.textColorInverted};

        &:hover, &:focus{
          background-color: ${props.theme.status.warningColorHover};
          outline: 3px solid ${props.theme.status.warningColorHover};
        }
        &:active {
            background-color: ${props.theme.status.warningColorActive}
        }
    `,

    warningSecondary: ()=> `
        background: none;
        border-color: 
    `,

    secondaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
    border: 2px solid ${props.theme.status.warningColor};
    `,

    tertiaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
    `,
}

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Major Mono Display", monospace; 
    transition: background-color 0.2s linear, color 0.2s linear;
    &:hover {
        background-color: ${props => props.theme.primaryHoverColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${props => props.theme.primaryHoverColor};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${props => props.theme.primaryActiveColor};
        border-color: ${props => props.theme.primaryActiveColor};
        color: ${props => props.theme.textColorOnPrimary}; 
    }

`;

const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: white;

    &:disabled {
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    border: 4px solid ${props => props.theme.primaryColor};
    background: none;
    box-sizing: border-box;
    border-radius: 35px;

    &:disabled {
        background: none;
        color: ${props => props.theme.disabled};
        border-color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TartiaryButton = styled(Button)`
    border: none;
    box-sizing: border-box;
    background: none;
    border-radius: 35px;
    color: ${props => props.theme.primaryColor};

    &:disabled {
        background: none;
        color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;