import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';


const NavBarStyled = styled.header `
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    padding: 0 20px;
    background: #299B01;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
`;

const LogoSection = styled.section `
    display: flex;
    align-items: center;
`;

const H1 = styled.h1 `
    font-family: Pacifico;
    font-size: 24px;
    line-height: 42px;
    margin-left: 15px;
`;

const ImgLogo = styled.img `
    width: 50px;
`;

const Button = styled.button `
    border: transparent;
    background-color: transparent;
    outline: transparent;
    display: flex;
    justify-content: center;
    width: 50px;
    flex-wrap: wrap;
    align-self: center;
    cursor: pointer;
`;

const ImgSign = styled.img `
    width: 32px;
    height: 32px;
    margin-bottom: 3px;
`;

const H2 = styled.h2 `
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
`;



export const NavBar = () => {
    return (
        <NavBarStyled>
            <LogoSection>
                <ImgLogo src={logoImg} alt="logo"/>
                <H1>MrDonald's</H1>
            </LogoSection>
            <Button>
                <ImgSign src={signImg} alt='sign'/>
                <H2>войти</H2>
            </Button>
        </NavBarStyled>
    )
}