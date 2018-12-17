import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import createRequest from '../../core/create-request';
import { createFood } from '../../core/api-config';
import BannerSuccess from '../../notificiantBanners/bannerSuccess';

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

  state = {
    banner: false
  };

  changeBannerStatus = (flag) => {
    this.setState({ banner: flag });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const reducer = (accumulator, currentValue) => Object.assign(accumulator, currentValue);
    createRequest(
      createFood,
      null,
      this.fields.map(item => ({ [item.name]: item.ref.current.value })).reduce(reducer)
    ).then(({ status, data }) => {
      if (status === 'OK') {
        this.changeBannerStatus(true);
        this.fields.forEach((fieldItem) => {
          fieldItem.ref.current.value = '';
        });
        setTimeout(() => {
          this.changeBannerStatus(false);
        }, 4000);
        console.log(data, 'POST status - OK');
      } else {
        console.log('status - BAD');
      }
    });
  };

  render() {
    const { banner } = this.state;
    return (
      <div>
        <form className="add-food" onSubmit={this.onSubmit}>
          {this.fields.map(item => (
            <label htmlFor={`food-item-${item.name}`}>
              {item.label}
              <input
                type="text"
                id={`food-item-${item.name}`}
                className={`input add-form__input input_${item.name}`}
                name="text"
                ref={item.ref}
              />
            </label>
          ))}

          <button type="submit" className="button button_width100 add-form__button">
            Добавить
          </button>
        </form>
        {banner && (
          <BannerSuccess
            message="Продукт успешно добавлен"
            changeBannerStatus={this.changeBannerStatus}
          />
        )}
      </div>
    );
  }
}

export default AddFoodForm;
