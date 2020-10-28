import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Item extends React.Component {
  render() {
    return (
      <form className="form-group ml-4">
        <label className="">
          <input
            className="form-check-input"
            checked={this.props.val.status}
            value={this.props.val.name}
            type="checkbox"
            onClick={() => {
              this.props.function1(this.props.val.id);
            }}
          />
          {this.props.val.name}
        </label>
        <button
          className=" btn btn-danger float-right"
          onClick={() => {
            this.props.function2(this.props.val.id);
          }}
        >
          X
        </button>
      </form>
    );
  }
}
export default Item;
