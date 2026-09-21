/**
 * @file E2E Tests - comments
 * @module docmark-extension-js/tests/e2e/comments
 */

import snapshot from '#tests/utils/snapshot-events'
import { parse, postprocess, preprocess } from '@flex-development/docmark'
import testSubject from '@flex-development/docmark-extension-js'
import { mode } from '@flex-development/docmark-util-symbol'
import type {
  Chunk,
  FileLike,
  ParseOptions,
  Settings,
  TokenizeContext
} from '@flex-development/docmark-util-types'
import { readSync as read } from 'to-vfile'
import { beforeAll, describe, expect, it } from 'vitest'

describe('e2e:comments', () => {
  let file: FileLike
  let slice: Chunk[]

  beforeAll(() => {
    file = read('__fixtures__/comments.txt')
    slice = preprocess()(file, undefined, true)
  })

  it('should parse javascript comments', () => {
    // Arrange
    const options: ParseOptions = { extensions: [testSubject] }
    const context: TokenizeContext = parse(options).source()

    // Act
    const result = postprocess(context.write(slice))

    // Expect
    expect(snapshot(result)).toMatchSnapshot()
  })

  it('should respect `parser.constructs.settings.modes.block`', () => {
    // Arrange
    const settings: Settings = { modes: { block: mode.documentation } }
    const options: ParseOptions = { extensions: [testSubject, { settings }] }
    const context: TokenizeContext = parse(options).source()

    // Act
    const result = postprocess(context.write(slice))

    // Expect
    expect(snapshot(result)).toMatchSnapshot()
  })
})
