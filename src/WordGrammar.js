import Grammar from './Grammar.js'
export default class WordGrammar extends Grammar {
  #generalRegex
  #regexWithTypes

  constructor () {
    super()
    this.#generalRegex = /([\w|åäöÅÄÖ]+|\.)/g
    this.#regexWithTypes = [
      {
        tokenType: 'WORD',
        regex: /[\w|åäöÅÄÖ]+/g
      },
      {
        tokenType: 'DOT',
        regex: /\./g
      }
    ]
    this.setGenerelRegexExpressions(this.#generalRegex)
    this.setRegexExpressionsWithTypes(this.#regexWithTypes)
  }
}