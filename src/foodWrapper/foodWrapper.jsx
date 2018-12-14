import React, { PureComponent, Link } from 'react';
import { fetchFood, fetchFoodItem } from '../core/api-config';
import SortTable from '../table/sortTable';
import SearchFood from './searchFood/searchFood';
import ButtonAddFood from './buttonAddFood/buttonAddFood';
import createRequest from '../core/create-request';

class FoodWrapper extends PureComponent {
  state = {
    DATA_TABLE_FOOD: [],
    isLoadingTableFood: false,
    TABLE_HEADER: [
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
    ]
  };


  componentDidMount() {
    createRequest(fetchFood).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState({ DATA_TABLE_FOOD: data });
      }
    });
  }

  changeData = (name) => {
    createRequest(fetchFoodItem, { name }, null).then(({ status, data }) => {
      if (status === 'OK') {
        console.log(data, 'changeData, status - OK');
        this.setState({ DATA_TABLE_FOOD: data });
      } else {
        console.log('changeData, status - BAD');
      }
    });
  }

  render() {
    const { DATA_TABLE_FOOD, isLoadingTableFood, TABLE_HEADER } = this.state;
    return (
      <div>
        <SearchFood changeData={this.changeData} />
        {!isLoadingTableFood && (
          <SortTable headers={TABLE_HEADER} data={DATA_TABLE_FOOD} className="table table-food" />
        )}
        <ButtonAddFood />
      </div>
    );
  }
}

export default FoodWrapper;
