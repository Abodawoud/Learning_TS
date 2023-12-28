# What is TS ?!

<ol>
<li> TS is a compiler to JS</li>
</ol>

- It works as a datatype shadow to The JS file
- `.ts` files contain both type information and code that runs
- `.js` files contain only code that runs
- `.d.ts` files contain only type information

# What is TSCONFIG ?!
<ol>
<li> Used to Configure the TS File</li>
</ol>

    {
        "compilerOptions": {
        "outDir": "dist", // where to put the TS files
        "target": "ES2015", // JS language level (as a build target) it can be ES2022
        "module": "CommonJS", // To know the Type module like *.cjs, *.mjs, NodeNext
        "moduleResolution": "Node" // Find cjs modules in node_modules
        },
        "include": ["src"] // which files to compile
    }
