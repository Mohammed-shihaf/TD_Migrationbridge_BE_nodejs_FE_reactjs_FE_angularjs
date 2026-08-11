import { add, isEven } from './calculator';

test('add', () => {
  expect(add(2, 3)).toBe(5);
});

test('isEven', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(3)).toBe(false);
});
