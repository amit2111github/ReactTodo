import React from "react";
import Worklist from "./Worklist";
import Item from "./Item";
import Header from "./Header";
import Add from "./Add";
import { v4 as uuidv4 } from "uuid";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      status: Worklist.map((val) => val.status),
      worklist: Worklist
    };
  }
  handleCancel = (id) => {
    Worklist.forEach((val, index) => {
      if (val.id === id) {
        this.setState({ worklist: Worklist.splice(index, 1) });
      }
    });
  };
  handlesubmit = (task) => {
    var newtodo = {
      id: uuidv4(),
      name: task,
      status: false
    };
    this.setState({ worklist: Worklist.push(newtodo) });
  };

  handleonclick = (id) => {
    Worklist.forEach((val) => {
      if (val.id === id) {
        this.setState({ status: (val.status = !val.status) });
      }
    });
  };
  render() {
    var print = Worklist.map((val) => (
      <Item
        key={val.id}
        val={val}
        function1={this.handleonclick}
        function2={this.handleCancel}
      />
    ));
    return (
      <>
        <Header />
        <Add submit={this.handlesubmit} />
        <div className="itemWrapper container">{print}</div>
      </>
    );
  }
}
export default Todo;
