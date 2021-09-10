export default class Grammar {
  #regexWithTypes
  #lexicalErrorMessage

  constructor () {
    this.#regexWithTypes
    this.#lexicalErrorMessage = 'LEXICAL ERROR'
  }
  getErrorMessage() {
    return this.#lexicalErrorMessage
  }

  setRegexExpressionsWithTypes(regex) {
    this.#regexWithTypes = regex
  }

  getRegexExpressionsWithTypes() {
    return this.#regexWithTypes
  }
}
