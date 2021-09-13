# Tokenizer

### Description:
    A small package to help you create tokens from a string.

### How to install:
    npm i @david-heineback/tokenizer


### How to use:
#### Import Tokenizer and Grammars:
    import tokenizer from '@david-heineback/tokenizer'
    const { Tokenizer, Grammar } = tokenizer

#### Tokenizer
    Tokenizer is a class that takes a grammar and a string as arguments and provides methods to see active token and step through array of tokens
    
```javascript=
const token = new Tokenizer(grammarType, 'String to tokenize')
```
    

#### Grammars
 - WordGrammar - Finds words and dots.
     - WORDS (Including åäö)
     - DOT (.)
 - ArithmeticGrammar - Finds arithetic operations
     - NUMBERS
     - ADD (+)
     - MULTIPLY (*)
     - SUBTRACT (-)
     - DIVIDE (/)
     - LEFT PARANTHESES (
     - RIGHT PARANTHESES )
     - EQUALS =
 - MaximalMunchGrammar
     - FLOAT
     - INTEGER
 - ExclamationGrammar
    - WORDS (Excluding åäö)
    - EXCLAMATION (!)

#### Create own grammar
    Create your own grammar by extending the Grammar class and adding regex with tokenType and regex as a object to the this.#regexWithTypes array. See example below:


```javascript=
import Grammar from './Grammar.js'
export default class YourGrammar extends Grammar {
  #regexWithTypes

  constructor () {
    super()
    this.#regexWithTypes = [
      {
        tokenType: 'YOUR TOKEN TYPE',
        regex: /^[\w|åäöÅÄÖ]+/g
      },
      {
        tokenType: 'DOT',
        regex: /^\./g
      }
    ]
    this.setRegexExpressionsWithTypes(this.#regexWithTypes)
  }
}
```

##### Get the token att current index.
 - getActiveToken()
**returns** the currently active token as object with token type, regex used to match and token value.
**Throw Error** Throws a LexicalError if trying to access a index that contains a token with a lexical error

##### Set the active token to the next index.
 - setActiveTokenToNext()
**Throw Error** Throws a LexicalError if trying to access a index that contains a token with a lexical error

##### Set the active token to the previous index.
- setActiveTokenToPrevious()
**Throw Error** Throws a IndexError if trying to access a index before index 0.


##### Set a new string to tokenize by passing a new string.
- token.setNewStringToTokenize('New string to tokenize')

##### Set a new lexical grammar to use to tokenize by passing a new grammar.
 - setNewLexicalGrammar(arithmeticGrammar)

##### Count number of tokens. (Will include count of invalid token!)
 - countTokens()


#### Example
```javascript=

import tokenizer from '@david-heineback/tokenizer'

const { Tokenizer, Grammar } = tokenizer

const wordGrammar = new Grammar.WordGrammar()
const arithmeticGrammar = new Grammar.ArithmeticGrammar()
const maximalMunchGrammar = new Grammar.MaximalMunchGrammar()
const exclamationGrammar = new Grammar.ExclamationGrammar()

// create a new Tokenizer
const token = new Tokenizer(wordGrammar, 'Hello World')

// Get the token att current index.
token.getActiveToken()
// expected : { tokenType: 'WORD', regex: /^[\w|åäöÅÄÖ]+/g tokenValue: 'Hello' }

// Set the active token to the next index.
token.setActiveTokenToNext()
token.getActiveToken()
// expected : { tokenType: 'WORD', regex: /^[\w|åäöÅÄÖ]+/g tokenValue: 'World' }


// Set the active token to the previous index.
token.setActiveTokenToPrevious()
token.getActiveToken()
// expected : { tokenType: 'WORD', regex: /^[\w|åäöÅÄÖ]+/g tokenValue: 'Hello' }

// Set a new string to tokenize by passing a new string.
token.setNewStringToTokenize('New string to tokenize')

// Set a new lexical grammar to use to tokenize by passing a new grammar.
token.setNewLexicalGrammar(arithmeticGrammar)

// Count number of tokens. (Will include count of invalid token!)
token.countTokens()```
