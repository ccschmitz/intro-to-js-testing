# Lesson 3 - A Testing Framework

One of the limitations of our current test setup is that if one of the assertions fails it's going to stop execution and prevent the rest of the tests from running.

It's also hard to see which test failed because the stack trace always points to the line where we `threw new Error()`.

Let's see if we can create a framework that will fix these issues and provide a nice DSL for writing specs. We'll go for something like the `describe`/`it` syntax that Mocha provides.
