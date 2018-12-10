import React from 'react';

const SortTableBody = (props) => {
  const { data } = props;

  return (
    <tbody>
      {data.map((element, index) => (
        <tr key={index}>
          {element.map((item, id) => (
            <td key={id}>{item}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default SortTableBody;
