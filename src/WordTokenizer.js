const LEXICAL_GRAMMAR = {
  WORD: /^[\w|åäöÅÄÖ]+/,
  DOT: /^\./
}

Object.freeze(LEXICAL_GRAMMAR)

class WordTokenizer {
  #activeTokenizerRegex
  #arrayOfTokens = []

  constructor (typeOfTokenizer, tokenString) {
    this.typeOfTokenizer = 'WORD_AND_DOT'
    this.tokenString = tokenString
  }


  getName() {
    console.log(this.typeOfTokenizer)
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
    
  }

}

export default WordTokenizer