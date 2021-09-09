export default class Grammar {
  #generalRegex
  #regexWithTypes

  constructor () {
    this.#generalRegex
    this.#regexWithTypes
  }

  setGenerelRegexExpressions(regex) {
    this.#generalRegex = regex
  }

  getGenerelRegexExpressions() {
    return this.#generalRegex
  }

  setRegexExpressionsWithTypes(regex) {
    this.#regexWithTypes = regex
  }

  getRegexExpressionsWithTypes() {
    return this.#regexWithTypes
  }
}
