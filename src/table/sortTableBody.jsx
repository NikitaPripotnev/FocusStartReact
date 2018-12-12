import React, { PureComponent } from 'react';
import Button from './button/button';

class SortTableBody extends PureComponent {
  state = {
    data: []
  };


  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    this.objToArr(data);
  }

  objToArr = (data) => {
    if (Array.isArray(data)) {
      console.log('its Array!');
      this.setState({ data: data.map(elem => Object.values(elem)) });
    } else {
      console.log('its not Array!');
      this.setState({ data: [Object.values(data)] });
    }
    console.log(data, this.state, 'data and state in objToArr');
  };

  render() {
    const { data } = this.state;
    return (
      <tbody>
        {data.map((element, index) => (
          <tr key={index}>
            {element.map((item, id) => (
              <td key={id}>{item}</td>
            ))}
            <td>
              <Button className="button button_icon button_icon_edit" onClick="" title="Ред." />
              <Button
                className="button button_icon button_icon_delete"
                onClick=""
                title="Удалить"
              />
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default SortTableBody;
