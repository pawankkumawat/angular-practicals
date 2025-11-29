// import { inject, Inject, InjectionToken } from "@angular/core";
// import { RANKS, SUITS } from "./model";

// export const CARD_COMPARER_TOKEN = new InjectionToken<ICardComparer>('ICardComparer');
// export const DECK_TOKEN = new InjectionToken<IDeck>('IDeck');
// export const PLAY_TOKEN = new InjectionToken<IPlay>('IPlay');
// export const RANKS_TOKEN = new InjectionToken<string[]>('RANKS_TOKEN');

// export interface ICardComparer {
//     compareCards: (card1: ICard, card2: ICard) => number;
// }

// export class TieComparer implements ICardComparer {
//     RANKS = inject(RANKS_TOKEN);
//     compareCards(card1: ICard, card2: ICard): number {
//         const rankOrder = this.RANKS;
//         const rank1 = rankOrder.indexOf(card1.rank);
//         const rank2 = rankOrder.indexOf(card2.rank);

//         if (rank1 > rank2) {
//             return 1; 
//         } else if (rank1 < rank2) {
//             return -1; 
//         } else {
//             return 0; 
//         }
//     }
// }

// export class WinTieBySuitComparer implements ICardComparer {
//     RANKS = inject(RANKS_TOKEN);
//     compareCards(card1: ICard, card2: ICard): number {

//         const suitOrder = SUITS;
//         const rankOrder = this.RANKS;
//         const rank1 = rankOrder.indexOf(card1.rank);
//         const rank2 = rankOrder.indexOf(card2.rank);
//         const suit1 = suitOrder.indexOf(card1.suit);
//         const suit2 = suitOrder.indexOf(card2.suit);

//         if (rank1 > rank2) {
//             return 1; 
//         } else if (rank1 < rank2) {
//             return -1; 
//         } else {
//             return suit1 - suit2; 
//         }
//     }
// }

// export class WildCardComparer implements ICardComparer {
//     RANKS = inject(RANKS_TOKEN);
//     compareCards(card1: ICard, card2: ICard): number {
//         if(card1 instanceof WildCard && !(card2 instanceof WildCard)) {
//             return 1; // WildCard always wins
//         }else if(!(card1 instanceof WildCard) && card2 instanceof WildCard) {
//             return -1; // WildCard always wins
//         }else{
//             const suitOrder = SUITS;
//             const rankOrder = this.RANKS;
//             const rank1 = rankOrder.indexOf(card1.rank);
//             const rank2 = rankOrder.indexOf(card2.rank);
//             const suit1 = suitOrder.indexOf(card1.suit);
//             const suit2 = suitOrder.indexOf(card2.suit);
    
//             if (rank1 > rank2) {
//                 return 1; 
//             } else if (rank1 < rank2) {
//                 return -1; 
//             } else {
//                 return suit1 - suit2; 
//             }
//         }
//     }
// }

// export interface ICard {
//     suit: string;
//     rank: string;
// }

// export class Card implements ICard {
//     suit: string;
//     rank: string;

//     constructor(suit: string, rank: string) {
//         this.suit = suit;
//         this.rank = rank;
//     }
// }
// export class WildCard implements ICard {
//     card!: ICard;
//     isWildCard: boolean = true; 
//     get suit() {
//         return this.card.suit;
//     };
//     get rank() {
//         return this.card.rank;
//     };

//     constructor(card: ICard) {
//         this.card = card;
//     }
// }



// export interface IDeck {
//     shuffleDeck: () => void;
//     drawCard: () => ICard | null;
//     makeWildCard: () => void;
// }


// export class MultipleDeck implements IDeck {
//     private decks!: IDeck[];
//     constructor(decks: IDeck[]) {
//         this.decks = decks;
//     }

//     makeWildCard(): void {
//         const randomIndex = Math.floor(Math.random() * this.decks.length);
//         const deck = this.decks[randomIndex];
//         deck.makeWildCard(); 
//     }

