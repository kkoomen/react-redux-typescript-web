import React, { Component } from 'react';
import { ConnectedReduxProps } from '../../reducers';

interface Props {};

interface State {};

type TestContainerProps = Props & ConnectedReduxProps;

export class TestContainer extends Component<TestContainerProps, State> {
  public state = {};

  public render() {
    return (
      <div className="TestContainer" />
    );
  }
}

export default TestContainer;
