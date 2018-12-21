import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import BannerWarning from '../../notificiantBanners/bannerWarning';

class SearchFood extends PureComponent {
  textRef = createRef();

  state = {
    banner: false
  };

  changeBannerStatus = (flag) => {
    this.setState({ banner: flag });
  };

  onSubmit = (event) => {
    const { changeData } = this.props;

    event.preventDefault();

    if (this.textRef.current.value !== '') {
      changeData(this.textRef.current.value);
      this.textRef.current.value = '';
    } else {
      this.changeBannerStatus(true);
      setTimeout(() => {
        this.changeBannerStatus(false);
      }, 4000);
    }
  };

  render() {
    const { banner } = this.state;
    return (
      <div>
        <form className="form-search" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="input form-search__input"
            autoComplete="off"
            name="text"
            ref={this.textRef}
          />
          <button type="submit" className="button form-search__button">
            Поиск
          </button>
        </form>
        {banner && (
          <BannerWarning
            message="Вы ничего не ввели, поэтому ничего не нашлось :("
            changeBannerStatus={this.changeBannerStatus}
          />
        )}
      </div>
    );
  }
}

export default SearchFood;
