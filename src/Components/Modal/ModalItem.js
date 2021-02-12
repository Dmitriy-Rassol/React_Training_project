import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/UseCount';
import {TotalPriceItems} from '../Functions/secondaryFunction';
import {formatCurrency} from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';

const Overlay = styled.div `
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 999;
`;

const Modal = styled.div `
    background-color: #ffffff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div `
    height: 200px;
    width: 100%;
    background-image: ${({img}) => `url(./img/${img})`};
    background-size: cover;
    background-position: center;
`;

const Content = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 250px);
    padding: 30px;
`;

const HeaderContent = styled.div `
    display: flex;
    justify-content: space-between;
    font-family: 'Pacifico', cursive;
    font-size: 30px;
`;

const TotalPriceItem = styled.div `
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

    const counter = useCount();
    const toppings = useToppings(openItem);

    const closeModal = (e) => {
        if(e.target.id === "overlay") {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings
    };

    const addToOrder = () => {
        setOrders([...orders, order])
        console.log('safds');
        setOpenItem(null);
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
            <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>
                            {openItem.name}
                        </div>
                        <div>
                            {formatCurrency(openItem.price)}
                        </div>
                    </HeaderContent>
                    <CountItem {...counter}/>
                    {openItem.toppings &&  <Toppings {...toppings}/>}
                    <TotalPriceItem>
                        <span>
                            Цена:
                        </span>
                        <span>{formatCurrency(TotalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )
}