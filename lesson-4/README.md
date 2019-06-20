# Lesson 4 - React Test Renderer

What we've built so far works pretty well for unit testing JavaScript code, but the majority of tests we write are for things like React components.

We need to come up with a way to render React components and make assertions against them.

Let's see if we can build something like `mount` from Enzyme that renders our components in a DOM-like environment.
