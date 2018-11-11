import React, { Component, ReactNode } from 'react';
import Button from '../Button';

interface Props {};
interface State {};

class App extends Component<Props, State> {
  state: State = {};

  render(): ReactNode {
    return (
      <div className="App">
          <Button>Click me</Button>
      </div>
    );
  }
}

export default App
