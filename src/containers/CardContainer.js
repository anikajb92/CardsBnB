import React from 'react'

export default function CardContainer({ cards, renderCards }) {

    return (
        <div className="all-cards">
            {renderCards(cards)}
        </div>
    )
}
