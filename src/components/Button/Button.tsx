import React from 'react';

interface Props {
  children?: any,
};
interface State {};

class Button extends React.Component<Props, State> {
  state: State = {};

  render(): React.ReactNode {
    const { children, ...props } = this.props;
    return (
      <button type="button" className="Button">{children}</button>
    );
  }
}

export default Button
