import React, { Component } from 'react';

interface Props {};

interface State {};

export class TestUnconnected extends Component<Props, State> {
  public state = {};

  public render() {
    return (
      <div className="TestUnconnected" />
    );
  }
}
