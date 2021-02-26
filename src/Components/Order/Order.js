/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { TotalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { projection} from '../Functions/secondaryFunction';

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

const rulesData = {
    name:['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item => item ? item : 'no choices']
}


export const Order = ({orders, setOrders, setOpenItem, authentication, logIn, database}) => {

    const sendOreder = () => {
        const newOrder = orders.map(projection(rulesData));
        database.ref('orders').push().set({
            nameClient: authentication.displayName,
            email: authentication.email,
            order: newOrder
        });
        setOrders([]);
    }
    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

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
                    {orders.map((order, index) => <OrderListItem deleteItem={deleteItem} order={order} key={index} index={index} setOpenItem={setOpenItem}/>)}
                </OrderList> :
                <EmptyList>Корзина пуста</EmptyList>
                }
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout disabled={orders.length < 1} onClick={() => {
                if (authentication) {
                    sendOreder();
                } else {
                    logIn();
                }
            }}>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}