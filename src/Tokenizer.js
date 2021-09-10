export default class Tokenizer {
  #stringToTokenize
  #lexicalGrammarWithTypes
  #arrayOfTokens = []
  #errorMessage

  constructor (lexicalGrammar, stringToTokenize) {
    this.#lexicalGrammarWithTypes = lexicalGrammar.getRegexExpressionsWithTypes()
    this.#stringToTokenize = stringToTokenize
    this.#errorMessage = lexicalGrammar.getErrorMessage()
    this.#arrayOfTokens = this.createTokens()
  }

  countTokens() {
    return this.#arrayOfTokens.length
  }

  getTokens() {
    return this.#arrayOfTokens
  }

  createTokens() {
    if (this.#stringToTokenize.length > 0) {
      let stringPlaceholder = this.#stringToTokenize
      let arrayOfTokenMatches = []
      while (stringPlaceholder.length > 0) {
        this.#lexicalGrammarWithTypes.forEach(grammar => {
          if (stringPlaceholder.match(grammar.regex)) {
            let currentMatch = stringPlaceholder.match(grammar.regex)[0]
            arrayOfTokenMatches.push({ 
                tokenType: grammar.tokenType,
                regex: grammar.regex,
                tokenValue: currentMatch 
              }
            )
          }
        })
          if (arrayOfTokenMatches.length > 0) {
            arrayOfTokenMatches.sort((a, b) => b.tokenValue.length - a.tokenValue.length)
            this.#arrayOfTokens.push(arrayOfTokenMatches[0])
            stringPlaceholder = stringPlaceholder.replace(arrayOfTokenMatches[0].tokenValue, '').trim()
            arrayOfTokenMatches = []
          } else {
            this.#arrayOfTokens.push({ 
              tokenType: this.#errorMessage,
              regex: this.#errorMessage,
              tokenValue: stringPlaceholder
            })
            stringPlaceholder = ''
          }
      }
    } else {
      throw new Error('No string to tokenize!')
    }
    return this.#arrayOfTokens
  }
  getActiveToken(sequence) {
    // Describes the currently active token
  }

  firstToken() {
    // Finds the first token
  }

  hasNext() {
    // Are there more tokens?
  }
}