import { test } from 'node:test'
import assert from 'node:assert/strict'
import { validateText } from '../utils/validateText.js'

test('rejects non-strings', () => {
  assert.equal(validateText(123).valid, false)
})

test('rejects empty or whitespace-only text', () => {
  assert.equal(validateText('   ').valid, false)
})

test('rejects text over 5000 characters', () => {
  assert.equal(validateText('a'.repeat(5001)).valid, false)
})

test('trims and accepts valid text', () => {
  const result = validateText('  I flew over a city  ')
  assert.equal(result.valid, true)
  assert.equal(result.value, 'I flew over a city')
})