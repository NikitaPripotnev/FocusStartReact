import React, { PureComponent } from 'react';
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';
import PropTypes from 'prop-types';
import SortTableHeader from './sortTableHeader';
import SortTableBody from './sortTableBody';
import createRequest from '../core/create-request';
import { fetchFood } from '../core/api-config';
import classNames from '../core/class-names/class-names';

class SortTable extends PureComponent {
  state = {
    data: [],
    headers: [],
    className: ''
  };

  // let data = [];
  componentWillMount() {
    const { data, headers, className } = this.props;
    this.setState({ data, headers, className });
    console.log("Скоро смонтируюсь");
  }

  componentDidMount() {
    createRequest(fetchFood).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState({ data: data });
        console.log("Я тут смонтировался");
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { data, headers, className } = nextProps;
    this.setState({ data, headers, className });
    console.log("А тут я получил новые пропсы");
  }

  sortTableFunc = (id, sortMethod) => {
    const { data, headers } = this.state;

    let currentSortMethod = 'default';

    switch (sortMethod) {
      case 'default':
        currentSortMethod = 'asc';
        break;
      case 'asc':
        currentSortMethod = 'desc';
        break;
      case 'desc':
        currentSortMethod = 'asc';
        break;
      default:
        currentSortMethod = 'asc';
    }

    const changeHeaders = headers.map((elem, index) => ({
      ...elem,
      sort: index == id ? currentSortMethod : 'default'
    }));
    //Сортировка только с массивом
    const sortData = sortMultidimensionalArrayFunc(data, id, currentSortMethod);
    console.log(this.state.data, sortData, 'Сортировка');
    this.setState({
      data: sortData,
      headers: changeHeaders
    });
  };

  render() {
    const { headers, data, className } = this.state;

    return (
      <table className={className}>
        <SortTableHeader headers={headers} onClick={this.sortTableFunc} />
        <SortTableBody data={data} />
      </table>
    );
  }
}

export default SortTable;
