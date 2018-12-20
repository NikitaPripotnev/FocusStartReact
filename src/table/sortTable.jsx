import React, { PureComponent } from 'react';
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';
import PropTypes from 'prop-types';
import SortTableHeader from './sortTableHeader';
import SortTableBody from './sortTableBody';


class SortTable extends PureComponent {
  state = {
    data: [],
    headers: []
  };

  componentDidMount() {
    const { data, headers } = this.props;
    this.setState({ data: this.objToArr(data), headers });
  }

  componentWillReceiveProps(nextProps) {
    const { data, headers } = nextProps;
    this.setState({ data: this.objToArr(data), headers });
    console.log(nextProps, 'А тут я получил новые пропсы');
  }

  objToArr = (data) => {
    if (Array.isArray(data)) {
      return (data.map(elem => Object.values(elem)));
    }
    return ([Object.values(data)]);
  };

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
      sort: index === id ? currentSortMethod : 'default'
    }));
    const sortData = sortMultidimensionalArrayFunc(data, id, currentSortMethod);
    this.setState({
      data: sortData,
      headers: changeHeaders
    });
  };

  render() {
    const { headers, data } = this.state;
    const { className, buttonsGroup, someFunction, changeDataByDelete } = this.props;
    console.log(className, 'in render table');
    return (
      <table className={className}>
        <SortTableHeader headers={headers} onClick={this.sortTableFunc} />
        <SortTableBody
          data={data}
          changeDataByDelete={changeDataByDelete}
          buttonsGroup={buttonsGroup}
          someFunction={someFunction}
        />
      </table>
    );
  }
}

export default SortTable;
