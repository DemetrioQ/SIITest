import axios from 'axios';
import React, { useState } from 'react';

const Card = ({ card, handleDelete, count }) => {
    const date = new Date(card.expDate);
    let cardNumbersFormatted = card.number?.match(/.{1,4}/g);
    cardNumbersFormatted = `${cardNumbersFormatted[0].slice(2)}**********${cardNumbersFormatted[cardNumbersFormatted.length - 1]}`;

    return (
        <tr>
            <th scope='row'>{count}</th>
            <td>{cardNumbersFormatted}</td>
            <td>{card.cardHolder}</td>
            <td>{`${('0' + date.getMonth()).slice(-2)}/${date.getFullYear()}`}</td>
            <td>
                <button className='btn btn-danger pt-0 pb-0' onClick={() => handleDelete(card._id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Card;
