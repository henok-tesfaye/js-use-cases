import {
  pipe,
  pipeWithClosure
} from './pipe'

describe('pipe function', () => {
  it('should return correct result', () => {
    expect(pipe(5, x => x + 2, x => x * 3)).toBe(21)
    expect(pipe(10, x => x + 2, x => x * 3)).toBe(36)

    expect(pipe(5, x => x * x, x => x + 2, x => x - 2)).toBe(25)
  })
})

describe('pipe function', () => {
  it('should return correct result', () => {
    const vatCalculator = pipeWithClosure(x => x + 2, x => x * 3)
    expect(vatCalculator(5)).toBe(21)
    expect(vatCalculator(10)).toBe(36)
  })
})
