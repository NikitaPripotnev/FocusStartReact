import React from 'react';

const DietTableBody = (props) => {
  const { data } = props;

  return (
    <tbody>
      {data.map((element, index) => (
        <tr key={index}>
          {element.map((item, id) => (
            <td key={id}>{item.label}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default DietTableBody;
