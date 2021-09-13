import IndexError from "./IndexError.js"
import LexicalError from "./LexicalError.js"

export default class Tokenizer {
  #stringToTokenize
  #lexicalGrammarWithTypes
  #arrayOfTokens = []
  #temporaryArrayOfTokens = []
  #errorMessage
  #activeIndex

  constructor (lexicalGrammar, stringToTokenize) {
    this.#lexicalGrammarWithTypes = lexicalGrammar.getRegexExpressionsWithTypes()
    this.#stringToTokenize = stringToTokenize.trim()
    this.#errorMessage = lexicalGrammar.getErrorMessage()
    this.#arrayOfTokens = this.#createTokens()
    this.#activeIndex = 0
  }

  #resetTokenizer() {
    this.#arrayOfTokens = []
    this.#activeIndex = 0
  }

  countTokens() {
    return this.#arrayOfTokens.length
  }

  getActiveToken() {
    this.#isActiveTokenValid()
    if (this.#activeIndex === this.#arrayOfTokens.length) {
      return { tokenType: 'END', regex: 'END', tokenValue: 'END' }
    } else {
      return this.#arrayOfTokens[this.#activeIndex]
    }
  }

  #isActiveTokenValid() {
    if (this.#arrayOfTokens[this.#activeIndex]?.tokenType === this.#errorMessage) {
      throw new LexicalError(this.#arrayOfTokens[this.#activeIndex].tokenValue)
    }
  }

  setActiveTokenToNext() {
    if (this.#activeIndex < this.#arrayOfTokens.length) {
      this.#activeIndex = this.#activeIndex + 1
    }
    this.#isActiveTokenValid()
  }

  setActiveTokenToPrevious() {
    if (this.#activeIndex > 0) {
      this.#activeIndex = this.#activeIndex - 1
    } else {
      throw new IndexError()
    }
  }

  #createTokens() {
  while (this.#stringToTokenize.length > 0) {
    this.#temporaryArrayOfTokens = []
    this.#matchStringWithRegex()
    this.#addBestTokenMatch()
  }
    return this.#arrayOfTokens
  }


  #matchStringWithRegex() {
    this.#lexicalGrammarWithTypes.forEach(grammar => {
      if (this.#stringToTokenize.match(grammar.regex)) {
        this.#temporaryArrayOfTokens.push({ 
            tokenType: grammar.tokenType,
            regex: grammar.regex,
            tokenValue: this.#stringToTokenize.match(grammar.regex)[0] 
          }
        )
      }
    })
  }

  #addBestTokenMatch() {
    if (this.#temporaryArrayOfTokens.length > 0) {
      this.#temporaryArrayOfTokens.sort((current, next) => next.tokenValue.length - current.tokenValue.length)
      this.#arrayOfTokens.push(this.#temporaryArrayOfTokens[0])
      this.#stringToTokenize = this.#stringToTokenize.replace(this.#temporaryArrayOfTokens[0].tokenValue, '').trim()
    } else {
      this.#arrayOfTokens.push({ 
        tokenType: this.#errorMessage,
        regex: this.#errorMessage,
        tokenValue: this.#stringToTokenize
      })
      this.#stringToTokenize = ''
    }
  }

  setNewStringToTokenize(stringToTokenize) {
    this.#stringToTokenize = stringToTokenize
    this.#resetTokenizer()
    this.#createTokens()
  }

  setNewLexicalGrammar(lexicalGrammar) {
    this.#lexicalGrammarWithTypes = lexicalGrammar.getRegexExpressionsWithTypes()
    this.#resetTokenizer()
    this.#createTokens()
  }
}