import React from 'react';
import SortTable from '../table/sortTable';
import Header from '../header/header';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Tasks from '../tasks/tasks';
import About from '../about/about';

const TABLE_HEADER = [
  {
    label: 'Наименование',
    sort: 'default',
    class: 'table-food__name'
  },
  {
    label: 'Каллорий',
    sort: 'default',
    class: 'table-food__cal'
  },
  {
    label: 'Б',
    sort: 'default',
    class: 'table-food__prot'
  },
  {
    label: 'Ж',
    sort: 'default',
    class: 'table-food__fat'
  },
  {
    label: 'У',
    sort: 'default',
    class: 'table-food__carb'
  },
  {
    label: 'Описание',
    sort: 'none',
    class: 'table-food__info'
  },
  {
    label: '',
    sort: 'none',
    class: 'table-food__buttons'
  }
];

const TABLE_DATA = [
  [
    'Яблоко',
    52,
    0.3,
    0.2,
    14,
    'Яблоко - плод яблони, который употребляется в пищу в свежем виде, служит сырьём в кулинарии и для приготовления напитков.',
    ''
  ],
  [
    'Картофель',
    77,
    2,
    0.1,
    17,
    'Картофель - это крахмалистая, клубнеплодная культура из многолетней пасленовой соляной туберозы.',
    ''
  ],
  [
    'Кефир 1%',
    40,
    2.8,
    1,
    4,
    'Кефир – один из самых распространённых кисломолочных напитков, спиртосодержащий продукт.',
    ''
  ]
];

function Root() {
  /*
  return(
    <BrowserRouter>
      <div>
        <Link className="link" to="/">tasks</Link>
        <Link className="link" to="/about">about</Link>
        <Route exact path="/" component={Tasks} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
  */
  return (
    <div>
      <Header />
      <SortTable headers={TABLE_HEADER} data={TABLE_DATA} className="table table-food" />
    </div>
  );
}

export default Root;
