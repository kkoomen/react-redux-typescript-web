import React, { Component } from 'react';
import { ConnectedReduxProps } from '../../reducers';

interface Props {};

interface State {};

type TestProps = Props & ConnectedReduxProps;

export class Test extends Component<TestProps, State> {
  public state = {};

  public render() {
    return (
      <div className="Test" />
    );
  }
}
