/**
 * @file comments
 * @module docmark-extension-js/comments
 */

import { hashbang } from '@flex-development/docmark-extension-hashbang'
import { codes } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'
import blockComment from './block.comment.mts'
import lineComment from './line.comment.mts'

/**
 * The JavaScript comment syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} comments
 */
const comments: NormalizedExtension = {
  source: {
    [codes.numberSign]: hashbang,
    [codes.slash]: [blockComment, lineComment]
  }
}

export default comments
