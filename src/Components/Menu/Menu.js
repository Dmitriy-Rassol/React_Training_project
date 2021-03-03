/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main `
    background-color: #cccccc;
    margin-top: 80px;
    margin-left: 380px;
    min-height: 100vh;
`;


const Section = styled.section `
    padding: 30px 60px;
`;

const H2 = styled.h2 `
    margin-bottom: 30px;
`;

export const Menu = () => {

    const res = useFetch();

    const dbMenu = res.response;

    return (
        <MenuStyled>
            <Banner/>
            {dbMenu ?
            <>
            <Section>
                <H2>Бургеры</H2>
                <ListItem
                    itemList={dbMenu.burger}
                />
            </Section>
            <Section>
                <H2>Закуски / Напитки</H2>
                <ListItem
                    itemList={dbMenu.other}
                />
            </Section>
            </> : res.error ?
            <div>Oops! We have a problem, we are already solving it.</div> :
            <div>Loading...</div>}
        </MenuStyled>
    )
}