import React, { PureComponent } from 'react';

class ProductItem extends PureComponent {
  onClick = () => {};

  render() {
    const {
      name, ref, grams, count
    } = this.props;
    return (
      <tr key={name} className="add-diet-form__product-item">
        <td key={0} className="add-diet-form__product-item__td-count">
          {`${count}.`}
        </td>
        <td key={1} className="add-diet-form__product-item__td-name">
          {name}
        </td>
        <td key={2} className="add-diet-form__product-item__td-grams">
          Граммы:
          <input
            type="text"
            value={grams}
            className="input add-diet-form__product-item__input"
            ref={ref}
          />
        </td>
        <td key={3} className="add-diet-form__product-item__td-buttons">
          <button
            type="button"
            className="button add-diet-form__product-item__button"
            onClick={this.onClick}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
