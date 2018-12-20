import React, { PureComponent, createRef } from 'react';
import { Route } from 'react-router-dom';

class ChooseDietForm extends PureComponent {
  constructor(props) {
    super(props);
    this.valueGoal = createRef();
    this.valueSex = createRef();
    this.fields = [
      {
        label: 'Ваше имя:',
        name: 'name',
        className: '1x'
      },
      {
        label: 'Вес:',
        name: 'weight',
        className: '1x'
      },
      {
        label: 'Рост:',
        name: 'height',
        className: '1x'
      },
      {
        label: 'Возраст:',
        name: 'age',
        className: '1x'
      }
    ];
    this.fields.forEach((fieldItem) => {
      fieldItem.ref = createRef();
    });
  }

  state = {};

  onClick = (history) => {
    const weigth = this.fields[1].ref.current.value;
    const height = this.fields[2].ref.current.value;
    const age = this.fields[3].ref.current.value;
    let BMR = 1;
    if (this.valueSex.current.value === 'male') {
      BMR = 88.36 + 13.4 * weigth + 4.8 * height - 5.7 * age;
    } else {
      BMR = 447.6 + 9.2 * weigth + 3.1 * height - 4.3 * age;
    }
    BMR = Math.floor(BMR * this.valueGoal.current.value);
    history.push(`/diets/${BMR}`);
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="choose-diet-form" onSubmit={this.onSubmit}>
        {this.fields.map((item, index) => (
          <label key={`label_${item.name}`} htmlFor={`diet-item-${item.name}`}>
            {item.label}
            <input
              key={`input_${item.name}`}
              type="text"
              id={`diet-item-${item.name}`}
              className={`input choose-diet-form__input choose-diet-form__input_${item.className}`}
              name={item.name}
              required
              pattern={`${
                index === 1 || index === 2 || index === 3 ? '[0-9]{,5}' : '^[A-Za-zА-Яа-яЁё]+$'
              }`}
              ref={item.ref}
            />
          </label>
        ))}

        <select
          key="sel1"
          name="goal"
          className="choose-diet-form__select choose-diet-form__select_left"
          ref={this.valueSex}
        >
          <option value="male" className="choose-diet-form__select__option">
            Мужчина
          </option>
          <option value="female" className="choose-diet-form__select__option">
            Женщина
          </option>
        </select>

        <select
          key="sel2"
          name="sex"
          className="choose-diet-form__select choose-diet-form__select_right"
          ref={this.valueGoal}
        >
          <option value={1.7} className="choose-diet-form__select__option">
            Набрать мышечную массу
          </option>
          <option value={0.8} className="choose-diet-form__select__option">
            Похудеть
          </option>
        </select>
        <Route
          render={({ history }) => (
            <button
              className="button choose-diet-form__button"
              type="submit"
              onClick={() => this.onClick(history)}
            >
              Подобрать диету
            </button>
          )}
        />
      </form>
    );
  }
}

export default ChooseDietForm;
