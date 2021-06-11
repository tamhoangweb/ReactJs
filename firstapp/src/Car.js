import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red", value: this.props.value };
  }
  render() {
    // console.log(this);
    // this.setState({ color: "red" });
    return (
      <div className="App">
        <h3 style={{ color: this.state.color }}>
          This is {this.state.value} Car
        </h3>
      </div>
    );
  }
}

export default Car;
