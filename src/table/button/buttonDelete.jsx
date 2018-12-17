import React, { PureComponent } from 'react';
import BannerDelete from '../../notificiantBanners/bannerDelete';

class ButtonDelete extends PureComponent {
  state = {
    banner: false
  };

  onClick = () => {
    this.changeBannerStatus(true);
  };

  changeBannerStatus = (flag) => {
    this.setState({ banner: flag });
  };

  render() {
    const {
      title, id, request, changeDataByDelete
    } = this.props;
    const { banner } = this.state;
    return (
      <div>
        {banner && (
          <BannerDelete
            changeBannerStatus={this.changeBannerStatus}
            id={id}
            request={request}
            changeDataByDelete={changeDataByDelete}
          />
        )}
        <button
          className="button button_icon button_icon_delete"
          type="button"
          onClick={this.onClick}
        >
          {title}
        </button>
      </div>
    );
  }
}

export default ButtonDelete;
