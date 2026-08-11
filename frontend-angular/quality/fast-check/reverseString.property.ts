import fc from 'fast-check';

function reverseString(s: string): string {
  return s.split('').reverse().join('');
}

fc.assert(
  fc.property(fc.string(), (s: string) => reverseString(reverseString(s)) === s)
);
