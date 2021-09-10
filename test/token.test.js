import Tokenizer from "../src/Tokenizer.js"
import WordGrammar from '../src/WordGrammar.js'
import ArithmeticGrammar from '../src/ArithmeticGrammar.js'
import MaximalMunchGrammar from '../src/MaximalMunchGrammar.js'

describe('Get testing for database routes', () => {
  const wordGrammar = new WordGrammar()
  const arithmeticGrammar = new ArithmeticGrammar()
  const maximalMunchGrammar = new MaximalMunchGrammar()

  it('TC1 - WordAndDotGrammar - test string: a - sequens:-', () => {
    const stringToTest = 'a'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('a')
    expect(tokenizer.getActiveToken().tokenType).toEqual('WORD')
  })

  it('TC2 - WordAndDotGrammar - test string: a aa - sequens:>', () => {
    const stringToTest = 'a aa'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('aa')
    expect(tokenizer.getActiveToken().tokenType).toEqual('WORD')
  })

  it('TC3 - WordAndDotGrammar - test string: a.b - sequens:>', () => {
    const stringToTest = 'a.b'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('.')
    expect(tokenizer.getActiveToken().tokenType).toEqual('DOT')
  })
  it('TC4 - WordAndDotGrammar - test string: a.b - sequens:>>', () => {
    const stringToTest = 'a.b'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('b')
    expect(tokenizer.getActiveToken().tokenType).toEqual('WORD')
  })
  it('TC5 - WordAndDotGrammar - test string: aa. b - sequens:>>', () => {
    const stringToTest = 'aa. b'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('b')
    expect(tokenizer.getActiveToken().tokenType).toEqual('WORD')
  })
  it('TC6 - WordAndDotGrammar - test string: a .b - sequens:>><', () => {
    const stringToTest = 'a .b'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToPrevious()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('.')
    expect(tokenizer.getActiveToken().tokenType).toEqual('DOT')
  })
  it('TC7 - WordAndDotGrammar - test string: empty  - sequens: ', () => {
    const stringToTest = ''
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('END')
    expect(tokenizer.getActiveToken().tokenType).toEqual('END')
  })
  it('TC8 - WordAndDotGrammar - test string: whitespace  - sequens: ', () => {
    const stringToTest = ' '
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('END')
    expect(tokenizer.getActiveToken().tokenType).toEqual('END')
  })
  it('TC9 - WordAndDotGrammar - test string: a - sequens:>', () => {
    const stringToTest = 'a'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenType).toEqual('END')
  })
  it('TC10 - WordAndDotGrammar - test string: a - sequens:<', () => {
    const stringToTest = 'a'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToPrevious()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('a')
    expect(tokenizer.getActiveToken().tokenType).toEqual('WORD')
  })
  it('TC11 - WordAndDotGrammar - test string: 3 - sequens:-', () => {
    const stringToTest = '3'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3')
    expect(tokenizer.getActiveToken().tokenType).toEqual('WORD')
  })
  it('TC12 - ArithmeticGrammar - test string: 3 - sequens:-', () => {
    const stringToTest = '3'
    const tokenizer = new Tokenizer(arithmeticGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3')
    expect(tokenizer.getActiveToken().tokenType).toEqual('NUMBER')
  })
  it('TC13 - ArithmeticGrammar - test string: 3.14 - sequens:', () => {
    const stringToTest = '3.14'
    const tokenizer = new Tokenizer(arithmeticGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3.14')
    expect(tokenizer.getActiveToken().tokenType).toEqual('NUMBER')
  })
  it('TC14 - ArithmeticGrammar - test string: 3 + 54 * 4 - sequens:>>>', () => {
    const stringToTest = '3 + 54 * 4'
    const tokenizer = new Tokenizer(arithmeticGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('*')
    expect(tokenizer.getActiveToken().tokenType).toEqual('MULTIPLY')
  })
  it('TC15 - ArithmeticGrammar - test string: 3 + 54 # 4 - sequens:>>>', () => {
    const stringToTest = '3 + 54 # 4'
    const tokenizer = new Tokenizer(arithmeticGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('# 4')
    expect(tokenizer.getActiveToken().tokenType).toEqual('LEXICAL ERROR')
  })
  it('TC16 - ArithmeticGrammar - test string: 3.0+54.1     + 4.2 - sequens:><>>>', () => {
    const stringToTest = '3.0+54.1     + 4.2'
    const tokenizer = new Tokenizer(arithmeticGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToPrevious()
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('+')
    expect(tokenizer.getActiveToken().tokenType).toEqual('ADD')
  })
  it('TC17 - MaximalMunchGrammar - test string: 3 - sequens:', () => {
    const stringToTest = '3'
    const tokenizer = new Tokenizer(maximalMunchGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3')
    expect(tokenizer.getActiveToken().tokenType).toEqual('INTEGER')
  })
  it('TC18 - MaximalMunchGrammar - test string: 3.14 - sequens:', () => {
    const stringToTest = '3.14'
    const tokenizer = new Tokenizer(maximalMunchGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3.14')
    expect(tokenizer.getActiveToken().tokenType).toEqual('FLOAT')
  })
  it('TC19 - MaximalMunchGrammar - test string: 5 2 3.14 - sequens:>>', () => {
    const stringToTest = '5 2 3.14'
    const tokenizer = new Tokenizer(maximalMunchGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3.14')
    expect(tokenizer.getActiveToken().tokenType).toEqual('FLOAT')
  })
  it('TC20 - MaximalMunchGrammar - test string: 5  +2 3.14 - sequens:>>><', () => {
    const stringToTest = '5  +2 3.14'
    const tokenizer = new Tokenizer(maximalMunchGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToPrevious()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('+2 3.14')
    expect(tokenizer.getActiveToken().tokenType).toEqual('LEXICAL ERROR')
  })
})