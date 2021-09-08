import Tokenizer from "./Tokenizer.js"
import WordGrammar from './WordGrammar.js'


function tokenizer () {
  const lexicalGrammar = new WordGrammar()
  const token = new Tokenizer(lexicalGrammar, 'Sträng m.ed tokens.')
  console.log(token.createTokens())
  console.log(token.createAndSpecifyTokens())
  console.log(`\n String contains ${token.countTokens()} valid tokens \n`)

  // token = new Tokenizer('ARITHMETIC', 'Sträng')
  // token.firstToken()
  // token.activeToken()
}

  // 'WORD_AND_DOT'
  // 'ARITHMETIC'

tokenizer()