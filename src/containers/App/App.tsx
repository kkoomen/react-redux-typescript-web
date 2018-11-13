import React, { Component, ReactNode } from 'react';

import { __DEBUG__ } from '../../config/constants';
import Debug from '../../components/Debug';

interface Props {};
interface State {};

class App extends Component<Props, State> {
  state: State = {};

  render(): ReactNode {
    return (
      <div className="App">
        {__DEBUG__ && <Debug />}
      </div>
    );
  }
}

export default App
