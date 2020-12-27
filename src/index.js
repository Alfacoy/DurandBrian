/*REACT*/
import React from 'react';
import ReactDOM from 'react-dom';
/*STYLES*/
import './styles/index.css';
/*COMPONENTS*/
import Container from './components/Container/index.js';
import Home from './components/Home/index.js';

ReactDOM.render(
    <Container>
        <Home />
    </Container> ,
    document.getElementById('groot')
);