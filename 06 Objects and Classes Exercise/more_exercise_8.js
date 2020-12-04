let result = (function(){
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['♠', '♥', '♦', '♣'];
    let Suits = {
        SPADES: '♠',
	HEARTS: '♥',
	DIAMONDS: '♦',
	CLUBS: '♣',
    };

    class Card {
	constructor(face, suit) {
	    if (!validFaces.includes(face)) {
		throw new Error('Invalid Card Face!');
	    }
	    if (!validSuits.includes(suit)) {
		throw new Error('Invalid Card Suit!');
	    }
  	    this.face = face;
	    this.suit = suit;
	}
    }

    return {
	Suits: Suits,
	Card: Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
card.face = "A";
card.suit = Suits.DIAMONDS;
console.log(card);

let card2 = new Card("1",Suits.DIAMONDS);
console.log(card2);