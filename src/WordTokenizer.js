const LEXICAL_GRAMMAR = {
  WORD: /[\w|åäöÅÄÖ]+/g,
  DOT: /\./g
}

Object.freeze(LEXICAL_GRAMMAR)

class WordTokenizer {
  #arrayOfTokens = []
  #typeOfTokenizer
  #stringToTokenize 

  constructor (stringToTokenize) {
    this.#typeOfTokenizer = 'WORD_AND_DOT'
    this.#stringToTokenize = stringToTokenize
  }


  getName() {
    console.log(this.#typeOfTokenizer)
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
    // counts the number of tokens
  }

  createTokens() {
    // takes a regex and returns tokens or throws error
  }

  getAllTokens() {
    const words = this.#stringToTokenize.match(LEXICAL_GRAMMAR.WORD)
    const dots = this.#stringToTokenize.match(LEXICAL_GRAMMAR.DOT)
    console.log(words)
    console.log(dots)
  }

}

export default WordTokenizer