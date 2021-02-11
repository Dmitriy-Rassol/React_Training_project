import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main `
    background-color: #cccccc;
    margin-top: 80px;
    margin-left: 380px;
`;


const Section = styled.section `
    padding: 30px 60px;
`;

const H2 = styled.h2 `
    margin-bottom: 30px;
`;

export const Menu = ({setOpenItem}) => {
    return (
        <MenuStyled>
            <Banner/>
            <Section>
                <H2>Бургеры</H2>
                <ListItem 
                    itemList={dbMenu.burger}
                    setOpenItem={setOpenItem}
                />
            </Section>
            <Section>
                <H2>Закуски / Напитки</H2>
                <ListItem 
                    itemList={dbMenu.other}
                    setOpenItem={setOpenItem}
                />
            </Section>
        </MenuStyled>
    )
}