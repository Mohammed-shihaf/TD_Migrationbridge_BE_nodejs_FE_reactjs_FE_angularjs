import { fromB } from './moduleB';

export function fromA(): string {
  return 'A depends on ' + fromB();
}
