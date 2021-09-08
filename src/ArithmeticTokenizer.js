const LEXICAL_GRAMMAR = {
  NUMBER: /^[0-9]+(\.([0-9])+)?/ ,
  ADD: /^[+]/,
  MULTIPLY: /^[*]/,
  SUBTRACT: /^[-]/,
  DIVIDE: /^[\/]/,
  PARENTHESES: /^[()]/
}

class ArithmeticTokenizer {
  #activeTokenizerRegex
  #arrayOfTokens = []

  constructor (typeOfTokenizer, tokenString) {
    this.typeOfTokenizer = 'ARITHMETIC'
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

export default ArithmeticTokenizer