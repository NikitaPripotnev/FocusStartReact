import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import createRequest from '../../core/create-request';
import { fetchDiet, fetchFood } from '../../core/api-config';
import DietTableHeader from './dietTableHeader';
import DietTableBody from './dietTableBody';

class DietTable extends PureComponent {
  state = {
    DATA_TABLE_DIET: [],
    FOOD: [],
    HEADERS_TABLE_DIET: [
      {
        label: 'id',
        className: 'id'
      },
      {
        label: 'Название',
        className: ''
      },
      {
        label: 'Продукты',
        className: ''
      },
      {
        label: 'Калории',
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
        label: '',
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
            const { FOOD } = this.state;
            const { BMR } = this.props;
            let fullData = this.convertDataToTable(data, FOOD);
            if (BMR) {
              fullData = fullData.filter(
                element => element[3] >= BMR - 300 && element[3] <= BMR + 300
              );
            }
            this.setState({
              DATA_TABLE_DIET: fullData
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

  convertDataToTable = (data, FOOD) => {
    const dataForTable = this.objToArr(data).map((element) => {
      const arrayFood = element[2].map((item) => {
        let newItem = Object.values(FOOD.find(FoodItem => FoodItem.id === item.id));
        newItem = newItem.map((foodParam, number) => {
          if (number !== 0 && number !== 1 && number !== 6) {
            return (foodParam * item.grams) / 100;
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
      return element.concat(this.sumParams(arrayFood, 1, 4));
    });
    return dataForTable;
  };

  sumParams = (arrayData, number, length) => {
    const arraySum = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (let i = number; i <= length; i++) {
      arraySum.push(arrayData.map(elem => elem[i]).reduce(reducer));
    }
    return arraySum;
  };

  changeDataByDelete = (id) => {
    this.setState(state => ({
      DATA_TABLE_DIET: state.DATA_TABLE_DIET.filter(element => element[0] !== id)
    }));
  };

  render() {
    const { HEADERS_TABLE_DIET, DATA_TABLE_DIET } = this.state;
    return (
      <div className="wrapper-overflow wrapper-overflow_diet">
        <table className="table table-diet">
          <DietTableHeader headers={HEADERS_TABLE_DIET} />
          <DietTableBody
            data={DATA_TABLE_DIET}
            changeDataByDelete={this.changeDataByDelete}
            headers={HEADERS_TABLE_DIET}
          />
        </table>
      </div>
    );
  }
}

export default DietTable;
