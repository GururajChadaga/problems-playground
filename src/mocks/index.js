export const nestedArr = [
  1,
  2,
  3,
  [40, 50],
  6,
  7,
  [80, 90, [100, 200, 300, [4000, 5000, ['item1', 'item2']]]],
];

export const nestedObjectUser = {
  name: 'John',
  address: {
    personal: {
      city: 'Blore',
      area: 'bsk',
    },
    office: {
      city: 'Blore',
      details: {
        name: 'Google Inc',
        landmark: 'gogole',
      },
    },
  },
};

export const animals = [
  {
    id: 1,
    type: 'cat',
    pets: [
      { id: 1, name: 'Toby', breed: 'Tabby' },
      { id: 2, name: 'Golden Girl', breed: 'Russian Blue' },
    ],
  },
  {
    id: 2,
    type: 'dog',
    pets: [{ id: 3, name: 'Goldilocks', breed: 'Poodle' }],
  },
  {
    id: 3,
    type: 'fish',
    pets: [{ id: 4, name: 'Marigold', breed: 'Goldfish' }],
  },
  {
    id: 5,
    type: 'rabbit',
    pets: [
      { id: 6, name: 'Bugs', breed: 'wild' },
      {
        id: 7,
        name: {
          firstName: 'Mr',
          lastName: 'Gold',
        },
        breed: 'wild',
      },
      {
        id: 7,
        names: [
          {
            firstName: 'Mr',
            lastName: 'Abarama',
          },
          {
            firstName: 'Mr',
            lastName: 'Golden',
          },
        ],
        breed: 'wild',
      },
    ],
  },
];
