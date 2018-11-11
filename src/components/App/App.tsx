import React, { Component, ReactNode } from 'react';

import { DEBUG } from '../../config/constants';
import Debug from '../Debug';

interface Props {};
interface State {};

class App extends Component<Props, State> {
  state: State = {};

  render(): ReactNode {
    return (
      <div className="App">
        {DEBUG && <Debug />}
      </div>
    );
  }
}

export default App
