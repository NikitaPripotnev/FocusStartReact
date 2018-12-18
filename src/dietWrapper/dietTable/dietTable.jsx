import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import createRequest from '../../core/create-request';
import { fetchDiet, fetchFood } from '../../core/api-config';
import DietTableHeader from './dietTableHeader';
import DietTableBody from './dietTableBody';

class DietTable extends PureComponent {
  state = {
    DATA_TABLE_DIET: [],
    ID_DIET: [],
    ID_FOOD: [],
    FOOD: [],
    HEADERS_TABLE_DIET: [
      {
        label: 'Название',
        className: ''
      },
      {
        label: 'Продукты',
        className: ''
      },
      {
        label: 'Б',
        className: ''
      },
      {
        label: 'Ж',
        className: ''
      },
      {
        label: 'У',
        className: ''
      },
      {
        label: 'Калории',
        className: ''
      }
    ]
  };

  componentDidMount() {
    createRequest(fetchFood).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState({ FOOD: data });

        createRequest(fetchDiet).then(({ status, data }) => {
          if (status === 'OK') {
            const { ID_DIET, FOOD } = this.state;
            this.setState({
              DATA_TABLE_DIET: this.convertDataToTable(data, ID_DIET, FOOD),
              ID_DIET
            });
          }
        });
      }
    });
  }

  objToArr = (data) => {
    if (Array.isArray(data)) {
      return data.map(elem => Object.values(elem));
    }
    return [Object.values(data)];
  };

  convertDataToTable = (data, ID_DIET, FOOD) => {
    const dataForTable = this.objToArr(data);
    dataForTable.forEach((element) => {
      ID_DIET.push(element[0]);
      const arrayFood = element[2].map((item) => {
        let newItem = Object.values(FOOD.find(FoodItem => FoodItem.id === item.id));
        newItem = newItem.map((foodParam, number) => {
          if (number !== 0 && number !== 1 && number !== 6) {
            return (+foodParam * +item.grams) / 100;
          }
          return foodParam;
        });
        newItem.push(item.grams);
        return newItem;
      });
      arrayFood.forEach((item) => {
        item.splice(6, 1);
        item.splice(0, 1);

        return item;
      });
      element[2] = arrayFood;
      element.splice(0, 1);
      return element;
    });
    return dataForTable;
  };

  render() {
    const { HEADERS_TABLE_DIET, DATA_TABLE_DIET } = this.state;
    return (
      <table className="table table-diet">
        <DietTableHeader headers={HEADERS_TABLE_DIET} />
        <DietTableBody data={DATA_TABLE_DIET} />
      </table>
    );
  }
}

export default DietTable;
