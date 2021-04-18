import React from 'react'

export default function YourCards({ cards, renderCards }) {

    return (
        <div className="your-cards">
           {renderCards(cards)}
        </div>
    )
}
