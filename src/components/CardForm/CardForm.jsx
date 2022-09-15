import React, { useState } from 'react';
import { Card } from '@blueprintjs/core';
import { Form } from 'react-bootstrap';
import CardContainer from './CardContainer/CardContainer';
import './CardFormStyles.css';

const CardForm = () => {
    const [state, setState] = useState({
        cardNumber: '',
        name: '',
        cvv: '',
        expDdate: '',
    });

    const handleChange = (e) => {
        const regex = new RegExp(e.target.pattern, 'g');
        const value = e.target.value.replace(regex, '');
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    //const val = e.target.validity.valid ? e.target.value : cardNumber;
    return (
        <div>
            <div className='outer'>
                <div className='middle'>
                    <div className='inner'>
                        <CardContainer cardNumber={state.cardNumber} name={state.name} expDate={state.expDate} />
                        <form>
                            <div className='row'>
                                <div className='form-group col-md-6'>
                                    <label className='form-bold-label'>Número de Tarjeta</label>
                                    <input type='text' className='form-control' name='cardNumber' pattern='[^0-9]' placeholder='' onChange={handleChange} value={state.cardNumber} maxLength='16' required />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label className='form-bold-label'>Fecha Vencimiento</label>
                                    <input type='month' className='form-control' id='fechaVencimiento' placeholder='' required />
                                </div>
                            </div>
                            <div className='row mt-4 mb-4'>
                                <div className='form-group col-md-6'>
                                    <label className='form-bold-label'>Nombre Titular</label>
                                    <input type='text' className='form-control' name='name' pattern='[^a-zA-Z\u00C0-\u017F\s]+' placeholder='' onChange={handleChange} value={state.name} maxLength='20' required />
                                </div>
                                <div className='form-group col-md-5'>
                                    <label className='form-bold-label'>CVV</label>
                                    <input type='text' className='form-control' name='cvv' pattern='[^0-9]' placeholder='' onChange={handleChange} value={state.cvv} maxLength='4' required />
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary col-md-4' style={{ borderRadius: '25px' }}>
                                Agregar Tarjeta
                            </button>
                            <button type='submit' className='btn btn-secondary col-md-3' style={{ marginLeft: '10px', borderRadius: '25px' }}>
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
