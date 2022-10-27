import React from 'react';

const SelectedCard = ({ java }) => {
    const { name, price } = java;
    return (
        <div className='flex justify-between p-4'>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    );
};

export default SelectedCard;