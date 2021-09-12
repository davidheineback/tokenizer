import Grammar from './Grammar.js'
export default class ExclamationGrammar extends Grammar {
  #regexWithTypes

  constructor () {
    super()
    this.#regexWithTypes = [
      {
        tokenType: 'EXCLAMATION',
        regex: /^[\w]+/g
      },
      {
        tokenType: 'EXCLAMATION',
        regex: /^\!/g
      }
    ]
    this.setRegexExpressionsWithTypes(this.#regexWithTypes)
  }
}