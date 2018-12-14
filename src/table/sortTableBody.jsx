import React, { PureComponent } from 'react';
import ButtonDelete from './button/buttonDelete';
import ButtonEdit from './button/buttonEdit';
import { deleteFoodItem } from '../core/api-config';

const SortTableBody = (props) => {
  const { data } = props;

  return (
    <tbody>
      {data.map((element, index) => (
        <tr key={index}>
          {element.map((item, id) => (
            <td key={id}>{item}</td>
          ))}
          <td>
            <ButtonEdit title="Ред." />
            <ButtonDelete request={deleteFoodItem} id={element[0]} title="Удалить" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SortTableBody;
