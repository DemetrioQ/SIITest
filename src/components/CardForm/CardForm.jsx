import React from 'react';
import { Card } from '@blueprintjs/core';
import { Form } from 'react-bootstrap';
import CardContainer from './CardContainer/CardContainer';
import './CardFormStyles.css';

const CardForm = () => {
    return (
        <div>
            <div className='outer'>
                <div className='middle'>
                    <div className='inner'>
                        <CardContainer />
                        <form>
                            <div className='row'>
                                <div className='form-group col-md-6'>
                                    <label className='form-bold-label'>Número de Tarjeta</label>
                                    <input type='email' className='form-control' id='numeroTarjeta' placeholder='' />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label className='form-bold-label'>Fecha Vencimiento</label>
                                    <input type='month' className='form-control' id='fechaVencimiento' placeholder='' />
                                </div>
                            </div>
                            <div className='row mt-4 mb-4'>
                                <div className='form-group col-md-6'>
                                    <label className='form-bold-label'>Nombre Titular</label>
                                    <input type='text' className='form-control' id='nombreTitular' placeholder='' />
                                </div>
                                <div className='form-group col-md-5'>
                                    <label className='form-bold-label'>CVV</label>
                                    <input type='text' className='form-control' id='inputPassword4' placeholder='' />
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
