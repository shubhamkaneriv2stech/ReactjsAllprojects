import React, { Component } from "react";
import FlipMove from "react-flip-move";
class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map((item) => (
      <div>
        <li key={item.key}>{item.text}</li>
        <button onClick={() => this.delete(item.key)}>Delete</button>
      </div>
    ));

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
