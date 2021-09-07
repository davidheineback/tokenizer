import Tokenizer from "../src/Tokenizer";

describe('Get testing for database routes', () => {

    // 
  it('test a tokenizer ', async () => {
    const token = new Tokenizer()
    expect(token.printTest()).toEqual('test')
  })
})