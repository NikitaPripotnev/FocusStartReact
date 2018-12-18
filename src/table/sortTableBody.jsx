import React, { Component } from 'react';
import ButtonDelete from './button/buttonDelete';
import ButtonEdit from './button/buttonEdit';
import ButtonAdd from './button/buttonAdd';
import { deleteFoodItem } from '../core/api-config';

// const SortTableBody = (props) => {
//   const { data } = props;

//   return (
//     <tbody>
//       {data.map((element, index) => (
//         <tr key={index}>
//           {element.map((item, id) => (
//             <td key={id}>{item}</td>
//           ))}
//           <td>
//             <ButtonEdit title="Ред." />
//             <ButtonDelete request={deleteFoodItem} id={element[0]} title="Удалить" />
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   );
// };

class SortTableBody extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const { changeDataByDelete, buttonsGroup, someFunction } = this.props;
    return (
      <tbody>
        {data.map((element, index) => (
          <tr key={element[0]}>
            {element.map((item, id) => (
              <td key={id}>{item}</td>
            ))}
            <td>
              {buttonsGroup && (
                <div>
                  <ButtonEdit title="Ред." id={element[0]} />
                  <ButtonDelete
                    request={deleteFoodItem}
                    id={element[0]}
                    title="Удалить"
                    changeDataByDelete={changeDataByDelete}
                  />
                </div>
              )}
              {!buttonsGroup && (
                <div>
                  <ButtonAdd title="Добавить" id={element[0]} someFunction={someFunction} />
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}
export default SortTableBody;
