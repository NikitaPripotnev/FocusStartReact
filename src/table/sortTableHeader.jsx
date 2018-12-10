import React from 'react';

const SortTableHeader = (props) => {
  const { headers, onClick } = props;

  return (
    <thead>
      <tr>
        {headers.map((element, index) => {
          let classNameTh = '';
          if (element.sort === 'asc') {
            classNameTh = 'sort-ASC';
          } else if (element.sort === 'desc') {
            classNameTh = 'sort-DESC';
          }
          console.log(element.sort, classNameTh, 'sort');

          return (
            <th
              key={index}
              className={`sort-th ${classNameTh} ${element.class}`}
              onClick={() => onClick(index, element.sort)}
            >
              {element.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default SortTableHeader;
