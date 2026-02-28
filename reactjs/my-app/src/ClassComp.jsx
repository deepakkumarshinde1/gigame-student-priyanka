import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {} //This is a mounting phase.

  componentWillUnmount() {} // to handle the unmounting phase.

  componentDidUpdate() {} //This is basically used to handle the updating phase.

  shouldComponentUpdate() {
    // we can take a decision that whether the component must get re-rendered or not.
    return false;
  }
  render() {
    return (
      <>
        <h1></h1>
      </>
    );
  }
}
