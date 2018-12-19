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
    ],
    HeaderAddedProduct: [
      '', 'Наименование', 'Калории', 'Б', 'Ж', 'У', 'Граммы', ''
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
    const { FOOD, addedProduct } = this.state;
    if (!addedProduct.some(elem => elem.id === id)) {
      const product = FOOD.find(FoodItem => FoodItem.id === id);
      const ref = createRef();
      const productForState = {
        id,
        other: [product.name, product.cal, product.prot, product.fat, product.carb],
        grams: 0,
        ref
      };
      this.setState(state => ({ addedProduct: state.addedProduct.concat(productForState) }));
    }
  }

  clickDelete = (id) => {
    const { addedProduct } = this.state;
    this.setState({ addedProduct: addedProduct.filter(FoodItem => FoodItem.id !== id) });
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {
      FOOD,
      isLoadingTableFood,
      addedProduct,
      HeaderAddedProduct,
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
          {addedProduct[0] && (
            <table className="table add-diet-form__table-added-products">
              <thead>
                <tr key="addedHead">
                  {HeaderAddedProduct.map(item => <th>{item}</th>)}
                </tr>
              </thead>
              <tbody>
                {addedProduct.map((element, index) => (
                  <ProductItem
                    count={index + 1}
                    data={element.other}
                    ref={element.ref}
                    id={element.id}
                    grams={element.grams}
                    clickDelete={this.clickDelete}
                  />
                ))}
              </tbody>
            </table>)
          }
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
