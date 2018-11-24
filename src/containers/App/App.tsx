import React, { Component } from 'react';

import { __DEBUG__ } from '../../config/constants';
import { Debug } from '../../components/Debug';

interface Props {};
interface State {};

export class App extends Component<Props, State> {
  public state = {};

  public render() {
    return (
      <div className="App">
        {__DEBUG__ && <Debug />}
      </div>
    );
  }
}
