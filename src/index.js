import Tokenizer from "./Tokenizer.js"
import WordGrammar from './WordGrammar.js'
import ArithmeticGrammar from "./ArithmeticGrammar.js"
import MaximalMunchGrammar from './MaximalMunchGrammar.js'
import ExclamationGrammar from './ExclamationGrammar.js'

function tokenizer() {
  const wordGrammar = new WordGrammar()
  const arithmeticGrammar = new ArithmeticGrammar()
  const maximalMunchGrammar = new MaximalMunchGrammar()
  const exclamationGrammar = new ExclamationGrammar()

  const token = new Tokenizer(exclamationGrammar, '! + H!EJ')
  token.setActiveTokenToNext()
  
  console.log(token.getActiveToken())
  
}

tokenizer()