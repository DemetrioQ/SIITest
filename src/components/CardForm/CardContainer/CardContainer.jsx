import React, { useEffect, useState } from 'react';

import cardImage from '../../../assets/cardFront.png';

const CardContainer = ({ cardNumber, name, expDate, cvv, isRotated }) => {
    const [cardNumberFormatted, setCardNumberFormatted] = useState('');
    const [expDateFormatted, setExpDateFormatted] = useState('');

    useEffect(() => {
        if (!cardNumber) {
            setCardNumberFormatted('');
            return;
        }

        const formatted = cardNumber
            ?.match(/.{1,4}/g)
            ?.join(' ')
            .toString();

        setCardNumberFormatted(formatted);

        return;
    }, [cardNumber]);

    useEffect(() => {
        if (!expDate) {
            setCardNumberFormatted('');
            return;
        }

        let formatted = expDate?.split('-');
        formatted = `${formatted[1]}/${formatted[0].slice(-2)}`;

        setExpDateFormatted(formatted);

        return;
    }, [expDate]);

    return (
        <div className={`card-container ${isRotated ? 'rotate' : ''}`}>
            <div className='front'>
                <img src={cardImage} alt='Card' className='card-image' draggable='false' />
                <div className='card-number-box card-container-text'>
                    <span className='card-container-text'>{cardNumberFormatted}</span>
                </div>
                <div className='flexbox'>
                    <div className='box'>
                        <div className='card-holder-name'>
                            <span className='card-container-text'>{name.toUpperCase()}</span>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='expiration'>
                            <span className='ard-container-text'>{expDateFormatted}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='back'>
                <div className='stripe'></div>
                <div className='box'>
                    <div className='cvv-box'></div>
                    <span className='card-container-text'>{cvv}</span>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
