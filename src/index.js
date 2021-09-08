import Tokenizer from "./Tokenizer.js"

function tokenizer () {
  const token = new Tokenizer('WORD_AND_DOT', 'Sträng m.ed tokens.')
  token.getAllTokens()

  // token = new Tokenizer('ARITHMETIC', 'Sträng')
  // token.firstToken()
  // token.activeToken()
}

  // 'WORD_AND_DOT'
  // 'ARITHMETIC'

tokenizer()