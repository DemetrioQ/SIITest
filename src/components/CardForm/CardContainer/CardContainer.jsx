import React from 'react';
import visaImage from '../../../assets/visa.png';
import chipImage from '../../../assets/chip.png';
import cardImage from '../../../assets/cardFront.png';

const CardContainer = () => {
    let cardNumber = '5375441145400954'.match(/.{1,4}/g);
    let cardNumberFormnatted = cardNumber.join(' ').toString();
    return (
        <div className='card-container'>
            <div className='front'>
                <div className='image'>
                    <img src={cardImage} alt='Card' className='card-image' />
                </div>
                <div className='card-number-box'>s</div>
                <div className='flexbox'>
                    <div className='box'>
                        <div className='card-holder-name'>full name</div>
                    </div>
                    <div className='box'>
                        <div className='expiration'>
                            <span className='exp-month'>mm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
