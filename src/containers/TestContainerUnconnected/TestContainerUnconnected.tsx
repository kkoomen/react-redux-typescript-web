import React, { Component } from 'react';

interface Props {};

interface State {};

export class TestContainerUnconnected extends Component<Props, State> {
  public state = {};

  public render() {
    return (
      <div className="TestContainerUnconnected" />
    );
  }
}

export default TestContainerUnconnected;
