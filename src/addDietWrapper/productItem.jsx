import React, { PureComponent } from 'react';

class ProductItem extends PureComponent {
  onClick = () => {};

  render() {
    const {
      data, ref, grams, count
    } = this.props;
    return (
      <tr key={data[0]} className="add-diet-form__product-item">
        <td key="count" className="add-diet-form__product-item__td-count">
          {`${count}.`}
        </td>
        {data.map(element => <td key={element}>{element}</td>)}
        <td key="grams" className="add-diet-form__product-item__td-grams">
          <input
            type="text"
            value={grams}
            className="input add-diet-form__product-item__input"
            ref={ref}
          />
        </td>
        <td key="button" className="add-diet-form__product-item__td-buttons">
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
