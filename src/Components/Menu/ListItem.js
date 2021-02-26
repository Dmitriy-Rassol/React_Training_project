/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import {formatCurrency} from '../Functions/secondaryFunction';

const List = styled.ul `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Item = styled.li `
    position: relative;
    z-index: 1;
    width: 400px;
    height: 155px;
    margin-bottom: 30px;
    padding: 6px 14px;
    cursor: pointer;
    background-image: ${({img}) => `url(./img/${img})`};
    background-position: center;
    background-size: cover;
    font-family: Roboto;
    font-size: 30px;
    line-height: 35px;
    color: #ffffff;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000000;
        opacity: 50%;
        z-index: -1;
    }
    &:hover {
            box-shadow: inset 0 0 60px 10px rgba(0, 0, 0, 1);
            &:before {
                opacity: 0;
            }
    }
`;

export const ListItem = ({itemList, setOpenItem}) => {
    return (
        <React.Fragment>
            <List>
                {itemList.map(item => (
                    <Item
                        key={item.id}
                        img={item.img}
                        onClick={() => setOpenItem(item)}
                        >
                        <p>{item.name}</p>
                        <p>{formatCurrency(item.price)}</p>
                    </Item>
                ))}
            </List>
        </React.Fragment>
    )
}