import React, { PureComponent, createRef } from 'react';
import SortTable from '../table/sortTable';
import ButtonAddScreen from '../buttonAddScreen/buttonAddScreen';
import ProductItem from './productItem';
import BannerSuccess from '../notificiantBanners/bannerSuccess';
import createRequest from '../core/create-request';
import { fetchFood, createDiet } from '../core/api-config';

class AddDietWrapper extends PureComponent {
  nameRef = createRef();

  state = {
    FOOD: [],
    addedProducts: [],
    isLoadingTableFood: false,
    banner: false,
    TABLE_HEADERS: [
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
    HeaderaddedProducts: ['', 'Наименование', 'Калории', 'Б', 'Ж', 'У', 'Граммы', '']
  };

  componentDidMount() {
    createRequest(fetchFood).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState({ FOOD: data, isLoadingTableFood: true });
      }
    });
  }

  clickAdd = (id) => {
    const { FOOD, addedProducts } = this.state;
    if (!addedProducts.some(elem => elem.id === id)) {
      this.setState(state => ({
        addedProducts: state.addedProducts.concat(this.collectProduct(FOOD, id, 0))
      }));
    }
  };

  collectProduct = (FOOD, id, grams) => {
    const product = FOOD.find(FoodItem => FoodItem.id === id);
    const productForState = {
      id,
      name: product.name,
      other: [product.cal, product.prot, product.fat, product.carb],
      grams
    };
    productForState.ref = createRef();
    return productForState;
  };

  clickDelete = (id) => {
    const { addedProducts } = this.state;
    this.setState({ addedProducts: addedProducts.filter(FoodItem => FoodItem.id !== id) });
  };

  changeBannerStatus = (flag) => {
    this.setState({ banner: flag });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { addedProducts } = this.state;
    const newDiet = Object.assign(
      { name: this.nameRef.current.value },
      { food: addedProducts.map(product => ({ id: product.id, grams: +product.ref.current.value })) }
    );
    createRequest(createDiet, null, newDiet).then(({ status, data }) => {
      if (status === 'OK') {
        this.changeBannerStatus(true);
        this.setState({ addedProducts: [] });
        setTimeout(() => {
          this.changeBannerStatus(false);
        }, 3000);
        console.log(data, 'POST status - OK');
      } else {
        console.log('status - BAD');
      }
    });
  };

  render() {
    const {
      FOOD,
      isLoadingTableFood,
      addedProducts,
      HeaderaddedProducts,
      TABLE_HEADERS,
      banner
    } = this.state;
    console.log(this.state, 'in render');
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
              required
            />
          </label>
          Выберите продукты:
          <div className="wrapper-overflow add-diet-form__table-wrapper">
            {isLoadingTableFood && (
              <SortTable
                headers={TABLE_HEADERS}
                data={FOOD}
                className="table table-food"
                buttonsGroup={false}
                someFunction={this.clickAdd}
              />
            )}
          </div>
          {addedProducts[0] && (
            <table className="table add-diet-form__table-added-products">
              <thead>
                <tr key="addedHead">
                  {HeaderaddedProducts.map(item => (
                    <th>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {addedProducts.map((element, index) => (
                  <ProductItem
                    count={index + 1}
                    data={element.other}
                    textRef={element.ref}
                    id={element.id}
                    grams={element.grams}
                    name={element.name}
                    clickDelete={this.clickDelete}
                  />
                ))}
              </tbody>
            </table>
          )}
          <button type="submit" className="button button_width100 add-form__button">
            Добавить
          </button>
        </form>

        <ButtonAddScreen
          path="/diets"
          className="button button_width100 add-food-wrapper__button_back"
          title="Вернуться к списку диет"
        />
        {banner && (
          <BannerSuccess
            message="Диета успешно добавлена"
            changeBannerStatus={this.changeBannerStatus}
          />
        )}
      </div>
    );
  }
}

export default AddDietWrapper;
