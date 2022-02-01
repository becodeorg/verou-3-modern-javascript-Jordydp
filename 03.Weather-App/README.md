# Part 1 - Refactor

💡 Refactoring can break *a lot* of your code, if you're trying to modify big chunks. The secret is to work with small changes, and commit every step. That will help you to focus on one change, and got back to your last commit if something goes wrong. Made a real mess? Ask your coach in time, so (s)he can help you out. Refactoring is also never really finished, it's okay to call it a day after some intense changes instead of dedicating the full week to getting it perfect.

* Copy the files from [this repository](../project-template/README.md) into your classroom project. 
* Follow the instructions in that project's README.
* Observe the code in it.


## 🌱 Must-have's

### Refactoring to functions

Take the `script.js` file, and reorganize (_refactor_) the code in as many functions as you can (minimum of 3 functions should be made).

If you look at the html file in this project, the `<script src="script.js">` tag has been placed at the top of the file instead of the bottom. 
Not only that but it now also has a `defer` attribute in it!

It will load everything first before parsing and executing the files in order to create optimal execution.

Do This one step at a time, you can see which approach works best for you (function per function / top to bottom / ...), but keep a few principles in mind:
1. Functions should only do ONE thing.
2. Function names should describe what the function does.
3. Functions can often be just a few lines long.

💡 Tip: test and commit early. Spotting the bug after one change is easy, spotting the bug after half a day of changes is... well... not.

> ⚠️ Get an error mentioning `CORS policy`? You'll need to run the code though a local server. Your IDE can do this for you without the need to install extra stuff - ask your coach if you're not sure how to do this. Curious why? Well, we're loading JS as a module here, and this comes with its own benefits and limitations.

_Do you have time to spare? See if you can help someone or dive into the "nice-to-have" features - there's some really nice ones!_

## 🌼 Nice-to-have's (doable)

Expecting more? Oh-uh let me see!

### Global variables

Global variables are great, right? Available everywhere, no hassle, ...
Perfect - time to arrange a marriage! Or... should we? 🤔
When it seems too good to be true, 99% of the time it is (party pooper, I know).

What's the matter?
- A big list of global variables becomes hard to maintain when the project grows
- As global variables are available everywhere, this also means that *nowhere* else a variable with the same name can exist (imagine this limitation for a big project or when using a library)

When a variable is *only* relevant in a specific function, we can create it inside that function.
The variable is now `scoped` (or local): available on specific lines only (in the function, in this case).

The challenge: how many global variables can you find in your project that can actually become local vars?

### Chase the old-style code away

Found some older JS remains, like `var` or `function`?
They might be interesting for studying history, but have no place in our up-to-date project - time to get rid of them!
If you're not sure what to replace them with (or what the impact might be), discuss with your peers or coach first.

💡 `const`, `var` and fat arrow functions (oops, gave too much away, maybe) behave slightly different from their older counterparts. If you've split everything into small functions and got rid of global vars, it shouldn't give you too much trouble to replace everything.

## 🌳 Nice-to-have's (hard)

### Clean code

If you have the time and strength to deepen into even more "clean code", have a look at this [_documentation_](https://github.com/ryanmcdermott/clean-code-javascript#functions)

Some of this is quite advanced stuff, but this is a very good place to read on best practices and clean code!

# Part 2 - JavaScript Modules

Did you know? With modern Javascript, we can also separate our functions in multiple files! Resulting in an even better organised and readable way!
This is done by making use of the `import/export` directives.

Not only does it allow us to import/export functions, but also variables, objects, classes, ...!

## 🌱 Must-have's

1. Think about what parts of your code would make sense to have in a different file. 
   * It's recommended to simply start with one function. You can add more as you go, as long as it makes sense. If you feel moving something to a different files makes the structure worse, then don't do it (or discuss with your coach).
   * In the long run, the goal is to be able to group things that "make sense together". Example: a calculator file, containing functions like sum, subtract, ... This would allow you to do calculator.sum(x + y). Nice syntax, right?
2. Give the file the same name as your function and move your actual functions into these files.
    * _Just remember: keep `script.js` around, it will still be the origin file for everything._
3. Rename `script.js` to `index.js`.
    * _This is a convention that insures better compatibility with several tools later on (you will see)._ 😉
4. Apply the ES6 import/export syntax and connect all your javascript files to your `index.js`.
    * _Ps. Don't forget to check your HTML as well to load JS in a way that supports modules. (hint: `type="module"`)_


## 🌼 Nice-to-have's

_Do you have time to spare? See if you can help someone, add "nice-to-have" features to your app, or refactor another app of yours!_
