# Mongoose lesson

This repository contains the completed code from the exp Mongoose lesson, which is also the starting point for the afternoon challenge.

## Challenge

Adding Validations

Validations can and should be added to a model's schema to help ensure that good data is provided by the client
and that appropriate messages are sent when there is a problem with the data.

Look at the [documentation on validation for mongoose models](https://mongoosejs.com/docs/4.x/docs/validation.html), and add the following:

1. Add a minimum length for blog post content, username, and title. Pick values you feel are appropriate.
2. Add a maximum length for blog post content. Pick a value you feel is appropriate.
3. Read the documentation to find out how you can customize the message when a built-in validation fails. 
The message we saw when we didn't include a username in the test for addPost was a bit strange: 
Pathusernameis required. Specify a custom message for the required validations on the Post schema fields that 
is more user friendly.
4. Add at least one test to utilities.test.js that tests positively that addPost fails when a required field is missing. 
This is called a negative test case, and they can be just as important as positive test cases. Use the expect documentation 
if you need help choosing an assertion to do this. (There's an example of one way to do this in code-complete, but try to find a way on your own, or a different way).
