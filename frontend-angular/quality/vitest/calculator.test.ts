import { describe, it, expect } from 'vitest';
import { add, divide } from './calculator';

describe('calculator', () => {
  it('adds', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('throws on divide by zero', () => {
    expect(() => divide(1, 0)).toThrow();
  });
});
