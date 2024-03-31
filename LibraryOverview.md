# Library Overview
## What library
Jest for JavaScript
## What purpose does it serve
Jest is a library that is used for automated unit testing in isolated functionalities of programs.

## Examples of functionalities
expect(input).toBe(expected)
>checks if input is equal to expected.

expect(input).toBeDefined()
>checks if input is a defined variable.

expect(input).toMatchObject(expected)
>checks if the object input has the same properties as the object expected.

expect.anything()
>checks for anything that is not null or undefined.

expect.arrayContaining(expected)
>checks if an inputted array contains expected.

.not
>Every Jest function that returns Passed, or Failed can be switched by inserting not.
>Example: expect(input).not.toBe(expected) returns Passed if input is not equal to expected.

More can be found here. [ref](https://jestjs.io/docs/expect)
## When was it created
Jest was crated in 2011. It was later absorbed into the OpenJS foundation. [ref](https://openjsf.org/blog/openjs-foundation-welcomes-jest)
## Why Jest
Being primarily used for web development, Javascript can sometimes be lacking in locally run instances. Although logging information in the console is more versitile than print statements, things that should be simple, like input, can be somewhat convoluted at times. Jest is an easy way of automating testing so you can just make sure tests pass instead of trying to manage temporary testing code. Additionally, if the program you are working on is fairly large, it can be difficult to keep track of temporary tests.
## How has it influenced learning?
I have learned more about accessing data in Javascript. This exploration activity was a great way to practice the limits of what is accessible normally, and what requires deticated implementations for access.
## Overall Experience
I had a good experience with this library. In smaller applications, its use is limited, but when creating a larger program, it is easy to tell how valuble it would be for testing all possible cases when a change is made. I would only recommend it to someone who is designing a large python program that would be difficult to test manually.