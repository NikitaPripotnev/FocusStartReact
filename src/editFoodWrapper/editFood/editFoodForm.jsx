import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import createRequest from '../../core/create-request';
import { fetchFoodId, patchFood } from '../../core/api-config';
import BannerSuccess from '../../notificiantBanners/bannerSuccess';

class EditFood extends PureComponent {
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

  componentDidMount() {
    const { id } = this.props;
    createRequest(fetchFoodId, { id }, null).then(({ status, data }) => {
      if (status === 'OK') {
        const dataArray = Object.values(data);
        dataArray.splice(0, 1);
        this.fields.forEach((fieldItem, index) => {
          fieldItem.ref.current.value = dataArray[index];
        });
      } else {
        console.log('edit, status - BAD');
      }
    });
  }

  changeBannerStatus = (flag) => {
    this.setState({ banner: flag });
  };

  onSubmit = (event) => {
    const { id } = this.props;

    event.preventDefault();
    const reducer = (accumulator, currentValue) => Object.assign(accumulator, currentValue);
    createRequest(
      patchFood,
      { id },
      this.fields
        .map((item, index) => {
          if (index === 0 || index === 5) {
            return { [item.name]: item.ref.current.value };
          }
          return { [item.name]: +item.ref.current.value };
        })
        .reduce(reducer)
    ).then(({ status, data }) => {
      if (status === 'OK') {
        this.changeBannerStatus(true);
        console.log(data, 'POST status - OK');
      } else {
        console.log('status - BAD');
      }
    });
  };

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { banner } = this.state;
    return (
      <div className="edit-food-wrapper">
        <form className="edit-form" onSubmit={this.onSubmit}>
          {this.fields.map(item => (
            <label htmlFor={`food-item-${item.name}`}>
              {item.label}
              <input
                type="text"
                id={`food-item-${item.name}`}
                className={`input edit-form__input input_${item.name}`}
                name="text"
                ref={item.ref}
              />
            </label>
          ))}

          <button type="submit" className="button button_width100 edit-form__button">
            Сохранить изменения
          </button>
        </form>
        {banner && (
          <BannerSuccess
            message="Изменения успешно сохранены"
            changeBannerStatus={this.changeBannerStatus}
            someFunction={this.goBack}
          />
        )}
      </div>
    );
  }
}

export default EditFood;
