import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  room: [],
  'user': {},
  'playing': {},
  'search': [],
  'mylist': [],
  'trends': [
    {
      'id': 1,
      'Full_Name': 'Bethany Broke',
      'Country': 'Ireland',
      'Street_Address': '77394 Oak Valley Parkway',
      'Phone': '780-480-6748',
      'City': 'Greenhills',
      'Money': '$2.59',
      'Currency': 'Euro',
      'image' : 'https://a0.muscache.com/im/pictures/2999301/f8a89886_original.jpg?aki_policy=xx_large',
      'Description': 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.'
    },
    {
      'id': 2,
      'Full_Name': 'Efren Flanner',
      'Country': 'Nigeria',
      'Street_Address': '5248 Oakridge Court',
      'Phone': '749-886-8773',
      'City': 'Bununu Dass',
      'Money': '$9.99',
      'Currency': 'Naira',
      'image':'https://a0.muscache.com/im/pictures/16186201/7575dc92_original.jpg?aki_policy=xx_large',
      'Description': 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.'
    },
    {
      'id': 3,
      'Full_Name': 'Nicky Sadler',
      'Country': 'Poland',
      'Street_Address': '197 Roxbury Center',
      'Phone': '961-289-3770',
      'City': 'Łodygowice',
      'Money': '$4.66',
      'Currency': 'Zloty',
      'image': 'https://a0.muscache.com/im/pictures/3898743/a70e3172_original.jpg?aki_policy=xx_large',
      'Description': 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'
    },
    {
      'id': 4,
      'Full_Name': 'Marianna Di Francesco',
      'Country': 'Indonesia',
      'Street_Address': '48528 Pierstorff Court',
      'Phone': '931-797-7539',
      'City': 'Adil Makmur',
      'Money': '$0.18',
      'Currency': 'Rupiah',
      'image': 'https://a0.muscache.com/im/pictures/881d76c6-4de6-4808-9f0b-36462b6c48a2.jpg?aki_policy=xx_large',
      'Description': 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.'
    },
    {
      'id': 5,
      'Full_Name': 'Arabela Blaydes',
      'Country': 'Indonesia',
      'Street_Address': '1857 Kedzie Point',
      'Phone': '170-470-2675',
      'City': 'Bakung',
      'Money': '$8.34',
      'Currency': 'Rupiah',
      'image': 'https://a0.muscache.com/im/pictures/39408019/48808569_original.jpg?aki_policy=xx_large',
      'Description': 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.'
    },
    {
      'id': 6,
      'Full_Name': 'Clarine Skeldinge',
      'Country': 'China',
      'Street_Address': '1782 Scoville Plaza',
      'Phone': '975-789-1076',
      'City': 'Jieheshi',
      'Money': '$8.72',
      'Currency': 'Yuan Renminbi',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.'
    },
    {
      'id': 7,
      'Full_Name': 'Rodrigo Hancill',
      'Country': 'Ethiopia',
      'Street_Address': '5656 Arrowood Avenue',
      'Phone': '667-733-8997',
      'City': 'Lobuni',
      'Money': '$7.67',
      'Currency': 'Birr',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'In congue. Etiam justo. Etiam pretium iaculis justo.'
    },
    {
      'id': 8,
      'Full_Name': 'Virgina Cluely',
      'Country': 'Philippines',
      'Street_Address': '25 American Hill',
      'Phone': '328-644-0322',
      'City': 'Salimbalan',
      'Money': '$4.71',
      'Currency': 'Peso',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      'id': 9,
      'Full_Name': 'Kali Fattorini',
      'Country': 'Thailand',
      'Street_Address': '016 Rigney Place',
      'Phone': '284-555-7240',
      'City': 'Salaya',
      'Money': '$4.33',
      'Currency': 'Baht',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.'
    },
    {
      'id': 10,
      'Full_Name': 'Mauricio Bagott',
      'Country': 'Nigeria',
      'Street_Address': '1 Mandrake Crossing',
      'Phone': '315-286-7096',
      'City': 'Uba',
      'Money': '$5.20',
      'Currency': 'Naira',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      'id': 11,
      'Full_Name': 'Trumaine Vigus',
      'Country': 'Sweden',
      'Street_Address': '0 Waubesa Road',
      'Phone': '322-419-6510',
      'City': 'Norrköping',
      'Money': '$0.42',
      'Currency': 'Krona',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.'
    },
    {
      'id': 12,
      'Full_Name': 'Kettie Arnowitz',
      'Country': 'Philippines',
      'Street_Address': '3 Montana Point',
      'Phone': '581-871-6698',
      'City': 'Mandaluyong City',
      'Money': '$6.89',
      'Currency': 'Peso',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.'
    },
    {
      'id': 13,
      'Full_Name': 'Marcos Gratrex',
      'Country': 'Indonesia',
      'Street_Address': '45046 Village Green Avenue',
      'Phone': '403-371-8824',
      'City': 'Kebonagung',
      'Money': '$0.74',
      'Currency': 'Rupiah',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.'
    },
    {
      'id': 14,
      'Full_Name': 'Valina Leyrroyd',
      'Country': 'Brazil',
      'Street_Address': '7 Towne Pass',
      'Phone': '408-874-1770',
      'City': 'Vilhena',
      'Money': '$7.57',
      'Currency': 'Real',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.'
    },
    {
      'id': 17,
      'Full_Name': 'Therese Blackwell',
      'Country': 'Brazil',
      'Street_Address': '04 Huxley Terrace',
      'Phone': '849-672-8530',
      'City': 'Itacoatiara',
      'Money': '$8.09',
      'Currency': 'Real',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.'
    },
    {
      'id': 18,
      'Full_Name': 'Salomi Pinchbeck',
      'Country': 'Thailand',
      'Street_Address': '57 Meadow Vale Parkway',
      'Phone': '686-201-6625',
      'City': 'Thawi Watthana',
      'Money': '$2.62',
      'Currency': 'Baht',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.'
    },
    {
      'id': 19,
      'Full_Name': 'Wainwright Alvis',
      'Country': 'Portugal',
      'Street_Address': '32300 Corscot Drive',
      'Phone': '944-870-3857',
      'City': 'Forninho',
      'Money': '$2.49',
      'Currency': 'Euro',
      'image': 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg?aki_policy=xx_large',
      'Description': 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.'
    }
  ],
  "colombia": [
    {
      'id': 1,
      'Full_Name': 'Lance Audrey',
      'Country': 'Colombia',
      'Street_Address': '53 Delladonna Way',
      'Phone': '889-812-5408',
      'City': 'María la Baja',
      'Money': '$9.43',
      'Currency': 'Peso',
      'image': 'https://a0.muscache.com/im/pictures/65441227/bb1eb2dd_original.jpg?aki_policy=xx_large',
      'Description': 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'
    },
    {
      'id': 2,
      'Full_Name': 'Colly Vella',
      'Country': 'Colombia',
      'Street_Address': '34 Lerdahl Street',
      'Phone': '182-132-1702',
      'City': 'Chimichagua',
      'Money': '$4.05',
      'Currency': 'Peso',
      'image': 'https://a0.muscache.com/im/pictures/1d1e2377-1998-4cb6-997d-189cb38cd190.jpg?aki_policy=xx_large',
      'Description': 'Phasellus in felis. Donec semper sapien a libero. Nam dui.'
    },
    {
      'id': 3,
      'Full_Name': 'Colly Vella',
      'Country': 'Colombia',
      'Street_Address': '34 Lerdahl Street',
      'Phone': '182-132-1702',
      'City': 'Chimichagua',
      'Money': '$4.05',
      'Currency': 'Peso',
      'image': 'https://a0.muscache.com/im/pictures/1f355d65-6fe1-4a32-8a4b-19e07eb6f5b8.jpg?aki_policy=xx_large',
      'Description': 'Phasellus in felis. Donec semper sapien a libero. Nam dui.'
    },
    {
      'id': 4,
      'Full_Name': 'Colly Vella',
      'Country': 'Colombia',
      'Street_Address': '34 Lerdahl Street',
      'Phone': '182-132-1702',
      'City': 'Chimichagua',
      'Money': '$4.05',
      'Currency': 'Peso',
      'image': 'https://a0.muscache.com/im/pictures/34051802/2e3ad4f3_original.jpg?aki_policy=xx_large',
      'Description': 'Phasellus in felis. Donec semper sapien a libero. Nam dui.'
    },
    {
      'id': 5,
      'Full_Name': 'Colly Vella',
      'Country': 'Colombia',
      'Street_Address': '34 Lerdahl Street',
      'Phone': '182-132-1702',
      'City': 'Chimichagua',
      'Money': '$4.05',
      'Currency': 'Peso',
      'image': 'https://a0.muscache.com/im/pictures/691aa0bc-f042-4dbf-a17d-d03b8a9abc2a.jpg?aki_policy=xx_large',
      'Description': 'Phasellus in felis. Donec semper sapien a libero. Nam dui.'
    },
    {
      'id': 6,
      'Full_Name': 'Colly Vella',
      'Country': 'Colombia',
      'Street_Address': '34 Lerdahl Street',
      'Phone': '182-132-1702',
      'City': 'Chimichagua',
      'Money': '$4.05',
      'Currency': 'Peso',
      'image': 'https://a0.muscache.com/im/pictures/32720963-fa40-4253-928c-86e5d514d933.jpg?aki_policy=xx_large',
      'Description': 'Phasellus in felis. Donec semper sapien a libero. Nam dui.'
    }

    
  ]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
