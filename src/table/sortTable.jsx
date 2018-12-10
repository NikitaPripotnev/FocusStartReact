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
    createRequest(fetchFood).then((result) => {
      console.log(result);
      // data = result.data[0].values();
    });

    const { data, headers, className } = this.props;
    this.setState({ data, headers, className });
  }

  /*

*/
  componentWillReceiveProps(nextProps) {
    const { data, headers, className } = nextProps;
    this.setState({ data, headers, className });
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
