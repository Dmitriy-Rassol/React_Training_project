/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.svg';
import {TotalPriceItems} from '../Functions/secondaryFunction';
import {formatCurrency} from '../Functions/secondaryFunction';

const TrashButton = styled.button `
    width: 24px;
    height: 24px;
    background-color: transparent;
    border-color: transparent;
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const OrderItemStyled = styled.li `
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;
    cursor: pointer;
`;

const ItemName = styled.span `
    flex-grow: 1;
`;

const ItemCount = styled.span `
    margin-left: 20px;
`;

const ItemPrice = styled.span `
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const Toppings = styled.div `
    color: #9a9a9a;
    font-size: 14px;
`;

export const OrderListItem = ({order, index, deleteItem, setOpenItem}) => {

    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    const refDeleteButton = useRef(null);

    return (
        <OrderItemStyled  onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
            <ItemName>{order.name} {order.choice}</ItemName>
            <ItemCount>{order.count}</ItemCount>
            <ItemPrice>{formatCurrency(TotalPriceItems(order))}</ItemPrice>
            <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}/>
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemStyled>
    )
}