import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <center>
        <form
          className="form-group"
          onSubmit={(event) => {
            event.preventDefault();
            this.setState((prevState) => ({ task: "" }));
            this.props.submit(this.state.task);
          }}
        >
          <input
            className=" form-control "
            name="task"
            type="text"
            onChange={this.handlechange}
            value={this.state.task}
          />
          <button className="btn btn-primary mt-2" type="submit" value="submit">
            ADD
          </button>
        </form>
      </center>
    );
  }
}
export default Add;
