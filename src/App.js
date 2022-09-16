import CardForm from './components/CardForm/CardForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [cards, setCards] = useState([]);
    const fetchCards = async () => {
        const { data } = await axios.get('http://localhost:4000/cards/all');
        setCards(data);
    };
    useEffect(() => {
        fetchCards();
    }, []);
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Cards cards={cards} fetchCards={fetchCards} />} />
                <Route path='/add' exact element={<CardForm fetchCards={fetchCards} />} />
            </Routes>
        </Router>
    );
}

export default App;
