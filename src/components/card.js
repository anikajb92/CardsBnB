import React from 'react'
import './card.css';

export default function card({ card, checkCard }) {

    const checkHand = () => {
        checkCard(card)
    }

    return (
        <div className='card'>
            <div className='image' onClick={ checkHand }> 
                <img src={card.image} alt="card" />
            </div>
        </div>
    )
}
