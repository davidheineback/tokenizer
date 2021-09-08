const LEXICAL_GRAMMAR = {
  WORD_AND_DOT: /([\w|åäöÅÄÖ]+|\.)/g,
  WORD: /[\w|åäöÅÄÖ]+/g,
  DOT: /\./g
}
Object.freeze(LEXICAL_GRAMMAR)

class WordGrammar {
  #arrayOfTokens = []

  constructor () {
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

  countTokens(stringToTokenize) {
    return stringToTokenize.match(LEXICAL_GRAMMAR.WORD_AND_DOT).length
  }

  createTokens(stringToTokenize) {
    this.#arrayOfTokens = stringToTokenize.match(LEXICAL_GRAMMAR.WORD_AND_DOT)
    return this.#arrayOfTokens
  }

  createAndSpecifyTokens(stringToTokenize) {
    this.createTokens(stringToTokenize)
    return this.#arrayOfTokens.map((token => {
        if (token.match(LEXICAL_GRAMMAR.WORD)) {
          return { tokenType: 'WORD', lexical_grammar: LEXICAL_GRAMMAR.WORD, tokenValue: token }
        } else if (token.match(LEXICAL_GRAMMAR.DOT)) {
          return { tokenType: 'DOT', lexical_grammar: LEXICAL_GRAMMAR.DOT,  tokenValue: token }
        } else {
          throw new Error('Not all tokens could be matched with a token type!')
        }
    }))
  }
}

export default WordGrammar