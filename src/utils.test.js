import { getRandomArrayItem, parseCardNumber } from './utils'

describe('getRandomArrayItem', () => {
  test('Returns array item', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    let truthy = true
    for (let i = 1; i <= 50; i++) {
      truthy = truthy && arr.includes(getRandomArrayItem(arr))
    }
    expect(truthy).toBe(true)
  })
})

describe('parseCardNumber', () => {
  test('Should ignore any characters over 16', () => {
    expect(parseCardNumber('124312521352452452352345').length).toBe(16)
  })
  test('Should return a string of length 16 for any argument', () => {
    let str = ''
    expect(parseCardNumber(str).length).toBe(16)
    str = 'aaa'
    expect(parseCardNumber(str).length).toBe(16)
  })
  test('Any characters above input length should be #', () => {
    ;['', '123'].forEach(str => {
      const reStr = `\\d{${str.length}}#{${16 - str.length}}`
      const re = new RegExp(reStr, 'gi')
      expect(parseCardNumber(str).match(re).length).toBe(1)
    })
  })
  // Characters in positions from 4 to 11 should be *, if input length is 12 or more
  test('For length 16 input, characters in positions from 4 to 11 should be *', () => {
    const str = 1234567890123456
    const out = '1234********3456'
    expect(parseCardNumber(str)).toBe(out)
  })
  test('For input lenghts less than 16, hides 4 to 11 existing positions with *, the rest are #', () => {
    const str = 12345678
    const out = '1234****########'
    expect(parseCardNumber(str)).toBe(out)
  })
  // Characters 0 to 3 and 12 to 15 should be equal to corresponding input characters
})
