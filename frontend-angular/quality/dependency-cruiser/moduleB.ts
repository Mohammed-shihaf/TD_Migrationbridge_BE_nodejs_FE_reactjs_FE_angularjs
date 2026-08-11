import { fromA } from './moduleA';

export function fromB(): string {
  return 'B';
}

export function circular(): string {
  return fromA();
}
