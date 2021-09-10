import Grammar from './Grammar.js'

export default class ArithmeticGrammar extends Grammar {
  #regexWithTypes
  
  
  // {
  //   tokenType: 'NUMBER',
  //   regex: /^[0-9]+(\.([0-9])+)?/g
  // },


  constructor () {
    super() 
    this.#regexWithTypes = [
      {
        tokenType: 'INTEGER',
        regex: /^[0-9]+/g
      },
      {
        tokenType: 'FLOAT',
        regex: /^[0-9]+\.[0-9]+/g
      },
      {
        tokenType: 'ADD',
        regex: /^[\+]/g
      },
      {
        tokenType: 'MULTIPLY',
        regex: /^[\*]/g
      },
      {
        tokenType: 'SUBTRACT',
        regex: /^[\-]/g
      },
      {
        tokenType: 'DIVIDE',
        regex: /^[\/]/g
      },
      {
        tokenType: 'LEFT PARENTHESES',
        regex: /^[\(]/g
      },
      {
        tokenType: 'RIGHT PARENTHESES',
        regex: /^[\)]/g
      },
      {
        tokenType: 'EQUALS',
        regex: /^[\=]/g
      }
    ]
    this.setRegexExpressionsWithTypes(this.#regexWithTypes)
  }
}
