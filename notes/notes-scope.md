# Scope

Scope - where can we access identifiers (variables and functions).

Lexical Scoping - variable scope is defined by its location in the source code.

All variables are in one of those two roles:  
- Target: recieving the assignment of some value.
- Source: retrieving (reading) a value from it.


- JS is compiled / parsed language (not interpreted) - code is processed before execution.
(Traditionally, JS was considered interpreted language because JS engines would execute code line by line. But nowadays use JIT (Just-In-Time) compilation for performance optimization).

There are four stages to a compiler:
1. Lexing (Lexical Analysus).
2. Tokenization.
3. Parsing - turns stream of tokens into <b>Abstract Syntax Tree</b>.
4. Code Generation - taking an abstract syntax tree and producing some kind of other executable form of that code.

1. Lexing (Lexical Analysus).
    - Code is broken down into individual pieces (called lexemes) - keywords, identifiers, operators, literals.s
2. Tokenization.
    - Converting code into stream of tokens.
    - Token - a structured representation of lexeme with additional information (like what is it dealing with: keyword, identifier literal...).
    - Often Lexing and Tokenization is mentioned together.
3. Parsing.
     - Organizing tokens into <b>Abstract Syntax Tree (AST)</b> - a tree representation of syntactic structure of the source code. Reflects heirarchical nature of the syntax. 
     - Semantic Analysis: Analyzing AST for semantic correctness.
     - (parses through JS source code and produces intermediate representation of something like bytecode. And hands it off to the JS Virtual Machine).
4. Code Generation - taking an abstract syntax tree and producing other executable form of that code.

JS organizes scopes with functions and blocks (functions and blocks - units of blocks).

1. First pass through the program - Compilation step:
    - Compiler - processes program.
    - Scope Manager - creates "plans" whatever compiler encounters to (determines the scope of variables and functions. The "plan" refers to how the engine decides to access and manage these variables during execution).
2. Coming back and executing the code - Execution step.

- Shadowing - Having two variables at different scopes of the same name. Downside is that now we can't reference element with that name in the outer scope.

JS is Lexically Scoped language. 
All of the scopes we are dealing with are determined at compile time. And used at runtime.

This allows JS engine to be more efficient.

E.g. ```var teacher = 'Kyle';``` :
- ```var teacher``` - handled by compiler.
- ```teacher = 'Kyle'``` - handled by engine's execution environment (runtime).




# Scope & Function Expressions

- Function Declaration: ```function fn() {}```.
- Function Expression: ```const func = function fn() {}```.
    - We can call fn inside fn (```const func = function fn() {console.log(fn)}```).
    - fn is Read-Only (we can't reassign it to another value).

    - Named Function Expression: ```const func = function fn() {}```.
    - Anonymous Function Expression: ```const func = function() {}```.


Why should we prefer named function expressions:
- Reliable function self-reference (e.g. recursion).
- More debuggable stack traces.
- More self-documenting code.



# Dynamic scope

Dynamic scope implies that the runtime conditions will affect scoping.

JS does not have dynamic scoping.



# Lexical scope

Lexical scope is figured out by a compiler, a parser and it is decided at compile time, not a runtime.


# Principle of least exposure

We should default to keeping everything private and only exposing the minimal necessary.

#### Pros of least exposure

1. Reducing naming collision.
2. Can't accidentally misuse it.
3. You protect it from refactoring.



# IIFE

IIFE is not a function declaration, it is a function expression. The first thing we see is parenthesis, not the word 'function'.

- IIFE's only job is to be executed only one time and that's all.
- IIFE can be used in any place we need an erxpression and any time we need a statement or a scope in an expression possition.


# Block scoping

Block scoping is done with curly braces instead of functions.

Function declarations inside blocks are scoped to that block and are hoisted.



# Closure

Closure is when a function 'remembers' its lexical scope even when the function is executed outside that lexical scope.


# Modules

Modules encapsulate data and behavior (methods) together. The state (data) of a module is held by its methods via closure.