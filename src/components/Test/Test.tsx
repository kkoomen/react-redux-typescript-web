import React, { Component, ReactNode } from 'react';

interface Props {};
interface State {};

class Test extends Component<Props, State> {
  state: State = {};

  render(): ReactNode {
    return (
      <div className="Test" />
    );
  }
}

export default Test
