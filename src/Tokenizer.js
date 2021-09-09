const TOKENIZER_OPTIONS = {
  WORD_AND_DOT: 'WORD_AND_DOT',
  ARITHMETIC: 'ARITHMETIC'
}

Object.freeze(TOKENIZER_OPTIONS)

class Tokenizer {
  #stringToTokenize
  #generalLexicalGrammar
  #lexicalGrammarWithTypes
  #arrayOfTokens = []

  constructor (lexicalGrammar, stringToTokenize) {
    this.#generalLexicalGrammar = lexicalGrammar.getGenerelRegexExpressions()
    this.#lexicalGrammarWithTypes = lexicalGrammar.getRegexExpressionsWithTypes()
    this.#stringToTokenize = stringToTokenize
  }

  countTokens() {
    return this.#stringToTokenize.match(this.#generalLexicalGrammar).length
  }

    createTokens() {
    this.#arrayOfTokens = this.#stringToTokenize.match(this.#generalLexicalGrammar)
    return this.#arrayOfTokens
  }

    createAndSpecifyTokens() {
    this.createTokens()
    return this.#arrayOfTokens.map((token => {
      const typeDesider = []
      this.#lexicalGrammarWithTypes.forEach(type => {
        if (token.match(type.regex)) {
            typeDesider.push({ 
              tokenType: type.tokenType,
              regex: type.regex,
              tokenValue: token 
            })
        }
      })
        if (typeDesider.length === 1) {
          return typeDesider[0]
        } else if (typeDesider.length > 1) {
          //Add maximalmunch method
          return 'Multiple hits'
        } else {
          throw new Error('Non supported token in string')
        }
    }))
  }

  activeToken() {
    // Describes the currently active token
  }

  firstToken() {
    // Finds the first token
  }

  hasNext() {
    // Are there more tokens?
  }
}

export default Tokenizer