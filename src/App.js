import './App.css';
import YourCards from './containers/YourCards';
import CardContainer from './containers/CardContainer';
import { Component } from 'react';
import Card from './components/card';

const cardUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52'

export default class App extends Component {



state = {
  cards: [],
  yourCards: []
}

componentDidMount() {
  fetch(cardUrl)
    .then(response => response.json())
    .then(data => 
      this.setState(
        { cards: data.cards }
      )
    )
}

renderYourCards = (cards) => cards.map(card => {
  return <Card card={ card } checkCard={ this.checkCard } />
})

checkCard = (clickedCard) => {
  if (this.state.yourCards.includes(clickedCard)){
    this.removeCardFromHand(clickedCard)
    this.addCardToDeck(clickedCard)
  }
  else {
    this.addCardToHand(clickedCard)
    this.removeCardFromDeck(clickedCard)
  }
}


addCardToHand = (clickedCard) => {

  const findMatch = this.state.yourCards.find(
    (yourCard) => yourCard === clickedCard
  );

  if (!findMatch){
    this.setState({
      yourCards: [...this.state.yourCards, clickedCard]
    })
  }
}

addCardToDeck = (clickedCard) => {

  const findMatch = this.state.cards.find(
    (card) => card === clickedCard
  );

  if (!findMatch){
    this.setState({
      cards: [...this.state.cards, clickedCard]
    })
  }
}


removeCardFromHand = (clickedCard) => {

  const newHand = this.state.yourCards.filter(
    (yourCard) => clickedCard !== yourCard
  );

  this.setState({
    yourCards: newHand
  })
}

removeCardFromDeck = (clickedCard) => {

  const newDeck = this.state.cards.filter(
    (card) => clickedCard !== card
  );

  this.setState({
    cards: newDeck
  })
}

  render() {
    return (
      <div className="App">
        <YourCards  cards={ this.state.yourCards } renderCards={ this.renderYourCards } />
        <CardContainer cards={ this.state.cards } renderCards={ this.renderYourCards } />
      </div>
    )
  }
}
