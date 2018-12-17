import React from 'react';

const DietTableHeader = (props) => {
  const { headers } = props;

  return (
    <thead>
      {headers.map((item, id) => (
        <tr key={`diet-tr-${id}`}>
          {item.map((element, index) => (
            <th key={index} className="" colSpan={element.colspan} rowSpan={element.rowspan}>
              {element.label}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default DietTableHeader;
