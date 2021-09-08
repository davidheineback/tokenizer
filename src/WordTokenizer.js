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
    // this.#activeTokenizerRegex = this.#setActiveTokenizerRegex()
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

    // #setActiveTokenizerRegex () {
  //   switch (this.typeOfTokenizer) {
  //     case TOKENIZER_OPTIONS.WORD_AND_DOT:
  //       return {
  //         word: /^[\w|åäöÅÄÖ]+/,
  //         dot: /^\./
  //     }
  //     case TOKENIZER_OPTIONS.ARITHMETIC:
  //       return {
  //         number: /^[0-9]+(\.([0-9])+)?/ ,
  //         add: /^[+]/,
  //         multply: /^[]/
  //     }
  //     default:
  //       throw new Error('Please choose a supported tokenizer type')
  //   }
  // }


}

export default WordTokenizer