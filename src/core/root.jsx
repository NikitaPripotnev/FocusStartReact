import React from 'react';
import SortTable from '../table/sortTable';
import Header from '../header/header';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Tasks from '../tasks/tasks';
import About from '../about/about';
import createRequest from '../core/create-request';
import { fetchFood } from '../core/api-config';


const TABLE_HEADER = [
  {
    label: 'id',
    sort: 'default',
    class: 'table-food__id'
  },
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

const TABLE_DATA = [];


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
