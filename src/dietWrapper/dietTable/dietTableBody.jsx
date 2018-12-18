import React from 'react';
import TableForProduct from './tableForProduct';

const DietTableBody = (props) => {
  const { data } = props;

  return (
    <tbody>
      {data.map((element, index) => (
        <tr key={index}>
          {element.map((item, id) => {
            if (id == 1) {
              return (
                <td key={id}>
                  <TableForProduct dataFood={item} />
                </td>
              );
            }
            return <td key={id}>{item}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default DietTableBody;
