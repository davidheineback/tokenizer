import Tokenizer from "./Tokenizer.js"
import WordGrammar from './WordGrammar.js'
import ArithmeticGrammar from "./ArithmeticGrammar.js"


function tokenizer () {
  const wordGrammar = new WordGrammar()
  const arithmeticGrammar = new ArithmeticGrammar()

  const token = new Tokenizer(wordGrammar, 'Sträng m.ed tokens.')
  console.log(token.createTokens())
  console.log(token.createAndSpecifyTokens())
  console.log(`\n String contains ${token.countTokens()} valid tokens \n`)

  const token2 = new Tokenizer(arithmeticGrammar, '11.2+21*10/20+(20+2)=3')
  console.log(token2.createTokens())
  console.log(token2.createAndSpecifyTokens())

}

tokenizer()