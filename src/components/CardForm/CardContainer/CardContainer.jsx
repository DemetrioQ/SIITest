import React, { useEffect, useState } from 'react';
import visaImage from '../../../assets/visa.png';
import chipImage from '../../../assets/chip.png';
import cardImage from '../../../assets/cardFront.png';

const CardContainer = ({ cardNumber, name, expDate }) => {
    const [cardNumberFormatted, setCardNumberFormatted] = useState('5375 4411 4540 0954');
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


    return (
        <div className='card-container'>
            <div className='front'>
                <div className='image'>
                    <img src={cardImage} alt='Card' className='card-image' draggable='false' />
                </div>
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
                            <span className='exp-month card-container-text'>{expDate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
