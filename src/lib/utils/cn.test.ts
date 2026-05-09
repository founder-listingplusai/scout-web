import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });
  it('skips falsy values', () => {
    expect(cn('a', false, undefined, 'b')).toBe('a b');
  });
  it('returns empty string when nothing truthy', () => {
    expect(cn(false, undefined)).toBe('');
  });
});
