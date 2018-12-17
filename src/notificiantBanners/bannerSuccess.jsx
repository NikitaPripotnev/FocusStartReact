import React, { PureComponent } from 'react';

class BannerSuccess extends PureComponent {
  onClickOk = () => {
    const { changeBannerStatus } = this.props;
    changeBannerStatus(false);
    console.log('ok');
  };

  render() {
    const { message } = this.props;
    return (
      <div className="notificiant-banner notificiant-banner_green">
        <h2 className="notificiant-banner__title">Успех!</h2>
        <p className="notificiant-banner__info">{message}</p>
        <button
          type="button"
          className="button notificiant-banner__button notificiant-banner__button_green"
          onClick={this.onClickOk}
        >
        Ок
        </button>
      </div>
    );
  }
}

export default BannerSuccess;
