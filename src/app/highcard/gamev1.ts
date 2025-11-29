// implementation for a game of HighCard, where two cards are drawn from a 52 card deck, and the highest card wins.

// Please can you refactor this code to add in the ability to:

//  1) Support ties when the face value of the cards are the same.
//  2) Allow for the ties to be resolved as a win by giving the different suits precedence.
//  3) Support for Multiple Decks.
//  4) Support the abilty to never end in a tie, by dealing a further card to each player.
//  5) Make one of the cards in the deck a wild card ( beats all others ).
//  6) Now make the game work for a deck with 20 cards per suit

// Please apply all the best practices you would in what you consider to be "production ready code"



import { inject, InjectionToken } from "@angular/core";
import { SUITS } from "./model";

export const CARD_COMPARER_TOKEN = new InjectionToken<ICardComparer>('ICardComparer');
export const DECK_TOKEN = new InjectionToken<IDeck>('IDeck');
export const RANKS_TOKEN = new InjectionToken<string[]>('RANKS_TOKEN');

export interface ICardComparer {
    compareCards: (card1: ICard, card2: ICard) => {result:number,message:string};
}

export class TieComparer implements ICardComparer {
    RANKS = inject(RANKS_TOKEN);
    compareCards(card1: ICard, card2: ICard): {result:number,message:string} {
        const rankOrder = this.RANKS;
        const rank1 = rankOrder.indexOf(card1.rank);
        const rank2 = rankOrder.indexOf(card2.rank);
        const obj = {
            result:-2,
            message:'TieComparer'
        };
        if (rank1 > rank2) {
            obj.result = 1;
        } else if (rank1 < rank2) {
            obj.result = -1;
        } else {
            obj.result = 0;
        }
        return obj;
    }
}

export class WinTieBySuitComparer implements ICardComparer {
    RANKS = inject(RANKS_TOKEN);
    compareCards(card1: ICard, card2: ICard): {result:number,message:string} {

        const suitOrder = SUITS;
        const rankOrder = this.RANKS;
        const rank1 = rankOrder.indexOf(card1.rank);
        const rank2 = rankOrder.indexOf(card2.rank);
        const suit1 = suitOrder.indexOf(card1.suit);
        const suit2 = suitOrder.indexOf(card2.suit);
        const obj = {
            result:-2,
            message:'WinTieBySuitComparer'
        };
        if (rank1 > rank2) {
            obj.result = 1;
        } else if (rank1 < rank2) {
            obj.result = -1;
        } else {
            obj.result = suit1 - suit2; // Compare suits if ranks are equal
            obj.message = 'It\'s a tie! But comparing suits...'
        }
        return obj;
    }
}

export class WildCardComparer implements ICardComparer {

    compareCards(card1: ICard, card2: ICard): {result:number,message:string} {
        const obj = {
            result:-2,
            message:'WildCardComparer called'
        };
        obj.result = 1;
        return obj;
    }
}



export interface ICard {
    suit: string;
    rank: string;
    compareCard: (card: ICard) => {result:number,message:string};
    printCard:(card:ICard,prefix:string)=>void;
}


export class Card implements ICard {
    suit: string;
    rank: string;
    strategy: ICardComparer;
    constructor(suit: string, rank: string, strategy: ICardComparer) {
        this.suit = suit;
        this.rank = rank;
        this.strategy = strategy;
    }

    compareCard(card: ICard) {
        return this.strategy.compareCards(this, card);
    }

    printCard(card:ICard,prefix:string = 'Card'){
        console.log(`${prefix}: ${card.rank} of ${card.suit}`);
    }

}
export class WildCard implements ICard {
    card!: ICard;
    isWildCard: boolean = true; // Flag to indicate it's a wild card
    strategy: ICardComparer;
    get suit() {
        return this.card.suit;
    };
    get rank() {
        return this.card.rank;
    };

    constructor(card: ICard, strategy: ICardComparer) {
        this.card = card;
        this.strategy = strategy;
    }

    compareCard(card: ICard) {
        return this.strategy.compareCards(this, card);
    }

    printCard(card:ICard,prefix:string = 'Wild Card'){
        console.log(`${prefix}: ${card.rank} of ${card.suit}`);
    }
}



export interface IDeck {
    shuffleDeck: () => void;
    drawCard: () => ICard | null;
    makeWildCard:(strategy:ICardComparer) => void;
}




