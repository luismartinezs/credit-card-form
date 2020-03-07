import { getRandomArrayItem } from './utils'

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
