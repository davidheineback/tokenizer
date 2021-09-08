import WordTokenizer from './WordTokenizer.js'
import ArithmeticTokenizer from './ArithmeticTokenizer.js'

const TOKENIZER_OPTIONS = {
  WORD_AND_DOT: 'WORD_AND_DOT',
  ARITHMETIC: 'ARITHMETIC',
  JAVA: 'JAVA',
  JAVASCRIPT: 'JAVASCRIPT'
}

Object.freeze(TOKENIZER_OPTIONS)

class Tokenizer {
  #activeTokenizer
  #tokenString
  #typeOfTokenizer

  constructor (typeOfTokenizer, tokenString) {
    this.#typeOfTokenizer = typeOfTokenizer
    this.#tokenString = tokenString
    this.#setActiveTokenizer()
  }

  async #setActiveTokenizer () {
    switch (this.#typeOfTokenizer) {
      case TOKENIZER_OPTIONS.WORD_AND_DOT:
        // const { default: WordTokenizer } = await import('./WordTokenizer.js')
        this.#activeTokenizer = new WordTokenizer()
        break
      case TOKENIZER_OPTIONS.ARITHMETIC:
        // const { default: ArithmeticTokenizer } = await import('./ArithmeticTokenizer.js')
        this.#activeTokenizer = new ArithmeticTokenizer()
        break
      default:
        throw new Error('Please choose a supported tokenizer type')
    }
  }

  getName() {
    this.#activeTokenizer.getName()
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

export default Tokenizer