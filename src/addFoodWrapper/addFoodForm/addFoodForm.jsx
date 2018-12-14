import React, { PureComponent, createRef } from 'react';
import createRequest from '../../core/create-request';
import { createFood } from '../../core/api-config';
import PropTypes from 'prop-types';


class AddFoodForm extends PureComponent {
  constructor(props) {
    super(props);
    this.fields = [
      {
        label: 'Наименование:',
        name: 'name'
      },
      {
        label: 'Калории:',
        name: 'cal'
      },
      {
        label: 'Белки:',
        name: 'prot'
      },
      {
        label: 'Жиры:',
        name: 'fat'
      },
      {
        label: 'Углеводы:',
        name: 'carb'
      },
      {
        label: 'Информация:',
        name: 'info'
      }
    ];
    this.fields.forEach((fieldItem) => {
      fieldItem.ref = createRef();
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const reducer = (accumulator, currentValue) => Object.assign(accumulator, currentValue);
    console.log('textRefs in AddFood');
    createRequest(
      createFood,
      null,
      this.fields.map(item => ({ [item.name]: item.ref.current.value })).reduce(reducer),
    ).then(({ status, data }) => {
      if (status === 'OK') {
        console.log(data, 'POST status - OK');
      } else {
        console.log('status - BAD');
      }
    });
    // this.textRef.current.value = '';
  };

  render() {
    return (
      <form className="add-food" onSubmit={this.onSubmit}>
        {this.fields.map((item, id) => (
          <label htmlFor={`food-item-${item.name}`}>
            {item.label}
            <input
              type="text"
              id={`food-item-${item.name}`}
              className="input"
              name="text"
              ref={item.ref}
            />
          </label>
        ))}

        <button type="submit" className="add-food_button">
          Добавить
        </button>
      </form>
    );
  }
}

export default AddFoodForm;
