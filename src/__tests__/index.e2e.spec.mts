/**
 * @file E2E Tests - api
 * @module docmark-extension-js/tests/e2e/api
 */

import * as testSubject from '@flex-development/docmark-extension-js'
import { describe, expect, it } from 'vitest'

describe('e2e:docmark-extension-js', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
