const LEXICAL_GRAMMAR = {
  NUMBER: /^[0-9]+(\.([0-9])+)?/ ,
  ADD: /^[\+]/,
  MULTIPLY: /[\*]/,
  SUBTRACT: /^[\-]/,
  DIVIDE: /^[\/]/,
  PARENTHESES: /^[\(\)]/
}

class ArithmeticGrammar {
  #arrayOfTokens = []
  #typeOfTokenizer
  #stringToTokenize

  constructor (stringToTokenize) {
    this.#typeOfTokenizer = 'ARITHMETIC'
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
    
  }

}

export default ArithmeticGrammar