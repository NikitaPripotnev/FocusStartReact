import React, { PureComponent } from 'react';

class BannerSuccess extends PureComponent {
  onClickOk = () => {
    const { changeBannerStatus, someFunction } = this.props;
    changeBannerStatus(false);
    if (someFunction) {
      someFunction();
    }
    console.log('ok');
  };

  render() {
    const { message } = this.props;
    return (
      <div className="notificiant-banner notificiant-banner_green">
        <div className="notificiant-banner__svg notificiant-banner__svg_green" />
        <div className="notificiant-banner__text">
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
      </div>
    );
  }
}

export default BannerSuccess;
