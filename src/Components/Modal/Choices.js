/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ChoicesWrap = styled.div `
    column-count: 2;
    margin: 0 auto;
    column-gap: 5px;
    max-width: 500px;
`;

const ChoicesLabel = styled.label `
    cursor: pointer;
    display: block;
`;

const ChoicesRadio = styled.input `
    cursor: pointer;
    margin-right: 5px;
`;


export function Choices({openItem, choice, changeChoices}) {
    return (
        <>
            <h3>Сделайте выбор</h3>
            <ChoicesWrap>
                { openItem.choices.map((item, i) =>(
                    <ChoicesLabel key={i}>
                        <ChoicesRadio
                            type="radio"
                            name="choices"
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices}
                        />
                        {item}
                    </ChoicesLabel>
                ))}
            </ChoicesWrap>
        </>
    )
}