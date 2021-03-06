import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EditFoodForm from './editFood/editFoodForm';

class EditFoodWrapper extends PureComponent {
  render() {
    console.log(this.props, 'props in editWr');
    const { history } = this.props;
    return (
      <div className="wrapper">
        <EditFoodForm id={this.props.match.params.id} history={history} />
      </div>
    );
  }
}

export default EditFoodWrapper;
