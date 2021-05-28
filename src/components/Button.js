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

    warning: () =>`
        background-color: ${defaultTheme.status.warningColor};
        color: ${defaultTheme.textColorInverted};

        &:hover, &:focus{
          background-color: ${defaultTheme.status.warningColorHover};
          outline: 3px solid ${defaultTheme.status.warningColorHover};
        }
        &:active {
            background-color: ${defaultTheme.status.warningColorActive}
        }
    `,

    warningSecondary: ()=> `
        background: none;
        border-color: 
    `,

    secondaryButtonWarning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
    border: 2px solid ${defaultTheme.status.warningColor};
    `,

    tertiaryButtonWarning: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
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
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${defaultTheme.primaryHoverColor};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${defaultTheme.primaryActiveColor};
        border-color: ${defaultTheme.primaryActiveColor};
        color: ${defaultTheme.textColorOnPrimary}; 
    }

`;

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    border: 4px solid ${defaultTheme.primaryColor};
    background: none;
    box-sizing: border-box;
    border-radius: 35px;

    &:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        border-color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TartiaryButton = styled(Button)`
    border: none;
    box-sizing: border-box;
    background: none;
    border-radius: 35px;
    color: ${defaultTheme.primaryColor};

    &:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;