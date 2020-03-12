import { hasGroupsSizeX } from '../../code/array/hasGroupsSizeX.js'
test('hasGroupsSizeX', () => {
  // eslint-disable-next-line comma-spacing
  expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toEqual(true)
})