//     shuffleDeck() {
//         for (const deck of this.decks) {
//             deck.shuffleDeck();
//         }
//     };
//     drawCard(): ICard | null {
//         for (const deck of this.decks) {
//             const card = deck.drawCard();
//             if (card) return card;
//         }
//         return null;
//     }
// }

// export class Deck implements IDeck {
//     cards: ICard[] = [];

//     constructor(cards: ICard[]) {
//         this.cards = cards;
//     }

//     makeWildCard(): void {
//         const randomIndex = Math.floor(Math.random() * this.cards.length);
//         const wildCard = this.cards[randomIndex];
//         this.cards.splice(randomIndex, 1); 
//         const wildCardObj = new WildCard(wildCard); 
//         this.cards.push(wildCardObj); 

//     }

//     shuffleDeck(): void {
//         for (let i = this.cards.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap cards
//         }
//     }

//     drawCard(): ICard | null {
//         if (this.cards.length === 0) {
//             return null; 
//         }
//         return this.cards.pop() || null; 
//     }

//     printDeck(): void {
//         console.log('Deck of Cards:');
//         for (let card of this.cards) {
//             console.log(`${card.rank} of ${card.suit}`);
//         }
//     }
// }


// export class Highcard {
//     deck: IDeck = inject(DECK_TOKEN);
//     cardComparer: ICardComparer = inject(CARD_COMPARER_TOKEN);
//     playStrategy: IPlay = inject(PLAY_TOKEN);
//     play() {
//         this.playStrategy.play(this.deck, this.cardComparer);
//     }
//     shuffleDeck() {
//         this.deck.shuffleDeck();
//     }
// }

// export interface IPlay {
//     play: (deck: IDeck, cardComparer: ICardComparer) => void;
// }

// export class PlayOnTie implements IPlay {
//     play(deck: IDeck, cardComparer: ICardComparer) {
//         let round = 1;

//         while (true) {
//             const player1Card = deck.drawCard();
//             const player2Card = deck.drawCard();

//             if (!player1Card || !player2Card) {
//                 console.log('No cards left to draw!');
//                 return;
//             }

//             console.log(`Round ${round}:`);
//             console.log(`Player 1 drew: ${player1Card.rank} of ${player1Card.suit}`);
//             console.log(`Player 2 drew: ${player2Card.rank} of ${player2Card.suit}`);

//             const result = cardComparer.compareCards(player1Card, player2Card);

//             if (result > 0) {
//                 console.log('Player 1 wins!');
//                 return;
//             } else if (result < 0) {
//                 console.log('Player 2 wins!');
//                 return;
//             } else {
//                 console.log('It\'s a tie!');
//                 console.log('Drawing again...'); 
//             }

//             round++;
//         }
//     }
// }
// export class PlayOnce implements IPlay {

//     play(deck: IDeck, cardComparer: ICardComparer) {
//         const player1Card = deck.drawCard();
//         const player2Card = deck.drawCard();
//         if (!player1Card || !player2Card) {
//             console.log('No cards left to draw!');
//             return;
//         }
//         console.log(`Player 1 drew: ${player1Card.rank} of ${player1Card.suit}`);
//         console.log(`Player 2 drew: ${player2Card.rank} of ${player2Card.suit}`);

//         if (cardComparer.compareCards(player1Card, player2Card) > 0) {
//             console.log('Player 1 wins!');
//         } else if (cardComparer.compareCards(player1Card, player2Card) < 0) {
//             console.log('Player 2 wins!');
//         } else {
//             console.log('It\'s a tie!');
//         }
//     }
// }

// export function createCardsArray(): ICard[] {
//     const RANKS = inject(RANKS_TOKEN);
//     const cardsArr: ICard[] = [];

//     for (let suit of SUITS) {
//         for (let rank of RANKS) {
//             cardsArr.push(new Card(suit, rank));
//         }
//     }
//     return cardsArr;
// }
