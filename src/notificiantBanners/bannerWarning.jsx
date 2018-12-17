import React, { PureComponent } from 'react';

class BannerWarning extends PureComponent {
  onClickOk = () => {
    const { changeBannerStatus } = this.props;
    changeBannerStatus(false);
    console.log('ok');
  };

  render() {
    const { message } = this.props;
    return (
      <div className="notificiant-banner notificiant-banner_yellow">
        <h2 className="notificiant-banner__title">Предупреждение</h2>
        <p className="notificiant-banner__info">{message}</p>
        <button
          type="button"
          className="button notificiant-banner__button notificiant-banner__button_yellow"
          onClick={this.onClickOk}
        >
        Ок
        </button>
      </div>
    );
  }
}

export default BannerWarning;
