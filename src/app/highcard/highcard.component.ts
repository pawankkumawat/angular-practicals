// import { CommonModule } from '@angular/common';
// import { Component, inject, OnInit } from '@angular/core';
// import { AllMaterialModule } from '../angular-material/all-material-module';
// import { Card, CARD_COMPARER_TOKEN, createCardsArray, Deck, DECK_TOKEN, Highcard, ICardComparer, MultipleDeck, PLAY_TOKEN, PlayOnce, PlayOnTie, RANKS_TOKEN, TieComparer, WildCardComparer, WinTieBySuitComparer, } from './game';
// import { animate, state, style, transition, trigger } from '@angular/animations';
// import { FIVE_RANKS, RANKS, TWENTY_RANKS } from './model';


// @Component({
//   selector: 'app-highcard',
//   imports: [CommonModule, AllMaterialModule],
//   templateUrl: './highcard.component.html',
//   styleUrl: './highcard.component.scss',
//   standalone: true,
//   providers: [
//     { provide: RANKS_TOKEN, useValue: FIVE_RANKS },
//     { provide: CARD_COMPARER_TOKEN, useClass: WildCardComparer },
//     { provide: PLAY_TOKEN, useClass: PlayOnce },
//     {
//       provide: DECK_TOKEN, useFactory: () => {
//         const deck = new Deck(createCardsArray());
//         deck.makeWildCard();
//         return deck;
//       }
//     },
//     // Highcard,
//     // { provide: RANKS_TOKEN, useValue: FIVE_RANKS },
//     // { provide: CARD_COMPARER_TOKEN, useClass: WildCardComparer },
//     // { provide: PLAY_TOKEN, useClass: PlayOnce },
//     // {
//     //   provide: DECK_TOKEN, useFactory: () => {
//     //     const deck1 = new Deck(createCardsArray());
//     //     const deck2 = new Deck(createCardsArray());
//     //     return new MultipleDeck([deck1, deck2]);
//     //   }
//     // },
//     Highcard,
//     // { provide: CARD_COMPARER_TOKEN, useClass: WinTieBySuitComparer },
   
//     // { provide: PLAY_TOKEN, useClass: PlayOnTie },
//   ],
// })
// export default class HighcardComponent implements OnInit {
//   highcard: Highcard = inject(Highcard);
//   ngOnInit() {
//     this.highcard.shuffleDeck();
//   }

//   onPlay() {
//     this.highcard.play();
//   }

// }




import { Component, inject, OnInit } from '@angular/core';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { CARD_COMPARER_TOKEN, createCardsArray, Deck, DECK_TOKEN, Highcard, MultipleDeck, RANKS_TOKEN, TieComparer, WildCardComparer, WinTieBySuitComparer } from './gamev1';
import { FIVE_RANKS } from './model';


@Component({
  selector: 'app-highcard',
  imports: [AllMaterialModule],
  templateUrl: './highcard.component.html',
  styleUrl: './highcard.component.scss',
  standalone: true,
  providers: [
    { provide: RANKS_TOKEN, useValue: FIVE_RANKS },
    { provide: CARD_COMPARER_TOKEN, useClass: WinTieBySuitComparer },
    // {
    //   provide: DECK_TOKEN, useFactory: () => new Deck(createCardsArrayWithWildCard(new WildCardComparer())),
    // },
    // {
    //   provide: DECK_TOKEN, useFactory: () => new Deck(createCardsArray()),
       
    // },
    {
       provide: DECK_TOKEN, useFactory: () => {
         const deck1 = new Deck(createCardsArray());
         const deck2 = new Deck(createCardsArray());
         const deck = new MultipleDeck([deck1, deck2]);
         deck.makeWildCard(new WildCardComparer());
         return deck;
      }
     },
    Highcard,
  ],
})
export default class HighcardComponent implements OnInit {
  highcard: Highcard = inject(Highcard);
  ngOnInit() {
    this.highcard.shuffleDeck();
  }

  onPlay() {
    this.highcard.play();
  }

}
