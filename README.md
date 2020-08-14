# Random Password Generator
A website that uses javascript to produce a password that meets the users requirements for a website. 

The first set of options include special characters, numbers, lowercase characters, and uppercase characters. These options ensure that the password is only made up of the character types checked. 

There is also a password length function that allows you to pick a fixed password size or a password range that will randomize the size of the password within given parameters.

There is also some error handling to ensure that certain cases don't occur. For example, the length parameters will only allow numbers to be typed in. All values have default values plugged in to prevent empty data. 

Thought about adding the ability to remove forbidden characters manually, however, it quickly became too user unfriendly and was decided on as better to leave out and reduce the special characters to the most common set of accepted characters.