import React from 'react';
import Button from './button/button';

const SortTableBody = (props) => {
  const { data } = props;

  console.log(data, 'in SortTableBody');
  return (
    <tbody>
      {data.map((element, index) => (
        <tr key={index}>
          {element.map((item, id) => (
            <td key={id}>{item}</td>
          ))}
          <td>
            <Button className="button button_icon button_icon_edit" onClick="" title="Ред." />
            <Button className="button button_icon button_icon_delete" onClick="" title="Удалить" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SortTableBody;
