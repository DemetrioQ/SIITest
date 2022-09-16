import React, { useState } from 'react';
import CardContainer from './CardContainer/CardContainer';
import './CardFormStyles.css';

const initialState = {
    cardNumber: '',
    name: '',
    cvv: '',
    expDate: '',
    isRotated: false,
};

const maxExpDate = `${new Date().getFullYear() + 5}-${('0' + (new Date().getMonth() + 1)).slice(-2)}`;

const CardForm = () => {
    const [state, setState] = useState(initialState);
    const [cardError, setCardError] = useState({
        error: false,
        message: 'Tarjeta invalida. Numeros insuficientes',
    });
    const [cvvError, setCvvError] = useState({
        error: false,
        message: 'CVV invalido. Numeros insuficientes',
    });

    const onRotate = () => {
        setState({
            ...state,
            isRotated: !state.isRotated,
        });
    };

    const handleChange = (e) => {
        let value = e.target.value;
        if (e.target.pattern) {
            let pattern = e.target.pattern.split('[');
            pattern[0] = '[^';
            pattern = pattern.join('');
            const regex = new RegExp(pattern, 'g');
            value = e.target.value.replace(regex, '');
        }
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const handleCancel = () => {
        setState(initialState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCardError({ ...cardError, error: false });
        setCvvError({ ...cardError, error: false });

        if (state.cardNumber.length !== 16) {
            setCardError({ ...cardError, error: true });
        }

        if (state.cvv.length !== 3) {
            setCvvError({ ...cvvError, error: true });
        }
    };
    return (
        <div>
            <div className='outer'>
                <div className='middle'>
                    <div className='inner'>
                        <CardContainer cardNumber={state.cardNumber} name={state.name} expDate={state.expDate} cvv={state.cvv} isRotated={state.isRotated} />
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='form-group col-md-6'>
                                    <label className='form-bold-label'>Número de Tarjeta</label>
                                    <input type='text' className='form-control' name='cardNumber' pattern='[0-9]*' placeholder='' onChange={handleChange} value={state.cardNumber} maxLength='16' required />
                                    <small className={`text-danger ${cardError.error ? 'shown' : 'hidden'}`}>{cardError.message}</small>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label className='form-bold-label'>Fecha Vencimiento</label>
                                    <input type='month' className='form-control' onKeyDown={(e) => e.preventDefault()} name='expDate' onChange={handleChange} value={state.expDate} placeholder='' max={maxExpDate} required />
                                </div>
                            </div>
                            <div className='row mt-4 mb-4'>
                                <div className='form-group col-md-6'>
                                    <label className='form-bold-label'>Nombre Titular</label>
                                    <input type='text' className='form-control' name='name' pattern='[a-zA-Z\u00C0-\u017F\s]+' placeholder='' onChange={handleChange} value={state.name} maxLength='20' required />
                                </div>
                                <div className='form-group col-md-5'>
                                    <label className='form-bold-label'>CVV</label>
                                    <input type='text' className='form-control' name='cvv' pattern='[0-9]*' placeholder='' onChange={handleChange} onFocus={onRotate} onBlur={onRotate} value={state.cvv} maxLength='3' required />
                                    <small className={`text-danger ${cvvError.error ? 'shown' : 'hidden'}`}>{cvvError.message}</small>
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary col-md-4' style={{ borderRadius: '25px' }}>
                                Agregar Tarjeta
                            </button>
                            <button type='button' className='btn btn-secondary col-md-3' style={{ marginLeft: '10px', borderRadius: '25px' }} onClick={handleCancel}>
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardForm;
