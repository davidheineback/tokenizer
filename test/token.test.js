import Tokenizer from "../src/Tokenizer.js"
import WordGrammar from '../src/WordGrammar.js'
import ArithmeticGrammar from '../src/ArithmeticGrammar.js'
import MaximalMunchGrammar from '../src/MaximalMunchGrammar.js'
import ExclamationGrammar from "../src/ExclamationGrammar.js"

describe('Testing for Tokenizer', () => {
  const wordGrammar = new WordGrammar()
  const arithmeticGrammar = new ArithmeticGrammar()
  const maximalMunchGrammar = new MaximalMunchGrammar()
  const exclamationGrammar = new ExclamationGrammar()

  it('TC1 - WordAndDotGrammar - test string: a - sequence:-', () => {
    const stringToTest = 'a'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('a')
    expect(tokenizer.getActiveToken().tokenType).toEqual('WORD')
  })

  it('TC2 - WordAndDotGrammar - test string: a aa - sequence:>', () => {
    const stringToTest = 'a aa'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('aa')
    expect(tokenizer.getActiveToken().tokenType).toEqual('WORD')
  })

  it('TC3 - WordAndDotGrammar - test string: a.b - sequence:>', () => {
    const stringToTest = 'a.b'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('.')
    expect(tokenizer.getActiveToken().tokenType).toEqual('DOT')
  })
  it('TC4 - WordAndDotGrammar - test string: a.b - sequence:>>', () => {
    const stringToTest = 'a.b'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('b')
    expect(tokenizer.getActiveToken().tokenType).toEqual('WORD')
  })
  it('TC5 - WordAndDotGrammar - test string: aa. b - sequence:>>', () => {
    const stringToTest = 'aa. b'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('b')
    expect(tokenizer.getActiveToken().tokenType).toEqual('WORD')
  })
  it('TC6 - WordAndDotGrammar - test string: a .b - sequence:>><', () => {
    const stringToTest = 'a .b'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToPrevious()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('.')
    expect(tokenizer.getActiveToken().tokenType).toEqual('DOT')
  })
  it('TC7 - WordAndDotGrammar - test string: empty  - sequence: ', () => {
    const stringToTest = ''
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('END')
    expect(tokenizer.getActiveToken().tokenType).toEqual('END')
  })
  it('TC8 - WordAndDotGrammar - test string: whitespace  - sequence: ', () => {
    const stringToTest = ' '
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('END')
    expect(tokenizer.getActiveToken().tokenType).toEqual('END')
  })
  it('TC9 - WordAndDotGrammar - test string: a - sequence:>', () => {
    const stringToTest = 'a'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenType).toEqual('END')
  })
  it('TC10 - WordAndDotGrammar - test string: a - sequence:<', () => {
    const stringToTest = 'a'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    expect(() => {
      tokenizer.setActiveTokenToPrevious()
    }).toThrow('Error due to trying to set current index to a invalid index.')
  })
  it('TC11 - WordAndDotGrammar - test string: ! - sequence:-', () => {
    const stringToTest = '!'
    const tokenizer = new Tokenizer(wordGrammar, stringToTest)
    expect(() => {
      tokenizer.getActiveToken()
    }).toThrow('Lexical error: No match found for !')
  })
  it('TC12 - ArithmeticGrammar - test string: 3 - sequence:-', () => {
    const stringToTest = '3'
    const tokenizer = new Tokenizer(arithmeticGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3')
    expect(tokenizer.getActiveToken().tokenType).toEqual('NUMBER')
  })
  it('TC13 - ArithmeticGrammar - test string: 3.14 - sequence:', () => {
    const stringToTest = '3.14'
    const tokenizer = new Tokenizer(arithmeticGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3.14')
    expect(tokenizer.getActiveToken().tokenType).toEqual('NUMBER')
  })
  it('TC14 - ArithmeticGrammar - test string: 3 + 54 * 4 - sequence:>>>', () => {
    const stringToTest = '3 + 54 * 4'
    const tokenizer = new Tokenizer(arithmeticGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('*')
    expect(tokenizer.getActiveToken().tokenType).toEqual('MULTIPLY')
  })
  it('TC15 - ArithmeticGrammar - test string: 3 + 54 # 4 - sequence:>>>', () => {
    const stringToTest = '3 + 54 # 4'
    const tokenizer = new Tokenizer(arithmeticGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(() => {
      tokenizer.setActiveTokenToNext()
    }).toThrow('Lexical error: No match found for # 4')
  })
  it('TC16 - ArithmeticGrammar - test string: 3.0+54.1     + 4.2 - sequence:><>>>', () => {
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
  it('TC17 - MaximalMunchGrammar - test string: 3 - sequence:', () => {
    const stringToTest = '3'
    const tokenizer = new Tokenizer(maximalMunchGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3')
    expect(tokenizer.getActiveToken().tokenType).toEqual('INTEGER')
  })
  it('TC18 - MaximalMunchGrammar - test string: 3.14 - sequence:', () => {
    const stringToTest = '3.14'
    const tokenizer = new Tokenizer(maximalMunchGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3.14')
    expect(tokenizer.getActiveToken().tokenType).toEqual('FLOAT')
  })
  it('TC19 - MaximalMunchGrammar - test string: 5 2 3.14 - sequence:>>', () => {
    const stringToTest = '5 2 3.14'
    const tokenizer = new Tokenizer(maximalMunchGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('3.14')
    expect(tokenizer.getActiveToken().tokenType).toEqual('FLOAT')
  })
  it('TC20 - MaximalMunchGrammar - test string: 5  +2 3.14 - sequence:>', () => {
    const stringToTest = '5  +2 3.14'
    const tokenizer = new Tokenizer(maximalMunchGrammar, stringToTest)
    expect(() => {
      tokenizer.setActiveTokenToNext()
    }).toThrow('Lexical error: No match found for +2 3.14')
  })
  it('TC21 - ExclamationGrammar - test string: ! sequence:', () => {
    const stringToTest = '!'
    const tokenizer = new Tokenizer(exclamationGrammar, stringToTest)
    expect(tokenizer.getActiveToken().tokenValue).toEqual('!')
    expect(tokenizer.getActiveToken().tokenType).toEqual('EXCLAMATION')
  })
  it('TC22 - ExclamationGrammar - test string: ! Hello, World! sequence: >>', () => {
    const stringToTest = '! Hello, World!'
    const tokenizer = new Tokenizer(exclamationGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    expect(() => {
      tokenizer.setActiveTokenToNext()
    }).toThrow('Lexical error: No match found for , World!')
  })
  it('TC23 - ExclamationGrammar - test string: ! Hello Wörld! sequence: >>>', () => {
    const stringToTest = '! Hello Wörld!'
    const tokenizer = new Tokenizer(exclamationGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(() => {
      tokenizer.setActiveTokenToNext()
    }).toThrow('Lexical error: No match found for örld!')
  })
  it('TC24 - ExclamationGrammar - test string: Hello World sequence: >>', () => {
    const stringToTest = 'Hello World'
    const tokenizer = new Tokenizer(exclamationGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(tokenizer.getActiveToken().tokenValue).toEqual('END')
    expect(tokenizer.getActiveToken().tokenType).toEqual('END')
  })
  it('TC25 - ExclamationGrammar - test string: Hello World sequence: >>>', () => {
    const stringToTest = 'Hello World'
    const tokenizer = new Tokenizer(exclamationGrammar, stringToTest)
    tokenizer.setActiveTokenToNext()
    tokenizer.setActiveTokenToNext()
    expect(() => {
      tokenizer.setActiveTokenToNext()
    }).toThrow('Error due to trying to set current index to a invalid index.')
  })
})