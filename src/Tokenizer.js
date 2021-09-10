export default class Tokenizer {
  #stringToTokenize
  #lexicalGrammarWithTypes
  #arrayOfTokens = []
  #errorMessage
  #activeIndex

  constructor (lexicalGrammar, stringToTokenize) {
    this.#lexicalGrammarWithTypes = lexicalGrammar.getRegexExpressionsWithTypes()
    this.#stringToTokenize = stringToTokenize
    this.#errorMessage = lexicalGrammar.getErrorMessage()
    this.#arrayOfTokens = this.createTokens()
    this.#activeIndex = 0
  }

  setNewStringToTokenize(stringToTokenize) {
    this.#stringToTokenize = stringToTokenize
    this.resetTokenizer()
    this.createTokens()
  }

  setNewLexicalGrammar(lexicalGrammar) {
    this.#lexicalGrammarWithTypes = lexicalGrammar.getRegexExpressionsWithTypes()
    this.resetTokenizer()
    this.createTokens()
  }

  resetTokenizer() {
    this.#arrayOfTokens = []
    this.#activeIndex = 0
  }

  countTokens() {
    return this.#arrayOfTokens.length
  }

  getTokens() {
    return this.#arrayOfTokens
  }

  getActiveToken() {
    if (this.#activeIndex === this.#arrayOfTokens.length) {
      return { tokenType: 'END', regex: 'END', tokenValue: 'END' }
    } else {
      return this.#arrayOfTokens[this.#activeIndex]
    }
  }

  setActiveTokenToNext() {
    if (this.#activeIndex < this.#arrayOfTokens.length) {
      this.#activeIndex = this.#activeIndex + 1
    }
  }

  setActiveTokenToPrevious() {
    if (this.#activeIndex > 0) {
      this.#activeIndex = this.#activeIndex - 1
    }
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

  firstToken() {
    // Finds the first token
  }

  hasNext() {
    // Are there more tokens?
  }
}