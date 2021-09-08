import WordTokenizer from './WordTokenizer.js'
import ArithmeticTokenizer from './ArithmeticTokenizer.js'

const TOKENIZER_OPTIONS = {
  WORD_AND_DOT: 'WORD_AND_DOT',
  ARITHMETIC: 'ARITHMETIC'
}

Object.freeze(TOKENIZER_OPTIONS)

class Tokenizer {
  #activeTokenizer
  #stringToTokenize
  #typeOfTokenizer

  constructor (typeOfTokenizer, stringToTokenize) {
    this.#typeOfTokenizer = typeOfTokenizer
    this.#stringToTokenize = stringToTokenize
    this.#setActiveTokenizer()
  }

  async #setActiveTokenizer () {
    switch (this.#typeOfTokenizer) {
      case TOKENIZER_OPTIONS.WORD_AND_DOT:
        // const { default: WordTokenizer } = await import('./WordTokenizer.js')
        this.#activeTokenizer = new WordTokenizer(this.#stringToTokenize )
        break
      case TOKENIZER_OPTIONS.ARITHMETIC:
        // const { default: ArithmeticTokenizer } = await import('./ArithmeticTokenizer.js')
        this.#activeTokenizer = new ArithmeticTokenizer(this.#stringToTokenize )
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
    this.#activeTokenizer.getAllTokens()
  }


}

export default Tokenizer