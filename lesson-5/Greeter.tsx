import * as React from 'react';

interface Props {
  name: string;
}

export class Greeter extends React.Component<Props> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
