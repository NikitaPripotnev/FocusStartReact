import React from 'react';

const DietTableHeader = (props) => {
  const { headers } = props;

  return (
    <thead>
      <tr key="dietHeaderKey">
        {headers.map((element, index) => (
          <th key={index} className="">
            {element.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default DietTableHeader;
