import React from 'react';

const TableForProduct = (props) => {
  const { dataFood } = props;

  return (
    <table className="table table-products">
      <thead>
        <tr>
          <th key="thP0">Наименование</th>
          <th key="thP1">Кал.</th>
          <th key="thP2">Б</th>
          <th key="thP3">Ж</th>
          <th key="thP4">У</th>
          <th key="thP5">Гр.</th>
        </tr>
      </thead>
      <tbody>
        {dataFood.map((product, index) => (
          <tr key={index}>
            {product.map((item, id) => (
              <td key={id}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableForProduct;
