import * as React from 'react';
import * as ReactJSDOM from 'react-jsdom';

interface Props {
  name: string;
}

class Greeter extends React.Component<Props> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

describe('Greeter', () => {
  it('renders the name prop', () => {
    const component = mount(<Greeter name="Chris" />);
    expect(component.textContent).toContain("Chris")
  });
});

// Mocha
function describe(title, test) {
  console.log(title);
  test();
}

function it(title, test) {
  try {
    test();
    console.log('\x1b[32m%s\x1b[0m', `✓ ${title}`);
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `✕ ${error}`);
  }
}

// Chai
function expect(actual) {
  return {
    toBe: expected => {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} to equal ${expected}`);
      }
    },
    toContain: expected => {
      if (actual.indexOf(expected) === -1) {
        throw new Error(`Expected ${actual} to contain ${expected}`);
      }
    }
  };
}

// Test Renderer
function mount(jsx) {
  return ReactJSDOM.render(jsx);
}
