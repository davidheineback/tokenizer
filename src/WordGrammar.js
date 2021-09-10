import Grammar from './Grammar.js'
export default class WordGrammar extends Grammar {
  #regexWithTypes

  constructor () {
    super()
    this.#regexWithTypes = [
      {
        tokenType: 'WORD',
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