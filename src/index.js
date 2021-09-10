import Tokenizer from "./Tokenizer.js"
import WordGrammar from './WordGrammar.js'
import ArithmeticGrammar from "./ArithmeticGrammar.js"


function tokenizer () {
  const wordGrammar = new WordGrammar()
  const token = new Tokenizer(wordGrammar, 'Hello th.ere')
  console.log(token.getTokens())
  console.log(token.getActiveToken())
  token.setActiveTokenToNext()
  console.log(token.getActiveToken())
  token.setActiveTokenToNext()
  token.setActiveTokenToNext()
  token.setActiveTokenToNext()
  token.setActiveTokenToNext()
  console.log(token.getActiveToken())
  token.setActiveTokenToPrevious()
  console.log(token.getActiveToken())
  // token.setNewStringToTokenize('Hej på dig')
  // console.log(token.getTokens())


  // console.log(`\n String contains ${token.countTokens()} valid tokens \n`)

  const arithmeticGrammar = new ArithmeticGrammar()
  const token2 = new Tokenizer(arithmeticGrammar, '11.2+21*10/20+(20+2)=hej323')
  console.log(token2.getTokens())
  console.log(token2.getActiveToken())
  token.setActiveTokenToPrevious()
  token.setActiveTokenToPrevious()
  token.setActiveTokenToPrevious()
  token.setActiveTokenToPrevious()
  console.log(token2.getActiveToken())

  // token.setActiveTokenToNext()
  // token.setActiveTokenToNext()
  // token.setActiveTokenToNext()
  // token.setActiveTokenToNext()
  // token.setActiveTokenToNext()
  // token.setActiveTokenToPrevious()
}

tokenizer()