import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      speacialCount: 0,
    };
    // this.increase = this.increase.bind(this);
    // this.decrease = this.decrease.bind(this);
  }
  //   increase() {
  //     this.setState({ speacialCount: this.state.speacialCount + 1 });
  //   }
  //   decrease() {
  //     this.setState({ speacialCount: this.state.speacialCount - 1 });
  //   }
  //life cycle mount
  componentDidMount() {
    console.log("component mounted");
  }
  componentWillUnmount() {
    console.log("component unmounted!");
  }
  increase = () => {
    this.setState({ speacialCount: this.state.speacialCount + 1 });
  };
  decrease = () => {
    this.setState({ speacialCount: this.state.speacialCount - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.speacialCount}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
