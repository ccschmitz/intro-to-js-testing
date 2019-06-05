import React = require('react');

import { mount } from './test-renderer';
import { describe, it } from './hocha';
import { expect } from './expect';
import { Greeter } from './Greeter';

describe('Greeter', () => {
  it('renders the name prop', () => {
    const component = mount(<Greeter name="Chris" />);
    expect(component.textContent).toContain("Chris")
  });
});
