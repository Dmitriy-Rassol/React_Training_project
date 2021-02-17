/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { TotalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section `
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background-color: #ffffff;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .2);
    padding: 20px;
`;

const OrderTitle = styled.h2 `
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div `
    flex-grow: 1;
`;

const OrderList = styled.ul `

`;

const Total = styled.div `
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span `
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.div `
    text-align: center;
`;


export const Order = ({orders}) => {

    const total = orders.reduce((result, order) =>
    TotalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order) =>
    order.count + result, 0);

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                { orders.length ?
                <OrderList>
                    {orders.map((order, index) => <OrderListItem order={order} key={index}/>)}
                </OrderList> :
                <EmptyList>Корзина пуста</EmptyList>
                }
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout>Добавить</ButtonCheckout>
        </OrderStyled>
    )
}