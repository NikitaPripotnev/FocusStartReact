import React, { PureComponent } from 'react';
import createRequest from '../core/create-request';

class BannerDelete extends PureComponent {
  onClickYes = () => {
    const {
      changeBannerStatus, id, request, changeDataByDelete
    } = this.props;
    createRequest(request, { id }, null).then(({ status }) => {
      if (status === 'OK') {
        changeBannerStatus(false);
        console.log('yes');
        changeDataByDelete(id);
      } else {
        console.error('DELETE status - BAD');
      }
    });
  };

  onClickNo = () => {
    const { changeBannerStatus } = this.props;
    changeBannerStatus(false);
  };

  render() {
    return (
      <div>
        <div className="notificiant-banner-wrapper" />
        <div className="notificiant-banner notificiant-banner_red">
          <h2 className="notificiant-banner__title">Удаление</h2>
          <p className="notificiant-banner__info">Вы действитльно хотите это сделать???</p>
          <button
            type="button"
            className="button notificiant-banner__button notificiant-banner__button_red"
            onClick={this.onClickYes}
          >
            Да
          </button>
          <button
            type="button"
            className="button notificiant-banner__button notificiant-banner__button_red"
            onClick={this.onClickNo}
          >
            Нет
          </button>
        </div>
      </div>
    );
  }
}

export default BannerDelete;
