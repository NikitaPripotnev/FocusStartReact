import React, { PureComponent, createRef } from 'react';
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
        label: 'Наименование:',
        name: 'cal'
      },
      {
        label: 'Наименование:',
        name: 'prot'
      },
      {
        label: 'Наименование:',
        name: 'fat'
      },
      {
        label: 'Наименование:',
        name: 'carb'
      },
      {
        label: 'Наименование:',
        name: 'info'
      }
    ];
    this.fields.forEach((fieldItem) => {
      fieldItem.ref = createRef();
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(
      this.fields, 
      'textRefs in AddFood'
    );
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
              ref={this.item.ref}
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
