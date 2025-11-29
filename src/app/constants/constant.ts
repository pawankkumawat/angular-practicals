import { BranchingData, State, Stats } from '../models/models';
export const RAPID_API_KEY = "56b4e73c58msh5121ea96e2354fep1ecbabjsn23ac916853ed"
export const RAPID_API_HOST = "imdb8.p.rapidapi.com"

export const Statistics: Stats[] = [
  {
    marketRate: '₹12',
    name: 'HDFC',
    number: 112,
    weight: '5%',
    value: '₹1,536',
  },
  {
    marketRate: '₹10',
    name: 'SBI',
    number: 13,
    weight: '2%',
    value: '₹150',
  },
  {
    name: 'Yes Bank',
    number: 123,
    marketRate: '₹120',
    weight: '3%',
    value: '₹1,200',
  },
  {
    name: 'BOB',
    number: 321,
    marketRate: '₹145',
    weight: '10%',
    value: '₹12,000',
  },
  {
    name: 'ICICI',
    number: 400,
    marketRate: '₹145',
    weight: '10%',
    value: '₹13,000',
  },
];

export const Routes = [
  {
    text: 'Component Design',
    name: 'Component Design',
    // value: 'bad/1',
    children: [
      {
        name: 'Bad Component Design',
        text: 'Bad Component Design',
        value: 'bad/1'
      },
      {
        name: 'Better Component Design',
        text: 'Better Component Design',
        value: 'good/1'
      },]
  },
  {
    name: 'Reusable Footer',
    text: 'Reusable Footer',
    children: [
      {
        name: 'Customer Footer',
        text: 'Non-reusable Footer',
        value: 'custfoot'
      },
      {
        name: 'Vehicle Footer',
        text: 'Reusable Footer',
        value: 'vehclefoot'
      },]
  },
  {
    name: 'Design Patterns',
    text: 'Design Patterns',
    children: [
      {
        text: 'Strategy Pattern',
        name: 'Strategy Pattern',
        value: 'strategy',
      },
      {
        text: 'Bridge Pattern',
        name: 'Bridge Pattern',
        value: 'bridge',
      },
      {
        text: 'Observer Pattern',
        name: 'Observer Pattern',
        value: 'observer',
}
    ]
  },
  {
    text: 'Signals',
    name: 'Signals',
    value: 'signals',
  },
  {
    text: 'Orders',
    name: 'orders',
    value: 'orders',
  },
  {
    text: 'Highcard',
    name: 'Highcard',
    value: 'highcard',
  },

  {
    text: 'HigherOrder Operators',
    name: 'HigherOrder Operators',
    value: 'higherops',
  },
  {
    text: 'Unsub Observables',
    name: 'Unsub Observables',
    value: 'unsub',
  },
  {
    text: 'Unsub Observables Angular 16',
    name: 'Unsub Observables Angular 16',
    value: 'unsub2',
  },
  {
    text: 'Refactoring',
    name: 'Refactoring',
    value: 'branching',
  },
  {
    text: 'Refactoring -2',
    name: 'Refactoring -2',
    value: 'branching2',
  },
  {
    text: 'Lazy',
    name: 'Lazy',
    value: 'lazy',
  },
  {
    text: 'Best Practices Subject',
    name: 'Best Practices Subject',
    value: 'bestps',
  },
  {
    text: 'Callback Hell',
    name: 'Callback Hell',
    value: 'cbh',
  },

  {
    text: 'Search Type Ahead',
    name: 'Search Type Ahead',
    value: 'sta',
  },
  {
    text: 'Country Master',
    name: 'Country Master',
    value: 'country/2',
  },


];

export const BranchingDataObj: BranchingData[] = [
  {
    id: 1,
    key: 'myKey',
    value: 'myValue',
  },
  {
    id: 1,
    key: 'myAnotherKey',
    value: 'myAnotherValue',
  },
  {
    id: 1,
    key: 'key1',
    value: 'value1',
  },
  {
    id: 1,
    key: 'key2',
    value: 'value2',
  },
];


export interface District {
  distId: number;
  text: string
}

export const DISTRICTS: District[] =
  [
    { "distId": 1, text: "Anantapur" },
    { "distId": 1, text: "Chittoor" },
    { "distId": 1, text: "East Godavari" },
    { "distId": 1, text: "Guntur" },
    { "distId": 1, text: "Krishna" },
    { "distId": 1, text: "Kurnool" },
    { "distId": 1, text: "Nellore" },
    { "distId": 1, text: "Prakasam" },
    { "distId": 1, text: "Srikakulam" },
    { "distId": 1, text: "Visakhapatnam" },
    { "distId": 1, text: "Vizianagaram" },
    { "distId": 1, text: "West Godavari" },
    { "distId": 1, text: "YSR Kadapa" }
  ];

export const STATES: State[] = [
  { id: 1, text: 'Andhra Pradesh' },
  { id: 2, text: 'Arunachal Pradesh' },
  { id: 3, text: 'Assam' },
  { id: 4, text: 'Bihar' },
  { id: 5, text: 'Chhattisgarh' },
  { id: 6, text: 'Goa' },
  { id: 7, text: 'Gujarat' },
  { id: 8, text: 'Haryana' },
  { id: 9, text: 'Himachal Pradesh' },
  { id: 10, text: 'Jharkhand' },
  { id: 11, text: 'Karnataka' },
  { id: 12, text: 'Kerala' },
  { id: 13, text: 'Madhya Pradesh' },
  { id: 14, text: 'Maharashtra' },
  { id: 15, text: 'Manipur' },
  { id: 16, text: 'Meghalaya' },
  { id: 17, text: 'Mizoram' },
  { id: 18, text: 'Nagaland' },
  { id: 19, text: 'Odisha' },
  { id: 20, text: 'Punjab' },
  { id: 21, text: 'Rajasthan' },
  { id: 22, text: 'Sikkim' },
  { id: 23, text: 'Tamil Nadu' },
  { id: 24, text: 'Telangana' },
  { id: 25, text: 'Tripura' },
  { id: 26, text: 'Uttarakhand' },
  { id: 27, text: 'Uttar Pradesh' },
  { id: 28, text: 'West Bengal' },
]
