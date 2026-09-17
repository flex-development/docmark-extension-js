/**
 * @file Unit Tests - blockComment
 * @module docmark-extension-js/tests/unit/blockComment
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../block.comment.mts'

describe('unit:blockComment', () => {
  it('should be comment construct', () => {
    expect(testSubject).to.have.property('continuation')
    expect(testSubject).toMatchSnapshot()
  })
})
