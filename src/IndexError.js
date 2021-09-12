
export default class IndexError extends Error {
  constructor () {
    super()
    this.message = 'Error due to trying to set current index to index < than index 0.'
  }
}