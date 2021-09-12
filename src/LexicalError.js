
export default class LexicalError extends Error {
  constructor (errorString) {
    super()
    this.message = `Lexical error: No match found for ${errorString}`
  }
}