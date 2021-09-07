const TOKENIZER_OPTIONS = {
  'WORD_AND_DOT': 'WORD_AND_DOT',
  'ARITHMETIC': 'ARITHMETIC',
  'JAVA': 'JAVA',
  'JAVASCRIPT': 'JAVASCRIPT'
}

Object.freeze(TOKENIZER_OPTIONS)

class Tokenizer {
  #activeTokenizerRegex

  constructor (typeOfTokenizer, tokenString) {
    this.typeOfTokenizer = typeOfTokenizer
    this.tokenString = tokenString
    this.#activeTokenizerRegex = this.#setActiveTokenizerRegex()
  }

  printTest () {
    console.log(process.argv.slice(2))
    return 'test'
  }

  #setActiveTokenizerRegex () {
    switch (this.typeOfTokenizer) {
      case TOKENIZER_OPTIONS.WORD_AND_DOT:
        return 'regex for words'
      case TOKENIZER_OPTIONS.ARITHMETIC:
        return 'regex for arithmetic'
      default:
        throw new Error('Please choose a supported tokenizer type')
    }
    // takes this.tokenizerType and returns a regexpression to use to determine tokens
    //createTokens(regex)
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

  createTokens(regex) {
    // takes a regex and returns tokens or throws error
  }


}

export default Tokenizer