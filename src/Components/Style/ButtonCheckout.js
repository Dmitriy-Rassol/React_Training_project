import styled from 'styled-components';

export const ButtonCheckout = styled.button `
    display: block;
    margin: 0 auto;
    font-family: Roboto;
    font-size: 21px;
    color: #FFFFFF;
    width: 250px;
    height: 65px;
    background-color: #299B01;
    border-color: transparent;
    outline: transparent;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: #FFFFFF;
        color: #299B01;
        border-color: #299B01;
    }
`;