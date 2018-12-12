import React from 'react';
import classNames from '../core/class-names/class-names';

const SortTableHeader = (props) => {
  const { headers, onClick } = props;
  /*
  let classNameTh = '';
          if (element.sort === 'asc') {
            classNameTh = 'sort-ASC';
          } else if (element.sort === 'desc') {
            classNameTh = 'sort-DESC';
          }
  */
  return (
    <thead>
      <tr>
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
