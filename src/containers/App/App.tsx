import React, { Component } from 'react';

import { __DEBUG__ } from '../../config/constants';
import Debug from '../../components/Debug';

interface Props {};
interface State {};

class App extends Component<Props, State> {
  state: State = {};

  render() {
    return (
      <div className="App">
        {__DEBUG__ && <Debug />}
      </div>
    );
  }
}

export default App
