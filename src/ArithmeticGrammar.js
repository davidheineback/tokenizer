import Grammar from './Grammar.js'

export default class ArithmeticGrammar extends Grammar {
  #generalRegex
  #regexWithTypes

  constructor () {
    super()
    this.#generalRegex = /^[0-9]+(\.([0-9])+)?/
    this.#regexWithTypes = [
      {
        tokenType: 'NUMBER',
        regex: /^[0-9]+(\.([0-9])+)?/g
      },
      {
        tokenType: 'ADD',
        regex: /^[\+]/g
      }
      ,
      {
        tokenType: 'MULTIPLY',
        regex: /^[\+]/g
      }
      ,
      {
        tokenType: 'SUBTRACT',
        regex: /^[\-]/g
      }
      ,
      {
        tokenType: 'DIVIDE',
        regex: /^[\/]/g
      }
      ,
      {
        tokenType: 'PARENTHESES',
        regex: /^[\(\)]/g
      }
    ]
    this.setGenerelRegexExpressions(this.#generalRegex)
    this.setRegexExpressionsWithTypes(this.#regexWithTypes)
  }
}
