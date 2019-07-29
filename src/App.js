import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
    return React.createElement('div', { id: 'important' }, [
        React.createElement('h1', {}, 'Adopt Me!'),
        React.createElement(Pet, {
            name: 'Lux',
            animal: 'Dog',
            breed: 'German Shepherd'
        }),
        React.createElement(Pet, {
            name: 'Pepper',
            animal: 'Bird',
            breed: 'Cockatiel'
        }),
        React.createElement(Pet, {
            name: 'Doink',
            animal: 'Cat',
            breed: 'Stray/Mixed'
        })
    ]);
};

render(React.createElement(App), document.getElementById('root'));
