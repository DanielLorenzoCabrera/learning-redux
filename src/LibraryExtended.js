export default {
    webpack :  {
        img : require("../assets/img/webpack.png"),
        content: "Webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript. but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules. Webpack takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. It can be used from the command line or can be configured using a configuration file which is named webpack.config.js. This file defines rules, plugins, etc., for a project. (webpack is highly extensible via rules which allow developers to write custom tasks that they want to perform when bundling files together.)Node.js is required for using webpack. Webpack provides code on demand using the moniker code splitting. The Technical Committee 39 for ECMAScript is working on standardization of a function that loads additional code: 'proposal-dynamic-import'",
        url: "https://webpack.js.org/"
    },
    react :  {
        img : require("../assets/img/react.png"),
        content: "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development. React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI. React’s popularity today has eclipsed that of all other front-end development frameworks. Here is why: Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly. Improved performance: React uses Virtual DOM, thereby creating web applications faster. Virtual DOM compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again, as conventional web applications do.  Reusable components: Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their logic and controls, and they can be reused throughout the application, which in turn dramatically reduces the application’s development time. Unidirectional data flow: React follows a unidirectional data flow. This means that when designing a React app, developers often nest child components within parent components. Since the data flows in a single direction, it becomes easier to debug errors and know where a problem occurs in an application at the moment in question.",
        url : "https://es.reactjs.org/"
    },
    redux :  {
        img : require("../assets/img/redux.png"),
        content: "Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other. If you are using Redux with any kind of UI framework, you will normally use a 'UI binding' library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code. React Redux is the official Redux UI binding library for React. If you are using Redux and React together, you should also use React Redux to bind these two libraries. To understand why you should use React Redux, it may help to understand what a 'UI binding library' does",
        url : "https://es.redux.js.org/"
    },
    lodash :  {
        img : require("../assets/img/lodash.png"),
        content: "Lodash is a JavaScript library that provides utility functions for common programming tasks using a functional programming paradigm; it builds upon the older underscore.js library. Lodash has several built-in utility functions that make coding in JavaScript easier and cleaner. Instead of writing common functions, again and again, the task can be accomplished with a single line of code. While lodash offeres a tremendous library of functionality, much of it is no longer required, and the cost of importing lodash into your application can be huge, well over 600kb if your compiler doesn't shake the unrequired code, or you use lodash throughout your application.",
        url : "https://lodash.com/"
    },
    thunk :  {
        img : require("../assets/img/redux.png"),
        content: "A thunk function is a function that accepts two arguments: the Redux store dispatch method, and the Redux store getState method. Thunk functions are not directly called by application code. Instead, they are passed to store.dispatch():. A thunk function may contain any arbitrary logic, sync or async, and can call dispatch or getState at any time. In the same way that Redux code normally uses action creators to generate action objects for dispatching instead of writing action objects by hand, we normally use thunk action creators to generate the thunk functions that are dispatched. A thunk action creator is a function that may have some arguments, and returns a new thunk function",
        url : "https://github.com/reduxjs/redux-thunk"
    },
    eslint :  {
        img : require("../assets/img/eslint.png"),
        content: "ESLint is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process. JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it. The primary reason ESLint was created was to allow developers to create their own linting rules. ESLint is designed to have all rules completely pluggable. The default rules are written just like any plugin rules would be. They can all follow the same pattern, both for the rules themselves as well as tests. While ESLint will ship with some built-in rules to make it useful from the start, you'll be able to dynamically load rules at any point in time.",
        url : "https://eslint.org/"
    },
    babel :  {
        img : require("../assets/img/babel.png"),
        content: "Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you: Transform syntax Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js) Source code transformations (codemods) And more! (check out these videos for inspiration). Babel has support for the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax, right now without waiting for browser support. Check out our usage guide to get started.",
        url : "https://babeljs.io/"
    },
    axios :  {
        img : require("../assets/img/axios.png"),
        content: "Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests. The first version of Axios was released around 4 years ago, and its open source code is available on GitHub. Axios has has multiple contributors that have contributed to each version of Axios.",
        url : "https://axios-http.com/"
    }
}