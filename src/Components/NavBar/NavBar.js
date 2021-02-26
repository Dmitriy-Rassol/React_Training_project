/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
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
    color: white;
`;

const ImgSign = styled.img `
    width: 32px;
    height: 32px;
    margin-bottom: 3px;
`;

const User = styled.div `
    display: flex;
    align-items: center;
    text-align: center;
`;

const LogOut = styled.span `
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 700px;
    margin-right: 30px;
`;

const Figure = styled.figure `
    margin: 0 30px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => {
    return (
        <NavBarStyled>
            <LogoSection>
                <ImgLogo src={logoImg} alt="logo"/>
                <H1>MrDonald's</H1>
            </LogoSection>
            {authentication ?
            <User>
                <Figure>
                    <ImgSign src={signImg} alt={authentication.displayName}/>
                    <figcaption>{authentication.displayName}</figcaption>
                </Figure>
                <LogOut title="выйти" onClick={logOut}>x</LogOut>
            </User> :
            <Button onClick={logIn}>
                <Figure>
                    <ImgSign src={signImg} alt='войти'/>
                    <figcaption>войти</figcaption>
                </Figure>
            </Button>
            }
        </NavBarStyled>
    )
}