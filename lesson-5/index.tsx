import React = require('react');

import { mount } from './test-renderer';
import { describe, it } from './cortado';
import { expect } from './expect';
import { Greeter } from './Greeter';

describe('<Greeter />', () => {
  it("renders the person's name", () => {
    const component = mount(<Greeter name="Chris" />);
    expect(component.textContent).toContain("Hello, Chris")
  });
});
