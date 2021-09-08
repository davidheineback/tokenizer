const TOKENIZER_OPTIONS = {
  WORD_AND_DOT: 'WORD_AND_DOT',
  ARITHMETIC: 'ARITHMETIC'
}

Object.freeze(TOKENIZER_OPTIONS)

class Tokenizer {
  #stringToTokenize
  #typeOfLexicalGrammar

  constructor (typeOfLexicalGrammar, stringToTokenize) {
    this.#typeOfLexicalGrammar = typeOfLexicalGrammar
    this.#stringToTokenize = stringToTokenize
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

  countTokens() {
    return this.#typeOfLexicalGrammar.countTokens(this.#stringToTokenize)
  }

  createTokens() {
      return this.#typeOfLexicalGrammar.createTokens(this.#stringToTokenize)
  }

  createAndSpecifyTokens() {
    return this.#typeOfLexicalGrammar.createAndSpecifyTokens(this.#stringToTokenize)
  }


}

export default Tokenizer