/**
 * @file Unit Tests - comments
 * @module docmark-extension-js/tests/unit/comments
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../comments.mts'

describe('unit:comments', () => {
  it('should be extension', () => {
    expect(testSubject).toMatchSnapshot()
  })
})
