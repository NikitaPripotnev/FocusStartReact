import React from 'react';
import classNames from '../core/class-names/class-names';

const SortTableHeader = (props) => {
  const { headers, onClick } = props;

  return (
    <thead>
      <tr key="sortHeaderKey">
        {headers.map((element, index) => (
          <th
            key={index}
            className={`sort-th sort-th_${element.sort} ${element.class}`}
            onClick={() => onClick(index, element.sort)}
          >
            {element.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default SortTableHeader;
