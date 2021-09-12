import Grammar from './Grammar.js'

export default class MaximalMunchGrammar extends Grammar {
  #regexWithTypes
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
      }
    ]
    this.setRegexExpressionsWithTypes(this.#regexWithTypes)
  }
}