export class Deck implements IDeck {
    cards: ICard[] = [];

    constructor(cards: ICard[]) {
        this.cards = cards;
    }
    makeWildCard(wildCardComparer: ICardComparer){
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const wildCard = this.cards[randomIndex];
        const wildCardObj = new WildCard(wildCard, wildCardComparer); // Create a WildCard object
        this.cards[randomIndex] = wildCardObj; // Add the WildCard object to the deck
    };
    shuffleDeck(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap cards
        }
    }

    drawCard(): ICard | null {
        if (this.cards.length === 0) {
            return null; // No cards left in the deck
        }
        return this.cards.pop() || null; // Draw a card from the deck
    }

    printDeck(): void {
        console.log('Deck of Cards:');
        for (let card of this.cards) {
            console.log(`${card.rank} of ${card.suit}`);
        }
    }
}

export class MultipleDeck implements IDeck {
    private decks!: IDeck[];
    constructor(decks: IDeck[]) {
        this.decks = decks;
    }

    makeWildCard(strategy: ICardComparer){
        const randomIndex = Math.floor(Math.random() * this.decks.length);
        const deck = this.decks[randomIndex];
        deck.makeWildCard(strategy); // Call makeWildCard on the selected deck
    };

    shuffleDeck() {
        for (const deck of this.decks) {
            deck.shuffleDeck();
        }
    };
    drawCard(): ICard | null {
        for (const deck of this.decks) {
            const card = deck.drawCard();
            if (card) return card;
        }
        return null;
    }
}

export class DeckWithWildCard implements IDeck {
    cards: ICard[] = [];

    constructor(cards: ICard[], deck :IDeck) {
        this.cards = cards;
    }
    makeWildCard(wildCardComparer: ICardComparer){
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const wildCard = this.cards[randomIndex];
        const wildCardObj = new WildCard(wildCard, wildCardComparer); // Create a WildCard object
        this.cards[randomIndex] = wildCardObj; // Add the WildCard object to the deck
    };
    shuffleDeck(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap cards
        }
    }

    drawCard(): ICard | null {
        if (this.cards.length === 0) {
            return null; // No cards left in the deck
        }
        return this.cards.pop() || null; // Draw a card from the deck
    }

    printDeck(): void {
        console.log('Deck of Cards:');
        for (let card of this.cards) {
            console.log(`${card.rank} of ${card.suit}`);
        }
    }
}


export class Highcard {
    deck: IDeck = inject(DECK_TOKEN);
    play() {
        const player1Card = this.deck.drawCard();
        const player2Card = this.deck.drawCard();
        if (!player1Card || !player2Card) {
            console.log('No cards left to draw!');
            return;
        }
        player1Card.printCard(player1Card,`Player 1 drew:`);
        player2Card.printCard(player2Card,`Player 2 drew:`);

        // console.log(`Player 1 drew: ${player1Card.rank} of ${player1Card.suit}`);
        // console.log(`Player 2 drew: ${player2Card.rank} of ${player2Card.suit}`);
        const result = player1Card.compareCard(player2Card);
        console.log(result.message);
        if (result.result > 0) {
            console.log('Player 1 wins!');
        } else if (result.result < 0) {
            console.log('Player 2 wins!');
        } else {
            console.log('It\'s a tie!');
        }
    }
    shuffleDeck() {
        this.deck.shuffleDeck();
    }
}

export function createCardsArray(): ICard[] {
    const RANKS = inject(RANKS_TOKEN);
    const compareBy = inject(CARD_COMPARER_TOKEN);
    const cardsArr: ICard[] = [];

    for (let suit of SUITS) {
        for (let rank of RANKS) {
            cardsArr.push(new Card(suit, rank, compareBy));
        }
    }
    return cardsArr;
}

// // create a cards array with on random card as wild card
// export function createCardsArrayWithWildCard(wildCardComparer:WildCardComparer): ICard[] {
//     const cardsArr= createCardsArray()
//     // make one random card as wild card from cardsArr
//     const randomIndex = Math.floor(Math.random() * cardsArr.length);
//     const wildCard = cardsArr[randomIndex];
//     const wildCardObj = new WildCard(wildCard, wildCardComparer); // Create a WildCard object
//     cardsArr[randomIndex] = wildCardObj; // Add the WildCard object to the deck
//     console.log('WildCard:', wildCardObj);
//     return cardsArr;
// }

