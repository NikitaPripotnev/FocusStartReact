import React, { PureComponent, createRef } from 'react';
import SortTable from '../table/sortTable';
import ButtonAddScreen from '../buttonAddScreen/buttonAddScreen';
import ProductItem from './productItem';
import createRequest from '../core/create-request';
import { fetchFood } from '../core/api-config';

class AddDietWrapper extends PureComponent {
  nameRef = createRef();

  state = {
    FOOD: [],
    addedProduct: [],
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
        this.setState({ FOOD: data, isLoadingTableFood: true });
      }
    });
  }

  clickAdd = (id) => {
    const { FOOD } = this.state;
    const productName = FOOD.find(FoodItem => FoodItem.id === id).name;
    const ref = createRef();
    const productForState = {
      id,
      name: productName,
      grams: 0,
      ref
    };
    this.setState(state => ({ addedProduct: state.addedProduct.concat(productForState) }));
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {
      FOOD,
      isLoadingTableFood,
      addedProduct,
      TABLE_HEADER
    } = this.state;
    return (
      <div className="wrapper">
        <form name="add-diet" className="add-diet-form" onSubmit={this.onSubmit}>
          <label htmlFor="name-diet">
            Название:
            <input
              type="text"
              id="name-diet"
              className="input add-form__input"
              name="name-diet"
              ref={this.nameRef}
            />
          </label>
            Выберите продукты:
          <div className="wrapper-overflow add-diet-form__table-wrapper">
            {isLoadingTableFood && (
              <SortTable headers={TABLE_HEADER} data={FOOD} className="table table-food" buttonsGroup={false} someFunction={this.clickAdd} />
            )}
          </div>
          <table className="table add-diet-form__table-added-products">
            <tbody>
              {addedProduct.map((element, index) => (
                <ProductItem count={index + 1} name={element.name} ref={element.ref} grams={element.grams} />
              ))}
            </tbody>
          </table>
          <button type="submit" className="button button_width100 add-form__button">
            Добавить
          </button>
        </form>

        <ButtonAddScreen
          path="/diet"
          className="button button_width100 add-food-wrapper__button_back"
          title="Вернуться к списку диет"
        />
      </div>
    );
  }
}

export default AddDietWrapper;
