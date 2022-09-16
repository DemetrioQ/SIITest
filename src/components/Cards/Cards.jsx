import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card/Card';
import './CardsStyle.css';

const Cards = ({ cards, fetchCards }) => {
    let navigate = useNavigate();
    const addCard = () => {
        navigate('/add');
    };

    const handleDelete = async (_id) => {
        try {
            await axios.delete('http://localhost:4000/cards/delete', { data: { _id } });
            fetchCards();
        } catch (err) {
            console.log(err);
        }
    };
    let count = 0;

    return (
        <div>
            <div className='header'>
                <h1 className='d-flex justify-content-center background'>Cards</h1>
            </div>
            <button className='btn btn-primary position-absolute top-1 end-0' onClick={addCard}>
                Add Card
            </button>
            <table className='table table-striped table-responsive'>
                <thead className='table-dark'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Card Number</th>
                        <th scope='col'>Card Holder</th>
                        <th scope='col'>Expiration Date</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((card) => {
                        count += 1;
                        return <Card key={card._id} card={card} handleDelete={handleDelete} count={count} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Cards;
