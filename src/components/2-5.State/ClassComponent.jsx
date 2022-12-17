import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //컴포넌트가 그려지자마자 호출되는 것(마운트 되자마자))
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //컴포넌트가 사라지기 직전에 호출되는 것
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  //함수형 컴포넌트에서는 return 한 값 자체가 여기서는 render()를 의미한다.
  //클래스형 컴포넌트는 render()안에 return 할 Jsx를 그려주고 있다.
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
