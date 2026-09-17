/**
 * @file lineComment
 * @module docmark-extension-js/lineComment
 */

import { factoryLineComment } from '@flex-development/docmark-factory-line'
import { codes, lang } from '@flex-development/docmark-util-symbol'
import type { ContinuableConstruct } from '@flex-development/docmark-util-types'

/**
 * The JavaScript line comment construct.
 *
 * This construct is expected to run at the `source` content level.
 *
 * @see {@linkcode ContinuableConstruct}
 *
 * @const {ContinuableConstruct} comment
 */
const comment: ContinuableConstruct = factoryLineComment({
  fields: { lang: lang.javascript },
  markers: [
    { code: codes.slash, fields: { _open: true } },
    { code: codes.slash, fields: { _close: true } }
  ]
})

export default comment
