/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
    text-align: center;
`;

const ButtonCount = styled.button `
    background-color: transparent;
`

export function CountItem ({count, setCount, onChange}) {

    return (
        <CountWrapper>
            <span>Колличество</span>
            <div>
                <ButtonCount disabled={count <= 1} onClick={() => setCount(Number(count) - 1)}>-</ButtonCount>
                <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count && count >= 100 ? count = 100 : count} onChange={onChange}/>
                <ButtonCount disabled={count >= 100} onClick={() => setCount(Number(count) + 1)}>+</ButtonCount>
            </div>
        </CountWrapper>
    )

}