import React, { PureComponent } from 'react';
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';
import PropTypes from 'prop-types';
import SortTableHeader from './sortTableHeader';
import SortTableBody from './sortTableBody';
import createRequest from '../core/create-request';
import { fetchFood } from '../core/api-config';


class SortTable extends PureComponent {
  state = {
    data: [],
    headers: [],
    className: ''
  };

  // let data = [];
  componentWillMount() {
    const { data, headers } = this.props;
    this.setState({ data, headers });
    console.log("Скоро смонтируюсь");
  }

  componentWillReceiveProps(nextProps) {
    const { data, headers} = nextProps;
    this.setState({ data, headers });
    console.log(nextProps, "А тут я получил новые пропсы");
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
    const sortData = sortMultidimensionalArrayFunc(data, id, currentSortMethod);
    console.log(this.state.data, sortData, 'Сортировка');
    this.setState({
      data: sortData,
      headers: changeHeaders
    });
  };

  render() {
    const { headers, data } = this.state;
    const { className } = this.props;
    console.log(className, 'in render table');
    return (
      <table className={className}>
        <SortTableHeader headers={headers} onClick={this.sortTableFunc} />
        <SortTableBody data={data} />
      </table>
    );
  }
}

export default SortTable;
