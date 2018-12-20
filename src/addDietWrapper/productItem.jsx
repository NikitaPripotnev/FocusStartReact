import React, { PureComponent } from 'react';

class ProductItem extends PureComponent {
  state = {
    grams: ''
  };

  componentDidMount() {
    const { grams } = this.props;
    this.setState({ grams });
  }

  onClick = () => {
    const { id, clickDelete } = this.props;
    clickDelete(id);
  };

  onChange = (event) => {
    if (event) {
      this.setState({ grams: event.currentTarget.value });
    }
  };

  render() {
    const {
      data, textRef, count, name
    } = this.props;
    const { grams } = this.state;
    return (
      <tr key={data[0]} className="add-diet-form__product-item">
        <td key="count" className="add-diet-form__product-item__td-count">
          {`${count}.`}
        </td>
        <td key="name" className="add-diet-form__product-item__td-count">
          {name}
        </td>
        {data.map(element => (
          <td key={element}>{(element * grams) / 100}</td>
        ))}
        <td key="grams" className="add-diet-form__product-item__td-grams">
          <input
            type="text"
            required
            pattern="[0-9]{,5}"
            value={grams}
            className="input add-diet-form__product-item__input"
            ref={textRef}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
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
