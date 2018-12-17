import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DietTableHeader from './dietTableHeader';
import DietTableBody from './dietTableBody';

class DietTable extends PureComponent {
  state = {
    data: [
      [
        {
          label: 'Водная'
        },
        {
          label: 'Огурец'
        },
        {
          label: '12'
        },
        {
          label: '1'
        },
        {
          label: '2'
        },
        {
          label: '33'
        },
        {
          label: '44'
        },
        {
          label: '55'
        },
        {
          label: '122'
        }
      ]
    ],
    headers: [
      [
        {
          label: 'Название',
          rowspan: '2',
          colspan: '1'
        },
        {
          label: 'Продукты',
          rowspan: '1',
          colspan: '4'
        },
        {
          label: 'Б',
          rowspan: '2',
          colspan: '1'
        },
        {
          label: 'Ж',
          rowspan: '2',
          colspan: '1'
        },
        {
          label: 'У',
          rowspan: '2',
          colspan: '1'
        },
        {
          label: 'Калории',
          rowspan: '2',
          colspan: '1'
        }
      ],
      [
        {
          label: 'Наименование',
          rowspan: '1',
          colspan: '1'
        },
        {
          label: 'Б',
          rowspan: '1',
          colspan: '1'
        },
        {
          label: 'Ж',
          rowspan: '1',
          colspan: '1'
        },
        {
          label: 'У',
          rowspan: '1',
          colspan: '1'
        }
      ]
    ]
  };

  render() {
    const { headers, data } = this.state;
    const { className } = this.props;
    return (
      <table className={className}>
        <DietTableHeader headers={headers} />
        <DietTableBody data={data} />
      </table>
    );
  }
}

export default DietTable;
