import React, { PureComponent } from 'react';
import TableForProduct from './tableForProduct';
import ButtonDelete from '../../table/button/buttonDelete';
import ButtonEdit from '../../table/button/buttonEdit';
import { deleteDiet } from '../../core/api-config';

class DietTableBody extends PureComponent {
  state = {};

  render() {
    const { data, changeDataByDelete, headers } = this.props;
    return (
      <tbody>
        {data.map(element => (
          <tr key={element[0]}>
            {element.map((item, id) => {
              if (id === 2) {
                return (
                  <td key={id} className="">
                    <TableForProduct dataFood={item} />
                  </td>
                );
              }
              return (
                <td key={id} className={`table-diet__${headers[id].className}`}>
                  {item}
                </td>
              );
            })}
            <td>
              <div className="clearfix">
                <ButtonEdit title="Ред." path={`/editDiet/${element[0]}`} />
                <ButtonDelete
                  request={deleteDiet}
                  id={element[0]}
                  title="Удалить"
                  changeDataByDelete={changeDataByDelete}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}
export default DietTableBody;
